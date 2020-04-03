import React, { useEffect, useState } from 'react';
import { AppContext } from '../contexts';
import { fetchQuestions, placeVote } from './utils';

const AppProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    try {
      const fetchedQuestions = await fetchQuestions();
      setQuestions(fetchedQuestions);
    } catch (error) {
      console.error(error);
    }
  };

  const vote = async (url) => {
    try {
      const choice = await placeVote(url);
      return choice;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    questions,
    vote
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
