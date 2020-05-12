import React from "react";

function Modal(props) {
  const { isModalOpen, onCloseModal } = props;
  return (
    <div
      id="myModal"
      className={isModalOpen ? "modal" : "modal display-none-modal"}
    >
      <div className="modal-content">
        <div className="modal-header">
          <span>Adicionar nova nota</span>
          <span type="button" onClick={() => onCloseModal()} className="close">
            x
          </span>
        </div>

        <form action="">
          <label htmlFor="title">Título</label>
          <input type="text" id="title" name="firstname" />

          <label htmlFor="content">Conteúdo</label>
          <textarea rows="5" id="content" name="lastname" />
          <input type="submit" value="Adicionar" />
        </form>
      </div>
    </div>
  );
}

export default Modal;
