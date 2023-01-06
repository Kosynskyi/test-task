import React, { useState, useEffect } from 'react';
import { fetchProducts } from 'services/API';
import { Modal } from 'components/Modal';
import { ITEMS_PER_PAGE, fetchAllProducts } from 'services/API';
import { PaginatedItems } from 'components/Pagination/Pagination';
import { StyledTable, TableData, TableHeadTitle } from './Table.styled';

export const Table = ({ prodItem }) => {
  const [page] = useState(1);
  const [products, setProducts] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [tableBodyRow, setTableBodyRow] = useState({});
  const [totalProducts, setTotalProducts] = useState(null);

  useEffect(() => {
    if (prodItem) {
      setProducts([prodItem]);
    } else {
      fetchProducts(page, totalProducts).then(setProducts);
    }
  }, [page, prodItem, totalProducts]);

  useEffect(() => {
    fetchAllProducts().then(setTotalProducts);
  }, []);

  const openModal = ({ ...props }) => {
    setIsOpenModal(prev => !prev);
    setTableBodyRow(props);
  };

  const closeModal = () => {
    setIsOpenModal(prev => !prev);
  };

  if (!products) return;

  return (
    <>
      {isOpenModal && (
        <Modal closeModal={closeModal}>
          {
            <StyledTable>
              <thead>
                <tr>
                  <TableHeadTitle>Id</TableHeadTitle>
                  <TableHeadTitle>Name</TableHeadTitle>
                  <TableHeadTitle>Year</TableHeadTitle>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: tableBodyRow.color }}>
                  <TableData>{tableBodyRow.id}</TableData>
                  <TableData>{tableBodyRow.name}</TableData>
                  <TableData>{tableBodyRow.year}</TableData>
                </tr>
              </tbody>
            </StyledTable>
          }
        </Modal>
      )}

      <PaginatedItems
        items={products}
        itemsPerPage={ITEMS_PER_PAGE}
        openModal={openModal}
      />
    </>
  );
};
