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
        marginPagesDisplayed={2} // Display 2 pages at the start and end
        pageRangeDisplayed={2} // Display 2 pages in the middle
      ></ReactPaginate>
    </div>
  );
}

export default Pagination;

// <ReactPaginate
//   previousLabel={"Previous"}
//   nextLabel={"Next"}
//   pageCount={pageCount}
//   onPageChange={handlePageClick}
//   containerClassName="pagination"
//   pageClassName="pagination__item"
//   pageLinkClassName="pagination__link"
//   previousClassName="pagination__item"
//   previousLinkClassName="pagination__link"
//   nextClassName="pagination__item"
//   nextLinkClassName="pagination__link"
//   disabledClassName="disabled"
//   activeClassName="active"
// />
