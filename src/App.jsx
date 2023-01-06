import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Filter } from 'components/Filter';
import { Table } from 'components/Table';
import { ProductTableItem } from 'components/ProductTableItem';
import { Box } from 'components/Box';

const App = () => {
  return (
    <Box as="main" p={5}>
      <Routes>
        <Route path="/" element={<Filter />}>
          <Route path="/:productId" element={<ProductTableItem />} />
          <Route index element={<Table />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Box>
  );
};

export default App;
