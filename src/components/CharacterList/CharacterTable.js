import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Label from "./Label";
import { fetchCharacters } from "../../Api";
import Pagination from "./Pagination";
import RowNumber from "./RowNumber";

function CharacterTable() {
  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(0); // state to manage current page
  const [rowsPerPage, setRowsPerPage] = useState(20);

  useEffect(() => {
    fetchCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error(error));
  }, []);

  const handleRowsChange = (rows) => {
    setRowsPerPage(rows); // Seçilen değeri kaydet
    console.log("Selected rows per page:", rows);
  };
  // Calculate total pages
  const pageCount = Math.ceil(characters.length / rowsPerPage);

  // Slice characters array for the current page
  const currentCharacters = characters.slice(
    pageNumber * rowsPerPage,
    (pageNumber + 1) * rowsPerPage
  );

  const handlePageChange = (selectedPage) => {
    setPageNumber(selectedPage);
  };

  return (
    <div class="container mt-5">
      <Filter></Filter>
      <Label></Label>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="table-responsive p-4 bg-success bg-opacity-25">
              <table class="table table-hover table-success align-middle">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                {currentCharacters.map((char) => (
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
