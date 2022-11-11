import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Categories from './pages/Categories';
import Books from './pages/Books';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
