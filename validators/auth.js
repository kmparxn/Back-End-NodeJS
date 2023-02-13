const {check} = require("express-validator");
const { validateResult } = require("../utils/handleValidator");
    
const validatorRegister = [
  check("name")
  .exists()
  .notEmpty()
  .isLength({min:3, max:30}),
  check("lastName")
  .exists()
  .notEmpty()
  .isLength({min:3, max:30}),
  check("password")
  .exists()
  .notEmpty()
  .isLength({min:3, max:15}),
  check("userName")
  .exists()
  .notEmpty()
  .isLength({min:3, max:15}),
  check("email")
  .exists()
  .notEmpty()
  .isEmail(),
  (req, res, next) => {
      return validateResults(req, res, next)
  }
];

const validatorLogin = [
  check("password")
  .exists()
  .notEmpty()
  .isLength({min:3, max:15}),
  check("email")
  .exists()
  .notEmpty()
  .isEmail(),
  (req, res, next) => {
      return validateResults(req, res, next)
  }
];

module.exports = { validatorRegister, validatorLogin};