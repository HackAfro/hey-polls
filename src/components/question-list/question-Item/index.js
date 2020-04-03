import React from 'react';
import { Star as StarIcon } from 'react-feather';
import { getTotalVotes, getTopChoice } from './utils';
import { Link } from 'react-router-dom';

const QuestionItem = ({ question }) => {
  const parseDate = date => {
    return new Date(date).toDateString();
  };

  const totalVotes = getTotalVotes(question.choices);
  const topChoice = getTopChoice(question.choices);

  return (
    <tr className='shadow text-base text-gray-800 border-gray-300 hover:shadow-xl hover:border-purple-300 hover:border hover:rounded'>
      <td className='px-2 py-2 md:px-4 md:py-6 border-b'>
        {question.published_at ? parseDate(question.published_at) : 'N/A'}
      </td>
      <td className='px-2 py-2 md:px-4 md:py-6 border-b capitalize'>
        {question.question}
      </td>
      <td className='px-2 py-2 md:px-4 md:py-6 border-b'>{totalVotes}</td>
      <td className='px-2 py-2 md:px-4 md:py-6 border-b capitalize'>
        {topChoice}
      </td>
      <td className='px-2 py-2 md:px-4 md:py-6 border-b'>
        {question.choices.length} choices
      </td>
      <td className='px-2 py-2 md:px-4 md:py-6 border-b'>
        <ul className='flex'>
          <li className='mr-4'>
            <Link title='Place vote' to={question.url}>
              <StarIcon size={20} className='text-gray-500' />
            </Link>
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default QuestionItem;
