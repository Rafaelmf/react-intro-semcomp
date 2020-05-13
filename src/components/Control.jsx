import React from "react";

class Control extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onAddNewNote } = this.props;
    return (
      <div className="control-container">
        <button
          onClick={() => onAddNewNote()}
          type="button"
          className="action-button new-note-button"
        >
          + Criar
        </button>
      </div>
    );
  }
}

export default Control;
