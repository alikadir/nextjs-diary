import jwt from "jsonwebtoken";

const secret = "your-256-bit-secret";

export default (req, res) => {
  if (req.body.username && req.body.password) {
    const token = jwt.sign({ username: req.body.username }, secret);
    res.json({ token });
  } else {
    res.statusCode = 401;
    res.end();
  }
};
