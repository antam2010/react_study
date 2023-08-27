import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DiaryApp from './DiaryApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/diary" replace />} />
        <Route path="/diary" element={<DiaryApp />} />
      </Routes>
    </Router>
  );
}

export default App;