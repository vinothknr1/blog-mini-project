import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const create = async (category, token) => {
    // API
    try {
        const response = await fetch(`http://localhost:8000/api/category`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(category)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const getCategories = async () => {
    try {
        const response = await fetch(`http://localhost:8000/api/categories`, {
            method: 'GET'
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const singleCategory = async slug => {
    try {
        const response = await fetch(`http://localhost:8000/api/category/${slug}`, {
            method: 'GET'
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const removeCategory = async (slug, token) => {
    try {
        const response = await fetch(`http://localhost:8000/api/category/${slug}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};