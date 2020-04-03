import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import Results from './results';
import AppModal from '../modal';

import { AppContext } from '../../contexts';
import { getTotalVotes } from '../question-list/question-Item/utils';
import { fetchQuestion } from '../../providers/utils';
import LoadingIndicator from './loading';
import { isSelected } from './utils';

const QuestionDetail = () => {
  const location = useLocation();
  const history = useHistory();
  const { vote } = useContext(AppContext);

  const [question, setQuestion] = useState({
    url: '',
    choices: [],
    question: ''
  });
  const [selectedChoice, setSelectedChoice] = useState({
    url: '',
    choice: '',
    votes: 0
  });

  const [fetchingQuestion, setFetchingQuestion] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [voting, setVoting] = useState(false);

  const totalVotes = getTotalVotes(question.choices);

  const onCloseRequest = () => {
    history.push('/');
  };

  const onOptionClick = choice => {
    setSelectedChoice(choice);
  };

  const getQuestion = async url => {
    try {
      const res = await fetchQuestion(url);
      setQuestion(res);
      setFetchingQuestion(false);
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  const placeVote = async () => {
    setVoting(true);
    await vote(selectedChoice.url);

    await getQuestion(location.pathname);
    setShowResults(true);
  };

  useEffect(() => {
    getQuestion(location.pathname);
  }, [location.pathname]);

  return (
    <AppModal onClose={onCloseRequest} headerText='Place Vote'>
      {fetchingQuestion ? (
        <LoadingIndicator />
      ) : (
        <section className='py-5 px-8'>
          <h2 className='capitalize text-xl font-semibold text-gray-600'>
            {question.question}
          </h2>
          <div className='vote-section py-4 rounded-lg'>
            <ul>
              {showResults ? (
                <Results
                  choices={question.choices}
                  selectedChoice={selectedChoice}
                />
              ) : (
                question.choices.map(choice => (
                  <li
                    className='choice capitalize font-semibold p-3 relative text-sm border rounded-lg flex items-center my-2 cursor-pointer hover:shadow-lg'
                    role='button'
                    onClick={e => onOptionClick(choice)}
                  >
                    <div
                      className={`${isSelected(choice, selectedChoice) &&
                        'bg-purple-700'} w-3 h-3 border border-purple-700 mr-3 rounded-full`}
                    ></div>
                    {choice.choice}
                  </li>
                ))
              )}
            </ul>
            <div className='flex items-center pt-5'>
              {!showResults && (
                <button
                  className='py-2 px-2 flex text-sm text-white bg-purple-700 shadow-lg font-bold md:py-2 md:px-4'
                  onClick={placeVote}
                  disabled={voting}
                >
                  Vot{voting ? 'ing...' : 'e'}
                </button>
              )}
              <span className='ml-3 text-base font-bold text-gray-500'>
                {totalVotes} Votes
              </span>
            </div>
          </div>
        </section>
      )}
    </AppModal>
  );
};

export default QuestionDetail;
