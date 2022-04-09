import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const create = async (tag, token) => {
  // API
  try {
    const response = await fetch(`http://localhost:8000/api/tag`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(tag),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getTags = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/tags`, {
      method: 'GET',
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const singleTag = async (slug) => {
  try {
    const response = await fetch(`http://localhost:8000/api/tag/${slug}`, {
      method: 'GET',
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const removeTag = async (slug, token) => {
  try {
    const response = await fetch(`http://localhost:8000/api/tag/${slug}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
