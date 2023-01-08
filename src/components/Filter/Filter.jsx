import React, { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchAllProducts, fetchProductById } from 'services/API';
import { ProductTableItem } from 'components/ProductTableItem';
import { Box } from 'components/Box';
import {
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledForm,
} from './Filter.styled';

export const Filter = () => {
  const [filter, setFilter] = useState(0);
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
    if (Number(e.target.value) < 1 && e.target.value !== '') {
      toast.error('id cannot be less then 1 :( please, try again');
      setSearchParams({ query: filter });
    } else if (Number(e.target.value) > totalProducts) {
      setSearchParams({ query: totalProducts });
      toast.error(
        `id cannot be more then ${totalProducts} :( please, try again`
      );
    } else {
      setSearchParams({ query: e.target.value });
      setFilter(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    setSearchParams({ query: 0 });
    setFilter(0);
  };

  return (
    <>
      <Box display="flex" alignItems="flex-end" justifyContent="center" mb={5}>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            <span>Find product by id</span>
            {'   '}

            <StyledInput
              type="number"
              name="filter"
              aria-label="enter product id"
              placeholder="id"
              value={query ? query : filter}
              onChange={handleChange}
            />
          </StyledLabel>
          <Box ml={5}>
            {' '}
            <StyledButton
              aria-label="reset"
              disabled={!Number(query) && !Number(filter)}
            >
              Reset
            </StyledButton>
          </Box>
        </StyledForm>
      </Box>
      {query > 0 && (
        <ProductTableItem prodItem={prodItem} totalProducts={totalProducts} />
      )}
      {Number(query) === 0 && <Outlet />}
    </>
  );
};
