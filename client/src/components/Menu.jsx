import {Link, Outlet} from 'react-router-dom'

import React from "react"

function Menu() {
  return (
    <nav className="menu">
      <h1>Pet's List</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newpet">+Add Pet</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  )
}

export default Menu
