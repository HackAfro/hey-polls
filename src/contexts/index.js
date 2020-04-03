import { createContext } from 'react';

export const AppContext = createContext({
  questions: [],

  vote: url => {}
});
