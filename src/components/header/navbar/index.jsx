import React from 'react'
import './navbar.scss';

import { NavLink } from 'react-router-dom';

const navbarList = [
	{
		name: 'Movie',
		path: '/movie',
	},
	{
		name: 'TV Show',
		path: '/tv',
	},
];

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
				{navbarList.map((item, idx) => (
					<li key={idx} className="navbar__list__item">
						<NavLink activeClassName="navbar__list__item__link__active" className="navbar__list__item__link" to={item.path}>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
    </nav>
  )
}

export default Navbar
