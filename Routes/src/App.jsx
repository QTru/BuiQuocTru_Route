import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Profile from './components/Profile';

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#ffffff',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/home" style={navLinkStyles}>Home</NavLink> |{" "}
        <NavLink to="/product-list" style={navLinkStyles}>ProductList</NavLink> |{" "}
        <NavLink to="/dashboard" style={navLinkStyles}>Dashboard</NavLink>
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
