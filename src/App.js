import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Selection from './components/selection';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Selection />} />
      {/* Define other routes here */}
    </Routes>
  );
};

export default App; 