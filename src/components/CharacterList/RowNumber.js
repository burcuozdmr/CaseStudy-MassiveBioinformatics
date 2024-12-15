import React, { useState } from "react";


function RowNumber({ onRowsChange }) {
   // Initializing state to store the selected number of rows, default is 20
  const [selectedRows, setSelectedRows] = useState(20);

    // Event handler for when the user selects a different number of rows
  const handleSelectChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSelectedRows(value);
    onRowsChange(value); 
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
       {/* Dropdown to select the number of rows */}
      <select
        className="rounded-pill p-2 bg-success text-light "
        value={selectedRows}
        onChange={handleSelectChange}
      >
        <option selected value="20">20</option>
        <option value="12">12</option>
        <option value="8">8</option>
      </select>
      <p className="text-success m-0">{selectedRows} rows visible</p>
    </div>
  );
}

export default RowNumber;
