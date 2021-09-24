import { message } from 'antd';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { studentsApi } from '../services/students';
import { useUser } from './User';
import { useTeachers } from './Teachers';

const StudentsContext = createContext();

export function StudentsContextProvider({ children }) {
  const [students, setStudents] = useState([]);

  const { teachers } = useTeachers();
  const { user } = useUser();

  async function getStudents() {
    message.loading({
      key: "loadingStudents",
      content: "Carregando alunos...",
      duration: 9999
    });

    try {
      const response = await studentsApi.read();
      if (response.status === 200) {
        if (user.level === 7) {
          setStudents(response.data.filter(student => student.teacher_id === user.id));
        } else setStudents(response.data);
        message.destroy("loadingStudents");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getStudents();
  }, [user]);

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