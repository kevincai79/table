import React from 'react';

const TableRow = props => {
  return (
    <tr>
      <td>{props.rowData.name}</td>
      <td>{props.rowData.address}</td>
      <td>{props.rowData.city}</td>
      <td>{props.rowData.region}</td>
      <td>{props.rowData.country}</td>
      <td>{props.rowData.birthday}</td>
    </tr>
  );
};

export default TableRow;
