export default (req, res) => {
  res.json({ entryId: req.query.entryId });
};
