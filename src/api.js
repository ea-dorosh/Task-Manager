import axios from 'axios';

export const api = axios.create({
  baseURL: `https://uxcandy.com/~shapoval/test-task-backend/v2`,
  withCredentials: false,
});
