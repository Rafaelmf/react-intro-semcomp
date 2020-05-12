import React from "react";
import Modal from "../components/Modal";
import Control from "../components/Control";
import NotesTable from "../components/NotesTable";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      notesList: [],
    };
  }

  handleAddNewNote = (newNote) => {
    const { notesList } = this.state;
    this.setState({ notesList: [...notesList, newNote] });
  };

  handleModalChangeState = () => {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div className="content-container">
        <Modal
          onCloseModal={this.handleModalChangeState}
          onAddNewNote={this.handleAddNewNote}
          isModalOpen={isModalOpen}
        />
        <Control onAddNewNote={this.handleModalChangeState} />
        <div className="notes-container">
          <NotesTable notesList={this.state.notesList} />
        </div>
      </div>
    );
  }
}

export default Content;
