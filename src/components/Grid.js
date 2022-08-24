import React from 'react'
import {AgGridReact}from 'ag-grid-react';

function Grid() {
  const rowData =[

  ];
  const columnDefs =[

  ];
  return (
    <div>
      
<AgGridReact
rowData={rowData}
columnDefs={columnDefs}

/>
      
      
      </div>
  )
}

export default Grid