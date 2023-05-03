const User_validate = (req, res, next) => {
  const { first_name, second_name, email, age, gender, pass } = req.body;
  if (!first_name || !second_name || !email || !age || !gender || !pass) {
    return res
      .status(400)
      .json({ err: "Few fields are missing, cannot process the request" });
  }

  if (age < 12) {
    return res.status(400).json({ err: "You are not eligible to login..." });
  }

  next();
};

module.exports = { User_validate };
