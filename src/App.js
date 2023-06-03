import React, { useState } from 'react';
import userContext from './Context';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ApproverHome from './ApproverComponents/ApproverHome';

function App() {
  const [stepCount, setStepCount] = useState(1);
  const [showSpec, setShowSpec] = useState(false);
  return (
    <userContext.Provider
      value={{ stepCount, setStepCount, showSpec, setShowSpec }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/approverhome" element={<ApproverHome />} />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
