import React from 'react';
import { getPercentage, isSelected } from './utils';
import { getTotalVotes } from '../question-list/question-Item/utils';

const Results = ({ choices, selectedChoice }) =>
  choices.map(choice => {
    const total = getTotalVotes(choices);
    const percentage = getPercentage(choice.votes, total);
    const bgColor = isSelected(choice, selectedChoice)
      ? 'bg-purple-500'
      : 'bg-gray-300';

    return (
      <li className='choice capitalize font-semibold p-3 relative text-sm border rounded-lg flex justify-between items-center my-2'>
        <div
          style={{
            height: '100%',
            width: `${percentage}%`,
            left: 0,
            position: 'absolute',
            zIndex: -1
          }}
          className={`${bgColor} rounded-l-lg`}
        ></div>

        <span className='text-purple-800'> {choice.choice}</span>
        <span className='text-purple-800'>{percentage}%</span>
      </li>
    );
  });

export default Results;
