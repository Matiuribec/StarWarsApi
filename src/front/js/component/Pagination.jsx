import propTypes from "prop-types";
import { array } from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={"page-item" + props.currentPage == 1 ? " diasbled" : ""}>
          <Link
            className="page-link"
            to={
              props.currentPage == 1
                ? "#"
                : `/${props.type}?page=${props.currentPage - 1}`
            }
          >
            Previous
          </Link>
        </li>
        {array(props.pages)
          .fill("")
          .map((val, page) => {
            <li
              key={page}
              className={`page-item ${
                props.currentPage == page + 1 ? "active" : ""
              }`}
            >
              <Link
                className="page-link"
                to={`/${props.type}?page=${props.currentPage + 1}`}
              >
                {page + 1}
              </Link>
            </li>;
          })}

        <li
          className={
            "page-item" + props.currentPage == props.pages ? " diasbled" : ""
          }
        >
          <Link
            className="page-link"
            to={
              props.currentPage == props.pages
                ? "#"
                : `/${props.type}?page=${props.currentPage + 1}`
            }
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
