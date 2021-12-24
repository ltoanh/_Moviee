import { getImage, imageSize } from 'api-config/moiveeApi';
import React from 'react';

function Caster({caster, id}) {
	return (
		<div key={id} className="credits-list__item">
			<img src={caster && getImage(imageSize.original, caster.profile_path)} alt="" />
			<div>
				<h5 className="credits-list__item--original-name">{caster.original_name}</h5>
				<h6 className="credits-list__item--character">{caster.character}</h6>
			</div>
		</div>
	);
}

export default Caster;
