import React, { createContext, useContext, useEffect, useState } from 'react';

import { ccpsApi } from '../services/ccps';
import { useUser } from './User';

const CcpsContext = createContext();

export function CcpsContextProvider({ children }) {
  const [ccps, setCcps] = useState([]);

  const { user } = useUser();

  async function getCcps() {
    try {
      const response = await ccpsApi.read();
      if (response.status === 200) {
        setCcps(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCcps();
  }, [user]);

  return (
    <CcpsContext.Provider value={{
      ccps
    }}>
      {children}
    </CcpsContext.Provider>
  );
}

export function useCcps() {
  return useContext(CcpsContext);
}