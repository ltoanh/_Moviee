import React from 'react';

function OverviewItem({items, title}) {
	return (
		<p>
			<strong>{title}:</strong>{' '}
			{items &&
				items.map((item) => item.name).join(', ')}
		</p>
	);
}

export default OverviewItem;
