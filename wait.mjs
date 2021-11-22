const wait =
  (ms = 3000) =>
  (req, res, next) => {
    setTimeout(next, ms);
  };

export default wait;
