import React from 'react';
import './sidebarList.scss';
import SidebarListItem from './SidebarListItem';

function SidebarList({ title, list }) {
	return (
		<div className="sidebar__menu">
			<h4 className="sidebar__menu--title uppercase">{title}</h4>
			<ul className='sidebar__menu__list'>
				{list.map((item, i) => (
					<SidebarListItem item={item} key={i} />
				))}
			</ul>
		</div>
	);
}

export default SidebarList;
