import React from 'react';
import ReactModal from 'react-modal';

import './index.css';

const AppModal = ({ onClose, headerText, headerClass = '', children }) => {
  return (
    <ReactModal
      isOpen={true}
      contentLabel='Invoice creation modal'
      onRequestClose={onClose}
      className='dialog w-full md:w-2/5 shadow-2xl border rounded fixed bg-white focus:border-gray-200'
      overlayClassName='overlay'
    >
      <header className='bg-gray-100 px-4 py-4 border-b border-gray-400 flex justify-between items-center'>
        <h3
          className={`${headerClass}text-xl text-purple-600 tracking-normal font-bold`}
        >
          {headerText}
        </h3>
        <div>
          <button
            className='text-sm text-gray-800 font-semibold bg-gray-300 px-4 py-1 rounded shadow'
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </header>
      <>{children}</>
    </ReactModal>
  );
};

export default AppModal;
