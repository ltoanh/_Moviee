import React from 'react';
import './sidebar.scss';

import SidebarHeader from './SidebarHeader';
import SidebarList from './SidebarList/SidebarList';

function Sidebar() {
	const user = {};

	const listMenu = [
		{
			title: 'Menu',
			list: [
				{
					name: 'Trang chủ',
					icon: 'bx bxs-home',
					path: '/',
				},
			],
		},
		{
			title: 'Danh mục',
			list: [
				{
					name: 'Movie',
					icon: 'bx bxs-movie-play',
					path: '/movie',
				},
				{
					name: 'TV Show',
					icon: 'bx bxs-tv',
					path: '/tv',
				},
			],
		},
		// {
		// 	title: 'Tổng quan',
		// 	list: [
		// 		{
		// 			name: 'Cài đặt',
		// 			icon: 'bx bxs-network-chart',
		// 			path: '/account/guest',
		// 		},
		// 	],
		// },
	];

	return (
		<aside id="sidebar" className="sticky">
			{/* <SidebarHeader user={user} /> */}
			<div id="sidebar__content">
				{listMenu.map((menu, i) => (
					<SidebarList title={menu.title} list={menu.list} key={i} />
				))}
			</div>
		</aside>
	);
}

export default Sidebar;
