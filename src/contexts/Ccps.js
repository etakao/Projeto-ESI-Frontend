import React, { createContext, useContext, useEffect, useState } from 'react';

import { ccpsApi } from '../services/ccps';

const CcpsContext = createContext();

export function CcpsContextProvider({ children }) {
  const [ccps, setCcps] = useState('');

  useEffect(async () => {
    try {
      const response = await ccpsApi.read();
      if (response.status === 200) {
        setCcps(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

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