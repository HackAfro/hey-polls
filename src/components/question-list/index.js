import React, { useContext } from 'react';
import { AppContext } from '../../contexts';
import QuestionItem from './question-Item';

const QuestionList = () => {
  const {
    questions,
  } = useContext(AppContext);

  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th className='text-left text-gray-500 text-xs font-bold uppercase px-4'>
            Date
          </th>
          <th className='text-left text-gray-500 text-xs font-bold uppercase px-4'>
            Question
          </th>
          <th className='text-left text-gray-500 text-xs font-bold uppercase px-4'>
            Total Votes
          </th>
          <th className='text-left text-gray-500 text-xs font-bold uppercase px-4'>
            Top Choice
          </th>
          <th className='text-left text-gray-500 text-xs font-bold uppercase px-4'>
            Choices
          </th>
          <th className='text-left text-gray-500 text-xs font-bold uppercase px-4'>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {questions.map(question => (
          <QuestionItem
            key={question.url}
            question={question}
          />
        ))}
      </tbody>
    </table>
  );
};

export default QuestionList;
