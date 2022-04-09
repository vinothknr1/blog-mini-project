import fetch from 'isomorphic-fetch';
import { API } from '../config.js';
import Signup from '../pages/signup.js';
import cookie from 'js-cookie';

export const signup = async (user) => {
  try {
    const response = await fetch(`http://localhost:8000/api/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
export const signin = async (user) => {
  try {
    const response = await fetch(`http://localhost:8000/api/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
// signout
export const signout = async (next) => {
  removeCookie('token');
  removeLocalStorage('user');
  next();

  try {
    const response = await fetch(`${API}/signout`, {
      method: 'GET',
    });
    console.log('signout success');
  } catch (err) {
    return console.log(err);
  }
};
// set cookie
export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};
// get cookie
export const getCookie = (key) => {
  if (process.browser) {
    return cookie.get(key);
  }
};
// localstorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key);
  }
};
//authenticate user
export const authenticate = (data, next) => {
  setCookie('token', data.token);
  setLocalStorage('user', data.user);
  next();
};

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie('token');
    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      } else {
        return false;
      }
    }
  }
};
