import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'slice/modalSlide';
import './modal.scss';

function Modal(props) {

	const dispatch = useDispatch();

  const modalRef = useRef();

	const handleCloseModal = () => {
    modalRef.current.classList.remove('active');
		if(props.onClose){
			props.onClose();
		}
		dispatch(closeModal());
  };

	return (
		<div ref={modalRef} id={props.id} className="modal">
			<div className="modal__content">
				<div className="modal__content__close" onClick={handleCloseModal}>
					<i className="bx bx-x"></i>
				</div>
				{props.children}
			</div>
		</div>
	);
}

export default Modal;
