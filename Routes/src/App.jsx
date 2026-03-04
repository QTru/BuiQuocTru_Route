import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/product-list">ProductList</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path='profile' element={<Profile />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
