import React from "react";
import ReactPaginate from "react-paginate";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai"; // icons form react-icons
import { IconContext } from "react-icons"; // for customizing icons
import "./Pagination.css";

function Pagination({ pageCount, onPageChange }) {
  const handlePageClick = (data) => {
    onPageChange(data.selected);
  };
  return (
    <div>
      <ReactPaginate
        containerClassName={"pagination"}
        pageClassName={"page-item"}
        activeClassName={"active"}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageLinkClassName={"page-link"}
        breakLabel="..."
        pageLabelBuilder={(page) => `${page}`}
        previousLabel={
          <IconContext.Provider value={{ color: "#198754", size: "25px" }}>
            <AiFillLeftCircle />
          </IconContext.Provider>
        }
        nextLabel={
          <IconContext.Provider value={{ color: "#198754", size: "25px" }}>
            <AiFillRightCircle />
          </IconContext.Provider>
        }
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
      ></ReactPaginate>
    </div>
  );
}

export default Pagination;
