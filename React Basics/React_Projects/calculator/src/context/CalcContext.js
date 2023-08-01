import React from 'react';
import { createContext, useState } from 'react';

export const CalcContext = createContext();
const CalcProvider = ({childern}) => {
  const[calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  })

  const providerValue = {
    calc, setCalc
  }

  return (
    <CalcContext.Provider value={providerValue}>
        {childern}
    </CalcContext.Provider>
  )
}

export default CalcProvider;