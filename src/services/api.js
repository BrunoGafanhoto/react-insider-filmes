import axios from 'axios';

export const key = '4b0b110d123abedeb9d7dbb8c904ec46';

const api = axios.create({
     baseURL: 'https://api.themoviedb.org/3'
})

export default api;