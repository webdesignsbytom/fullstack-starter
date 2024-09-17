import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UseMemoPage from './pages/UseMemoPage';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<UseMemoPage />} />
    </Routes>
  );
}

export default App;
