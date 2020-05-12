import React from 'react';

function Modal(props) {
  const { isModalOpen, onCloseModal } = props;
  return (
    <div
      id="myModal"
      className={isModalOpen ? 'modal' : 'modal display-none-modal'}
    >
      <div className="modal-content">
        <button type="button" onClick={() => onCloseModal()} className="close">
          X
        </button>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default Modal;
