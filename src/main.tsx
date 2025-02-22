import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/certificate-validator/" element={<App/>}/>
        <Route
          path="/certificate-validator"
          element={<Navigate to="/certificate-validator/" replace />}
        />
        <Route
          path="/certificate-validator/*"
          element={<Navigate to="/certificate-validator/" replace />}
        />
      </Routes>
    </Router>
  </StrictMode>
);
