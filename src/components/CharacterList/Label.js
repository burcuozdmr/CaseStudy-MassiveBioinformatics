import React from "react";

function Label({ filters }) {
  const { status, selectedSpecies, selectedGender, searchQuery } = filters;


  const filterLabels = [
    { label: status, colorClass: 'success' },
    { label: selectedSpecies, colorClass: 'primary' },
    { label: selectedGender, colorClass: 'info' },
    { label: searchQuery ? `Search: ${searchQuery}` : null, colorClass: 'warning' }
  ];


  const activeLabels = filterLabels.filter(item => item.label); 

  return (
    <div className="container card text-bg-dark mb-3">
      <div className="d-flex align-items-center ">
        <div className="card-body d-flex align-items-center gap-2">
       
          {activeLabels.length > 0 ? (
            activeLabels.map((item, index) => (
              <div
                key={index}
                className={`card text-bg-${item.colorClass} text-center`}
                style={{ maxWidth: "10rem" }}
              >
                <div className="card-body text-light p-2">
                  <p className="card-text">{item.label}</p>
                </div>
              </div>
            ))
          ) : (
            <div
              className="card text-bg-success text-center"
              style={{ maxWidth: "10rem" }}
            >
              <div className="card-body text-light p-2">
                <p className="card-text">All characters</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Label;
