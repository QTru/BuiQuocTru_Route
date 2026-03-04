import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Menu() {
  return (
    <div>
      <h1>Menu Page</h1>

      <nav>
        <Link to='/menu/user'>user</Link> |{' '}
        <Link to='/menu/guest'>guest</Link> |{' '}
        <Link to='/menu/product'>product</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Menu