import React, { createContext, useContext, useEffect, useState } from 'react';

import { studentsApi } from '../services/students';
import { useUser } from './User';

const StudentsContext = createContext();

export function StudentsContextProvider({ children }) {
  const [students, setStudents] = useState('');

  const { user } = useUser();

  useEffect(async () => {
    try {
      const response = await studentsApi.read();
      if (response.status === 200) {
        if (user.level === 7) {
          setStudents(response.data.filter(student => student.teacher_id === user.id));
        } else setStudents(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <StudentsContext.Provider value={{
      students
    }}>
      {children}
    </StudentsContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentsContext);
}