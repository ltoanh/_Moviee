import React from 'react';
import { NavLink } from 'react-router-dom';

function SidebarListItem({ item }) {
  
	return (
		<li className="sidebar__menu__list__item">
			<NavLink className="sidebar__menu__list__item--link" to={item.path} exact>
				<i className={item.icon}></i>
				<span>{item.name}</span>
			</NavLink>
		</li>
	);
}

export default SidebarListItem;
