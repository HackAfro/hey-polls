import React from 'react';
import { BreedingRhombusSpinner } from 'react-epic-spinners';

const LoadingIndicator = () => {
  return (
    <div className='flex flex-col items-center justify-center px-16 py-12'>
      <BreedingRhombusSpinner color='purple' size={90} />
      <h3 className='text-lg font-semibold tracking-tight mt-8 text-center'>
        Fetching Question..
      </h3>
    </div>
  );
};

export default LoadingIndicator;
