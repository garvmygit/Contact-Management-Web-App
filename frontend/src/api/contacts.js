import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL;

if (!API_BASE) {
  throw new Error('VITE_API_URL is not set in frontend/.env');
}

const client = axios.create({
  baseURL: `${API_BASE}/api`,
  headers: { 'Content-Type': 'application/json' }
});

export const fetchContacts = async (q = '') => {
  const query = q ? `?q=${encodeURIComponent(q)}` : '';
  const { data } = await client.get(`/contacts${query}`);
  return data;
};

export const createContact = async (payload) => {
  const { data } = await client.post('/contacts', payload);
  return data;
};

export const updateContact = async (id, payload) => {
  const { data } = await client.put(`/contacts/${id}`, payload);
  return data;
};

export const deleteContact = async (id) => {
  const { data } = await client.delete(`/contacts/${id}`);
  return data;
};
