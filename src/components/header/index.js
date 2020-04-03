import React from 'react';


const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <h3 className='text-lg text-purple-700 font-semibold md:text-xl '>Questions List</h3>

      <div>
        {/* <button
          className='py-2 px-2 flex text-sm text-white bg-purple-700 shadow-lg font-bold md:py-4 md:px-4'
          onClick={toggleModalState}
        >
          Add Question
          <AddIcon size={20} className='ml-2' />
        </button> */}
      </div>
    </header>
  );
};

export default Header;
