import axios from 'axios';

axios.defaults.baseURL = 'https://reqres.in/api/products';

export const ITEMS_PER_PAGE = 5;

export const fetchProducts = async (page = 1, perPage) => {
  try {
    const { data } = await axios(`?per_page=${perPage}&page=${page}`);
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchProductById = async productId => {
  try {
    const { data } = await axios(`${productId}`);
    return data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchAllProducts = async () => {
  try {
    const { data } = await axios();
    return data.total;
  } catch (error) {
    console.log(error.message);
  }
};
