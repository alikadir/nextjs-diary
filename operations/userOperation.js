const USER_KEY = 'userToken';
import jwt from 'jsonwebtoken';

let user;

export const getUser = () => {
  if (user) return user;
  else {
    const token = localStorage.getItem(USER_KEY);
    try {
      user = jwt.decode(token);
      return user;
    } catch (err) {
      return null;
    }
  }
};

export const setUser = token => {
  localStorage.setItem(USER_KEY, token);
  user = jwt.decode(token);
};

export const login = async (username, password) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  setUser(data.token);
  return getUser();
};

export const logout = () => {
  localStorage.removeItem(USER_KEY);
};
