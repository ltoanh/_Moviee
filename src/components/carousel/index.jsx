import { OutlineButton } from 'components/button/Button';

import React, { useEffect, useRef, useState } from 'react';
import './carousel.scss';

import { Link } from 'react-router-dom';
import Carousel from './Carousel';

function CarouselSection({ title, listItems, selectorList, selected, handleSelected, viewmorePath }) {
  const [listData, setListData] = useState([]);

	const selectorRef = useRef();

  // handle selector header
	const handleClickAnchor = (e) => {
		let target = e.target;
		if (!target.classList.contains('selected')) {
			// remove current selected
			let childrenNodes = selectorRef.current.childNodes;
			let removeSelectedNodes = Array.from(childrenNodes).map((node) => {
				if (node.classList.contains('selected')) {
					node.classList.remove('selected');
				}

				return node;
			});
			// update selected node
			childrenNodes = removeSelectedNodes;
			target.classList.add('selected');
      
      handleSelected(target.getAttribute('data_value'));
		}
	};

	const renderAnchor = selectorList.map((item, i) => {
		let selectedItem =  selected === item.slug ? `selected` : ``;
		return (
			<div
				data_value={item.slug}
				onClick={handleClickAnchor}
				className={`carousel-section__selection--anchor ${selectedItem}`}
				key={i}
			>
				{item.name}
			</div>
		);
	});

  useEffect(() => {
    setListData(listItems);
  }, [listItems]);

	return (
		<section className="carousel-section">
			<div className="carousel-section__header">
				<div className="carousel-section__header--left">
					<h3 className="carousel-section__title">{title}</h3>
					<div ref={selectorRef} className="carousel-section__selection">
						{renderAnchor}
					</div>
				</div>
				<Link to={viewmorePath}>
					<OutlineButton className="small btn-outline-primary">Xem thêm</OutlineButton>
				</Link>
			</div>
			<Carousel listData={listData} />
		</section>
	);
}

export default CarouselSection;
