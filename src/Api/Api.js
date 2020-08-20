// Api.js - books
import axios from 'axios';
import { keyQuery } from '../.key.js';

const api = axios.create({
  baseURL: '/api',
});

const BookApi = (apiName, categoryId) =>
  api
    .get(`${apiName}.api?${keyQuery}&categoryId=${categoryId}&output=json`)
    .then(r => r.data)
    .catch(e => {
      console.error(e);
    });

const books = {
  getBestSeller: (categoryId = 100) => BookApi('bestSeller', categoryId),
  getRecommend: (categoryId = 100) => BookApi('recommend', categoryId),
  getNewBook: (categoryId = 100) => BookApi('newBook', categoryId),
  searchBook: (term, categoryId = 100) =>
    api
      .get(
        `search.api?${keyQuery}&query=${encodeURIComponent(
          term,
        )}&categoryId=${categoryId}&output=json`,
      )
      .then(r => r.data),
};

export default books;
