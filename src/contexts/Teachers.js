import React, { createContext, useContext, useEffect, useState } from 'react';

import { teachersApi } from '../services/teachers';
import { useUser } from './User';

const TeachersContext = createContext();

export function TeachersContextProvider({ children }) {
  const [teachers, setTeachers] = useState([]);

  const { user } = useUser();

  async function getTeachers() {
    try {
      const response = await teachersApi.read();
      if (response.status === 200) {
        setTeachers(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTeachers();
  }, [user]);

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