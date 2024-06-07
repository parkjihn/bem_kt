import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import ContractPage from './pages/ContractPage/ContractPage';
import SupportPage from './pages/SupportPage/SupportPage';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contract" element={<ContractPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

