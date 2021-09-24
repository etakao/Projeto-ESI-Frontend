import React, { createContext, useContext, useEffect, useState } from 'react';

import { evaluationsApi } from '../services/evaluations';
import { useUser } from './User';

const EvaluationsContext = createContext();

export function EvaluationsContextProvider({ children }) {
  const [evaluations, setEvaluations] = useState([]);

  const { user } = useUser();

  async function getEvaluations() {
    try {
      const response = await evaluationsApi.read();
      if (response.status === 200) {
        setEvaluations(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEvaluations();
  }, [user]);

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