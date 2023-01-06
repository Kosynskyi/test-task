import React, { useState, useEffect } from 'react';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import ReactPaginate from 'react-paginate';
import {
  StyledTable,
  TableRows,
  TableData,
  TableHeadTitle,
  TableRowsHead,
} from './Pagination.styled';
import { Box } from 'components/Box';

function Items({ currentItems, openModal }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <StyledTable>
        <thead>
          <TableRowsHead>
            <TableHeadTitle>Id</TableHeadTitle>
            <TableHeadTitle>Name</TableHeadTitle>
            <TableHeadTitle>Year</TableHeadTitle>
          </TableRowsHead>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map(({ id, color, name, year }) => (
              <TableRows
                key={id}
                style={{ backgroundColor: color }}
                onClick={() => openModal({ id, color, name, year })}
              >
                <TableData>{id}</TableData>
                <TableData>{name}</TableData>
                <TableData>{year}</TableData>
              </TableRows>
            ))}
        </tbody>
      </StyledTable>
    </Box>
  );
}

export function PaginatedItems({ items, itemsPerPage, openModal }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, items, itemsPerPage]);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} openModal={openModal} />
      <ReactPaginate
        nextLabel={<RxDoubleArrowRight />}
        previousLabel={<RxDoubleArrowLeft />}
        breakLabel="..."
        pageCount={pageCount}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
