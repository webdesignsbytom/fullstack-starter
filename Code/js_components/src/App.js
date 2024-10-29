import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UseMemoPage from './pages/UseMemoPage';
import Display1 from './pages/Display1';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<Display1 />} />
    </Routes>
  );
}

export default App;
