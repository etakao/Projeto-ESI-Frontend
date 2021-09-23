import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Table } from 'antd';
import { FiClipboard } from 'react-icons/fi';

import { evaluationsApi } from '../../../services/evaluations';
import { studentsApi } from '../../../services/students';
import { teachersApi } from '../../../services/teachers';
import { useUser } from '../../../contexts/User';
import { useStudents } from '../../../contexts/Students';
import { useTeachers } from '../../../contexts/Teachers';
import { useEvaluations } from '../../../contexts/Evaluations';

import './styles.scss';

export function StudentsTable() {
  // const [students, setStudents] = useState([]);
  // const [evaluations, setEvaluations] = useState([]);
  // const [teachers, setTeachers] = useState([]);

  const { user } = useUser();
  const { students } = useStudents();
  const { teachers } = useTeachers();
  const { evaluations } = useEvaluations();
  const history = useHistory();

  function seeHistory(id) {
    history.push(`/dashboard/students/${id}`);
  }

  function getLastEvaluationStatus(forms) {
    const studentsEvaluations = evaluations.find(evaluation => {
      for (let index = 0; index < forms.length; index++) {
        if (evaluation.forms_id === forms[index].id)
          return evaluation;
      }
    })
    return studentsEvaluations.status;
  }

  function getTeachersName(teacherId) {
    const studentsTeacher = teachers.find(teacher => teacher.id === teacherId);
    return studentsTeacher.name;
  }

  // async function getEvaluations() {
  //   try {
  //     const response = await evaluationsApi.read();
  //     if (response.status === 200) {
  //       setEvaluations(response.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function getStudents() {
  //   try {
  //     const response = await studentsApi.read();
  //     if (response.status === 200) {
  //       if (user.level === 7) {
  //         setStudents(response.data.filter(student => student.teacher_id === user.id));
  //       } else setStudents(response.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function getTeachers() {
  //   try {
  //     const response = await teachersApi.read();
  //     if (response.status === 200) {
  //       setTeachers(response.data)
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getStudents();
  //   getEvaluations();
  //   getTeachers();
  // }, []);

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      visibleTo: 'all'
    },
    {
      title: 'Número USP',
      dataIndex: 'usp_number',
      key: 'usp_number',
      visibleTo: 'all'
    },
    {
      title: 'Orientador',
      key: 'advisor',
      render: (student) => (
        teachers ? (
          getTeachersName(student.teacher_id)
        ) : (
          "Carregando..."
        )
      ),
      visibleTo: 'ccp'
    },
    {
      title: 'Status',
      key: 'status',
      render: (student) => (
        evaluations ? (
          getLastEvaluationStatus(student.forms)
        ) : (
          "Carregando..."
        )
      ),
      visibleTo: 'all'
    },
    {
      title: 'Histórico',
      key: 'history',
      render: (student) => (
        <FiClipboard
          onClick={() => seeHistory(student.id)}
          style={{ cursor: 'pointer' }}
        />
      ),
      align: 'center',
      visibleTo: 'all'
    },
  ];

  function handleColumns() {
    switch (user.level) {
      case 3:
        return columns;
      case 5:
        return columns.filter(column => column.visibleTo === "all" || column.visibleTo === "ccp");
      case 7:
        return columns.filter(column => column.visibleTo === "all" || column.visibleTo === "orientador");
      default:
        break;
    }
  }

  return (
    <div className="panel-container">
      <h2>
        Visão geral dos alunos
      </h2>
      {students ? (
        <Table
          dataSource={students}
          columns={handleColumns()}
          pagination={false}
          className="panel-table"
        />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
