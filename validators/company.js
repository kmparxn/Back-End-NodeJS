const { check } = require("express-validator");
const {validateResults} = require("../utils/handleValidator")

const validatorCreateCompany = [
    check("name")
    .exists()
    .notEmpty(),
    check("address")
    .exists()
    .notEmpty(),
    check("nit")
    .exists()
    .notEmpty(),
    check("phone")
    .exists()
    .notEmpty(),
    check("pais")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetCompany = [
    check("id")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorUpdateCompany = [
    check("id")
    .exists()
    .notEmpty(),
    check("name")
    .exists()
    .notEmpty(),
    check("address")
    .exists()
    .notEmpty(),
    check("nit")
    .exists()
    .notEmpty(),
    check("phone")
    .exists()
    .notEmpty(),
    check("pais")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = { validatorCreateCompany, validatorGetCompany, validatorUpdateCompany };