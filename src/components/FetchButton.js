import React from "react";

function Button({ onButtonClick }) {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <button type="button" class="btn btn-outline-success btn-lg p-3"   onClick={onButtonClick}>
        Meet the Crew!
      </button>
    </div>
  );
}

export default Button;
