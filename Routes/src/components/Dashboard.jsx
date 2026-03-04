import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>

      <nav>
        <Link to='/dashboard/profile'>Profile</Link> |{' '}
        <Link to='/dashboard/contact'>Contact</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Dashboard