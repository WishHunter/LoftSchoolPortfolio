import axios from 'axios';

const token = localStorage.getItem('token');

const requests = axios.create({
  baseURL: "https://webdev-api.loftschool.com/",
  headers: {
    "Authorization": `Bearer ${token}`
  }
});

export default requests;
