import React from 'react';
import './sidebar.scss';

import SidebarList from './SidebarList/SidebarList';

function Sidebar() {

	const listMenu = [
		{
			title: 'Menu',
			key: 'menu',
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
			key: 'catalog',
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
		// 	key: 'general',
		// 	list: [
		// 		{
		// 			name: 'Đăng nhập',
		// 			icon: 'bx bxs-network-chart',
		// 			path: '/login',
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
