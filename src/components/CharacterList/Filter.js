import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function Filter() {
  return (
    <div class="container card text-bg-dark mb-3">
      <div class="card-body ">
        <div className="row gap-5 gap-sm-3 justify-content-center">
          <div className="col-lg-4 ">
            <div class="input-group">
              <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.5rem", color: "green" }} />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Search by name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="col-lg-7 ">
            <div className="row gap-2">
              <select
                class="form-select form-select-md col"
                aria-label="Large select example"
              >
                <option selected>Status</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                class="form-select form-select-md col"
                aria-label="Large select example"
              >
                <option selected>Species</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                class="form-select form-select-md col"
                aria-label="Large select example"
              >
                <option selected>Gender</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
