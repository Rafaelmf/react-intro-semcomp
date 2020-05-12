import React from "react";

function NotesTable(props) {
  const { notesList } = props;
  console.log(notesList);
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
        {notesList
          ? notesList.map((note) => (
              <tr>
                <td></td>
                <td></td>
                <td>{new Date(Date.now()).toLocaleString().split(",")[0]}</td>
                <td>
                  <button type="button">Remover</button>
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
}

export default NotesTable;
