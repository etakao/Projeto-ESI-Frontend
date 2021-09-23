import React, { createContext, useContext, useEffect, useState } from 'react';

import { evaluationsApi } from '../services/evaluations';

const EvaluationsContext = createContext();

export function EvaluationsContextProvider({ children }) {
  const [evaluations, setEvaluations] = useState('');

  useEffect(async () => {
    try {
      const response = await evaluationsApi.read();
      if (response.status === 200) {
        setEvaluations(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <EvaluationsContext.Provider value={{
      evaluations
    }}>
      {children}
    </EvaluationsContext.Provider>
  );
}

export function useEvaluations() {
  return useContext(EvaluationsContext);
}