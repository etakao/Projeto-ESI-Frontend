import React, { createContext, useContext, useEffect, useState } from 'react';

import { teachersApi } from '../services/teachers';

const TeachersContext = createContext();

export function TeachersContextProvider({ children }) {
  const [teachers, setTeachers] = useState('');

  useEffect(async () => {
    try {
      const response = await teachersApi.read();
      if (response.status === 200) {
        setTeachers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <TeachersContext.Provider value={{
      teachers
    }}>
      {children}
    </TeachersContext.Provider>
  );
}

export function useTeachers() {
  return useContext(TeachersContext);
}