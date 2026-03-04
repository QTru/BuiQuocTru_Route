import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#ffffff',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>

      <nav>
        <NavLink to='/dashboard/profile' style={navLinkStyles}>Profile</NavLink> |{' '}
        <NavLink to='/dashboard/contact' style={navLinkStyles}>Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Dashboard