import React, { createContext, useContext, useEffect, useState } from 'react';

import { formsApi } from '../services/forms';
import { useUser } from './User';

const FormsContext = createContext();

export function FormsContextProvider({ children }) {
  const [forms, setForms] = useState([]);

  const { user } = useUser();

  async function getForms() {
    try {
      const response = await formsApi.read();
      if (response.status === 200) {
        setForms(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getForms();
  }, [user]);

  return (
    <FormsContext.Provider value={{
      forms
    }}>
      {children}
    </FormsContext.Provider>
  );
}

export function useForms() {
  return useContext(FormsContext);
}