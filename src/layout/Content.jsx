import React from "react";
import Modal from "../components/Modal";
import NotesTable from "../components/NotesTable";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      notesList: [],
      noteData: {
        title: "",
        content: "",
      },
      indexCurrentNote: -1,
    };
  }

  handleEditNote = (note, index) => {
    this.setState({
      noteData: note,
      isModalOpen: true,
      indexCurrentNote: index,
    });
  };

  handleRemoveNoteByIndex = (index) => {
    let auxList = this.state.notesList;
    this.setState({
      notesIndex: auxList.splice(index, 1),
    });
  };

  handleChangeNoteData = (value) => {
    this.setState({ noteData: value });
  };

  handleSaveNote = (e) => {
    // Evitar o comportamento padrão de submissão do elemento form do html, queremos controlar por conta
    e.preventDefault();
    const { notesList, noteData, indexCurrentNote } = this.state;

    //Criar data atual
    const date = new Date(Date.now()).toLocaleString().split(",")[0];

    //Criar novo objeto Nota com a data atual
    const newNoteData = {
      ...noteData,
      date,
    };

    // Determinar se é atualização ou inserção
    let aux = notesList;
    if (indexCurrentNote === -1) {
      aux.push(newNoteData);
    } else {
      aux[indexCurrentNote] = newNoteData;
    }

    // Atualiza o estado da classe
    this.setState({
      notesList: aux,
      isModalOpen: false,
      noteData: {
        title: "",
        content: "",
      },
      indexCurrentNote: -1,
    });
  };

  handleModalChangeVisibility = () => {
    // Inverter o estado de visibilidade da Modal
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { notesList, isModalOpen, noteData } = this.state;
    return (
      <div className="content">
        <div className="content-container">
          <Modal
            isModalOpen={isModalOpen}
            onChangeModalVisibility={this.handleModalChangeVisibility}
            onChangeNoteData={this.handleChangeNoteData}
            onSaveNote={this.handleSaveNote}
            noteData={noteData}
          />

          <div className="control-container">
            <button
              onClick={() => this.handleModalChangeVisibility()}
              type="button"
              className="action-button new-note-button"
            >
              + Criar
            </button>
          </div>

          <div className="notes-container">
            <NotesTable
              onEditNote={this.handleEditNote}
              onRemoveNote={this.handleRemoveNoteByIndex}
              notesList={notesList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
