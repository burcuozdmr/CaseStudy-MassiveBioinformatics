import React, { useState, useRef } from "react";
import Filter from "./Filter";
import Label from "./Label";

import Pagination from "./Pagination";
import RowNumber from "./RowNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import CharacterCard from "./CharacterCard";

function CharacterTable({ characters }) {
  const [pageNumber, setPageNumber] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [sortDirection, setSortDirection] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  

    // Handler for updating the number of rows per page
  const handleRowsChange = (rows) => {
    setRowsPerPage(rows); // Seçilen değeri kaydet
  
  };
  // Handler for page number change (pagination)
  const handlePageChange = (selectedPage) => {
    setPageNumber(selectedPage);
  };
    // Handler for filtering the characters based on the Filter component
  const handleFilteredData = (filteredData) => {
    setFilteredCharacters(filteredData); // Store filtered data in parent state
  };
   // State to store the selected filter values (status, species, gender, search query)
  const [filters, setFilters] = useState({
    status: "",
    selectedSpecies: "",
    selectedGender: "",
    searchQuery: "",
  });

  // Handler to update filters based on the Filter component
  const handleLabelsChange = (updatedLabels) => {
    setFilters(updatedLabels);
  };
 // Sorting function to sort characters based on name
  const sortedCharacters = (charactersToSort) => {
    const sortedArray = [...charactersToSort];
    if (sortDirection === "asc") {
      sortedArray.sort((a, b) => (a.name < b.name ? -1 : 1));
    } else if (sortDirection === "desc") {
      sortedArray.sort((a, b) => (a.name > b.name ? -1 : 1));
    }
    return sortedArray;
  };

  // Combine filtered and original characters
  const charactersToDisplay =
    filteredCharacters.length > 0 ? filteredCharacters : characters;

  // Sort characters
  const sortedAndPagedCharacters = sortedCharacters(charactersToDisplay).slice(
    pageNumber * rowsPerPage,
    (pageNumber + 1) * rowsPerPage
  );

  // Calculate total pages
  const pageCount = Math.ceil(charactersToDisplay.length / rowsPerPage);

  // Handle sorting when icons are clicked
  const handleSortChange = () => {
    setSortDirection((prevState) => {
      if (prevState === "asc") return "desc"; // If it was ascending, change to descending
      return "asc"; // If it was descending or null, change to ascending
    });
  };
  // Handle the row click to select a character and show its detailed card
  const handleRowClick = (char) => {
    setSelectedCharacter(char); 

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight + 20);
    }, 200);
    
  };

  return (
    <div className="container mt-5">
      <Filter
        characters={characters}
        onFilter={handleFilteredData}
        onLabelsChange={handleLabelsChange}
      ></Filter>
      <Label filters={filters}></Label>
      <div className="row">
        <div className ="col-12">
          <div className="card">
            <div className="table-responsive p-4 bg-success bg-opacity-25">
              <table className="table table-hover table-success align-middle">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">
                      Name{" "}
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                        onClick={handleSortChange}
                      />
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        style={{ cursor: "pointer", marginLeft: "5px" }}
                        onClick={handleSortChange}
                      />
                    </th>
                    <th scope="col">Gender</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                {sortedAndPagedCharacters.map((char) => (
                  <tbody key={char.id}>
                    <tr onClick={() => handleRowClick(char)} style={{ cursor: "pointer" }}>
                      <td>
                        <img
                          src={char.image}
                          alt="Character"
                          style={{
                            maxWidth: "6rem",
                            height: "auto",
                            borderRadius: "50%",
                          }}
                        />
                      </td>
                      <td>{char.name}</td>
                      <td>{char.gender}</td>
                      <td>{char.status}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
              <div className="d-flex justify-content-between">
                <RowNumber onRowsChange={handleRowsChange}></RowNumber>
                <Pagination
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                ></Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedCharacter && <CharacterCard character={selectedCharacter} />}
    </div>
  );
}

export default CharacterTable;
