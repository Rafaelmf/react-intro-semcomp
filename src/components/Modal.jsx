import React from "react";

function Modal(props) {
  const {
    isModalOpen,
    onChangeModalVisibility,
    onSaveNote,
    onChangeNoteData,
    noteData,
  } = props;
  return (
    <div
      id="myModal"
      className={isModalOpen ? "modal" : "modal display-none-modal"}
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
                  content: noteData.content,
                })
              }
              value={noteData.title}
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
                  title: noteData.title,
                })
              }
              value={noteData.content}
              rows="5"
              name="content"
            />
          </label>
          <input type="submit" value="Adicionar" />
        </form>
      </div>
    </div>
  );
}

export default Modal;
