import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/';

export const fetchForms = () => axios.get(`${API_BASE_URL}forms/`);
export const fetchFormDetail = (id) => axios.get(`${API_BASE_URL}forms/${id}/`);
