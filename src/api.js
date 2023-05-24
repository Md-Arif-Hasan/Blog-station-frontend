import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:2222/api/v1`
});