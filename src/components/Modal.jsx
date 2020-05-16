import React from "react";

const Modal = (props) => {
  const {
    isModalVisible,
    onChangeModalVisibility,
    onSaveNote,
    onChangeNoteData,
    currentNoteData,
  } = props;
  return (
    <div
      id="myModal"
      className={isModalVisible ? "modal" : "modal display-none-modal"}
    >
      <div className="modal-content">
        <div className="modal-header">
          <span>Adicionar nova nota</span>
          <span
            type="button"
            onClick={onChangeModalVisibility}
            className="close"
          >
            x
          </span>
        </div>

        <form onSubmit={(e) => onSaveNote(e)}>
          <label>
            Título
            <input
              onChange={(event) =>
                onChangeNoteData({
                  title: event.target.value,
                  content: currentNoteData.content,
                })
              }
              value={currentNoteData.title}
              type="text"
              name="title"
            />
          </label>
          <label>
            Conteúdo
            <textarea
              onChange={(event) =>
                onChangeNoteData({
                  content: event.target.value,
                  title: currentNoteData.title,
                })
              }
              value={currentNoteData.content}
              rows="5"
              name="content"
            />
          </label>
          <input type="submit" value="Adicionar" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
