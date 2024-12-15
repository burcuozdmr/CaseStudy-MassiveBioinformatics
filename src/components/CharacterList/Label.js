import React from "react";

function Label({ filters}) {

  const { status, selectedSpecies, selectedGender, searchQuery } = filters;
  
  return (
    <div class="container card text-bg-dark mb-3">
      <div className="d-flex align-items-center ">
        <div class="card-body d-flex align-items-center gap-2">
          {status && (
            <div
              className="card text-bg-success text-center"
              style={{ maxWidth: "10rem" }}
            >
              <div className="card-body text-light p-2">
                <p className="card-text">{status}</p>
              </div>
            </div>
          )}
          {selectedSpecies && (
            <div
              className="card text-bg-primary text-center"
              style={{ maxWidth: "10rem" }}
            >
              <div className="card-body text-light p-2">
                <p className="card-text">{selectedSpecies}</p>
              </div>
            </div>
          )}

          {selectedGender && (
            <div
              className="card text-bg-info text-center"
              style={{ maxWidth: "10rem" }}
            >
              <div className="card-body text-light p-2">
                <p className="card-text"> {selectedGender}</p>
              </div>
            </div>
          )}

          {searchQuery && (
            <div
              className="card text-bg-warning text-center"
              style={{ maxWidth: "10rem" }}
            >
              <div className="card-body text-light p-2">
                <p className="card-text">Search: {searchQuery}</p>
              </div>
            </div>
          )}
          {!status && !selectedSpecies && !selectedGender && !searchQuery && (
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
        <div>
          <button type="button" class="btn btn-danger" >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Label;
