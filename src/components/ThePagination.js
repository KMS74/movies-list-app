import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

function ThePagination({ getAllCurrentPageMovies, pageCount }) {
  const handlePageClick = (data) => {
    console.log(data.selected + 1);
    //! page must be less than or equal to 500 ?
    //*  Because our API KEY have access only to 500 pages not all pages.
    if (data.selected + 1 >= 1 && data.selected + 1 <= 500)
      getAllCurrentPageMovies(data.selected + 1);
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="النالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName="pagination justify-content-center p-3"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
}

ThePagination.propTypes = {
  getAllCurrentPageMovies: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default ThePagination;
