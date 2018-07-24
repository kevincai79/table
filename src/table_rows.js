import React from 'react';
import TableRow from './table_row';

const TableRows = props => {
  const tableRows = props.data.map((rowData, index) => {
    return <TableRow key={index} rowData={rowData} />;
  });

  return tableRows;
};

export default TableRows;
