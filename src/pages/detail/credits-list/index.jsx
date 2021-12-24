import Caster from './Caster';

import React from 'react';
import './credits-list.scss';

function CreditsList({creditsList}) {

	return (
		<div className="credits-list">
			{creditsList.map((caster, id) => (
				<Caster caster={caster} id={id} />
			))}
		</div>
	);
}

export default CreditsList;
