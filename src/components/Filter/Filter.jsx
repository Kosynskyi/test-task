import React, { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchAllProducts, fetchProductById } from 'services/API';
import { ProductTableItem } from 'components/ProductTableItem';
import { Box } from 'components/Box';
import { StyledLabel, StyledInput } from './Filter.styled';

export const Filter = () => {
  const [totalProducts, setTotalProducts] = useState(null);
  const [prodItem, setProdItem] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query <= 0) return;
    fetchProductById(query).then(setProdItem);
  }, [query]);

  useEffect(() => {
    fetchAllProducts().then(setTotalProducts);
  }, []);

  const handleChange = e => {
    if (Number(e.target.value) < 1) {
      toast.error('id cannot be less then 1 :( please, try again');
      setSearchParams({ query: 0 });
    } else if (Number(e.target.value) > totalProducts) {
      setSearchParams({ query: totalProducts });
      toast.error(
        `id cannot be more then ${totalProducts} :( please, try again`
      );
    } else {
      setSearchParams({ query: e.target.value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    setSearchParams({ query: 0 });
  };

  return (
    <>
      <Box display="flex" alignItems="flex-end" justifyContent="center" mb={6}>
        <form onSubmit={handleSubmit}>
          <StyledLabel>
            <span>Find product by id</span>
            {'   '}
            <StyledInput
              type="number"
              name="filter"
              placeholder="enter id (only numbers)"
              onChange={handleChange}
            />
          </StyledLabel>
          <button disabled={!query === null}>Reset</button>
        </form>
      </Box>
      {query > 0 && (
        <ProductTableItem prodItem={prodItem} totalProducts={totalProducts} />
      )}
      {Number(query) === 0 && <Outlet />}
    </>
  );
};
