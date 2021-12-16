import React from 'react';
import './sidebar.scss';

import { getAvatarImage } from 'api-config/moiveeApi';

function SidebarHeader({ user }) {
	if (!user) return null;

	return (
		<div id="sidebar__header">
			<div id="sidebar__header__image">
				<img src={getAvatarImage(user.avatar.gravatar.hash)} alt="avatar" />
			</div>
			<div id="sidebar__header__detail">
				<p>
					Xin chào,
					<br /> <strong>{user.name}</strong>
				</p>
			</div>
		</div>
	);
}

export default SidebarHeader;
