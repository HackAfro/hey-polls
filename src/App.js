import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header';
import QuestionList from './components/question-list';
import AppProvider from './providers';
import QuestionDetail from './components/questionDetail';


import './App.css';

function App() {
  return (
    <AppProvider>
      <div className='mx-auto w-full py-4 px-4 md:w-4/5 md:py-8 md:px-6'>
        <Header />
        <div className='max-w-full overflow-x-auto mt-8 md:mt-10'>
          <QuestionList />
        </div>

        <div>
          <Route path='/questions/:questionId'>
            <QuestionDetail />
          </Route>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
