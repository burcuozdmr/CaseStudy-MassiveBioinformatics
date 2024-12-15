import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Label from "./Label";
import { fetchCharacters } from "../../Api";
import Pagination from "./Pagination";
import RowNumber from "./RowNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function CharacterTable({ characters }) {
  // const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(0); // state to manage current page
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [sortDirection, setSortDirection] = useState(null); // null means no sorting

  // useEffect(() => {
  //   fetchCharacters(pageNumber, rowsPerPage)
  //     .then((data) => setCharacters(data.results))
  //     .catch((error) => console.error(error));
  // }, [pageNumber, rowsPerPage]);

  const handleRowsChange = (rows) => {
    setRowsPerPage(rows); // Seçilen değeri kaydet
    console.log("Selected rows per page:", rows);
  };
  // Calculate total pages

  // const pageCount = Math.ceil(
  //   (filteredCharacters.length > 0
  //     ? filteredCharacters.length
  //     : characters.length) / rowsPerPage
  // );

  // Slice characters array for the current page
  const currentCharacters = (
    filteredCharacters.length > 0 ? filteredCharacters : characters
  ).slice(pageNumber * rowsPerPage, (pageNumber + 1) * rowsPerPage);

  const handlePageChange = (selectedPage) => {
    setPageNumber(selectedPage);
  };

  const handleFilteredData = (filteredData) => {
    setFilteredCharacters(filteredData); // Store filtered data in parent state
  };

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
  const charactersToDisplay = filteredCharacters.length > 0 ? filteredCharacters : characters;

  // Sort characters
  const sortedAndPagedCharacters = sortedCharacters(charactersToDisplay).slice(pageNumber * rowsPerPage, (pageNumber + 1) * rowsPerPage);

  // Calculate total pages
  const pageCount = Math.ceil(charactersToDisplay.length / rowsPerPage);

  // Handle sorting when icons are clicked
  const handleSortChange = () => {
    setSortDirection((prevState) => {
      // Toggle sort direction
      if (prevState === "asc") return "desc"; // If it was ascending, change to descending
      return "asc"; // If it was descending or null, change to ascending
    });
  };

  return (
    <div class="container mt-5">
      <Filter
        characters={characters}
        onFilter={handleFilteredData}
        onLabelsChange={handleLabelsChange}
      ></Filter>
      <Label filters={filters}></Label>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="table-responsive p-4 bg-success bg-opacity-25">
              <table class="table table-hover table-success align-middle">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col" >
                      Name{" "}
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                        onClick={handleSortChange}
                        // Yukarı oka tıklanırsa ascending
                      />
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        style={{ cursor: "pointer", marginLeft: "5px" }}
                        onClick={handleSortChange}
                        // Aşağı oka tıklanırsa descending
                      />
                    </th>
                    <th scope="col">Gender</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                {sortedAndPagedCharacters.map((char) => (
                  <tbody key={char.id}>
                    <tr>
                      <td>
                        <img
                          src={char.image}
                          alt="Character Image"
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
    </div>
  );
}

export default CharacterTable;
