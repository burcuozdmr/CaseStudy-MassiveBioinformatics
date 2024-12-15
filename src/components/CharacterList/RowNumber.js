import React, { useState } from "react";

function RowNumber({ onRowsChange }) {
  const [selectedRows, setSelectedRows] = useState(20);
  const handleSelectChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSelectedRows(value);
    onRowsChange(value); // Pass the selected value to the parent
  };
  return (
    <div className="d-flex justify-content-center align-items-center gap-2">
      <select
        className="rounded-pill p-2 bg-success text-light"
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
