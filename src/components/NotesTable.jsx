import React from 'react';

// import { Container } from './styles';

function NotesTable() {
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
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>
            Maria Andaria Andaria Andaria Andaria Andaria Andaria Andaria
            Andaria Andaria Andaria Andaria Andaria Andaria Andaria Andaria
            Andaria Andaria Andaria Andaria Andaria Andaria Andaria Andaria
            Andaria Andaria Andaria Andaria Andaria Andaria Andaria Andaria
            Andaria Andaria Andaria Andaria Andaria Andaria Andaria Andaria
            Andaria Andaria Anders
          </td>
          <td>{new Date(Date.now()).toLocaleString().split(',')[0]}</td>
          <td>
            <button type="button">Remover</button>
          </td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>{new Date(Date.now()).toLocaleString().split(',')[0]}</td>
          <td>
            <button type="button">Remover</button>
          </td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>{new Date(Date.now()).toLocaleString().split(',')[0]}</td>
          <td>
            <button type="button">Remover</button>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td></td>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td></td>
          <td>Königlich Essen</td>
          <td>Philip Cramer</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td></td>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td></td>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </tbody>
    </table>
  );
}

export default NotesTable;
