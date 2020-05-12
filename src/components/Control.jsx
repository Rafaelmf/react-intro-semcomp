import React from 'react';

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
          className="new-note-button"
        >
          + Nova nota
        </button>
      </div>
    );
  }
}

export default Control;
