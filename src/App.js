import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import PortfolioPage from './pages/PortfolioPage';
import './styles/global.css';
import './styles/theme.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;