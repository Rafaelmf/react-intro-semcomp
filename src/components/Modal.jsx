import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content } = this.state;
    this.props.onAddNewNote({
      title,
      content,
      date: new Date(Date.now()).toLocaleString().split(",")[0],
    });
    this.setState({
      title: "",
      content: "",
    });
    this.props.onCloseModal();
  };

  render() {
    const { isModalOpen, onCloseModal } = this.props;
    return (
      <div
        id="myModal"
        className={isModalOpen ? "modal" : "modal display-none-modal"}
      >
        <div className="modal-content">
          <div className="modal-header">
            <span>Adicionar nova nota</span>
            <span type="button" onClick={onCloseModal} className="close">
              x
            </span>
          </div>

          <form onSubmit={this.handleSubmit}>
            <label>
              Título
              <input
                onChange={(event) =>
                  this.setState({ title: event.target.value })
                }
                value={this.state.title}
                type="text"
                name="title"
              />
            </label>
            <label>
              Conteúdo
              <textarea
                onChange={(event) =>
                  this.setState({ content: event.target.value })
                }
                value={this.state.content}
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
}

export default Modal;
