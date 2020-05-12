import React from "react";

function NotesTable(props) {
  const { notesList } = props;
  return (
    <table id="created-notes">
      <thead>
        <tr>
          <th>Título</th>
          <th>Conteúdo</th>
          <th>Data</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {notesList.map((note, index) => (
          <tr key={index}>
            <td>{note.title}</td>
            <td>{note.content}</td>
            <td>{new Date(Date.now()).toLocaleString().split(",")[0]}</td>
            <td>
              <button type="button">Remover</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NotesTable;
