// appfront/src/api/api.js
import axiosInstance from './index.js'

const axios = axiosInstance

export const getBooks = () => {return axios.get(`http://localhost:8000/api/books/`)}

export const postBook = (book) => {
    console.log(book)
    return axios.post(`http://localhost:8000/api/books/`, {'name': book.name, 'author': book.author})}
