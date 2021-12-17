import React, { useEffect } from 'react';
import { getTrivias } from '../../views/trivia-selector/utils/questions';

const ACTIONS = {
  SET_TRIVIA: 'SET_TRIVIA',
  SET_TRIVIAS: 'SET_TRIVIAS',
};

const initialState = {
  trivia: undefined,
  trivias: [],
};

export const TriviaContext = React.createContext({ ...initialState });

const triviaReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_TRIVIAS: {
      return { ...state, trivias: action.payload };
    }
    case ACTIONS.SET_TRIVIA: {
      return { ...state, trivia: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const TriviaProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(triviaReducer, initialState);

  useEffect(() => {
    getTrivias().then(response => {
      setTrivias(response);
    });
  }, []);

  const setTrivia = id => {
    const trivia = state.trivias.find(trivia => trivia.id === id);
    dispatch({
      type: ACTIONS.SET_TRIVIA,
      payload: trivia,
    });
  };

  const setTrivias = trivias => {
    dispatch({
      type: ACTIONS.SET_TRIVIAS,
      payload: trivias,
    });
  };

  return (
    <TriviaContext.Provider
      value={{
        ...state,
        setTrivia,
      }}
    >
      {children}
    </TriviaContext.Provider>
  );
};

export default TriviaProvider;
