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
    e.preventDefault();
    const { notesList, noteData, indexCurrentNote } = this.state;
    const date = new Date(Date.now()).toLocaleString().split(",")[0];
    const newNoteData = {
      ...noteData,
      date,
    };
    let newNoteList;
    if (indexCurrentNote === -1) {
      newNoteList = [...notesList, newNoteData];
    } else {
      newNoteList = notesList;
      newNoteList[indexCurrentNote] = newNoteData;
    }
    this.setState({
      notesList: newNoteList,
      isModalOpen: false,
      noteData: {
        title: "",
        content: "",
      },
      indexCurrentNote: -1,
    });
  };

  handleModalChangeVisibility = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { notesList, isModalOpen, noteData } = this.state;
    return (
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
    );
  }
}

export default Content;
