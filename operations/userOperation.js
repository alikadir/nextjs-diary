const USER_KEY = "userToken";
import jwt from "jsonwebtoken";

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
