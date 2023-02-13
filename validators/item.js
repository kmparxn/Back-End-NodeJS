const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
    check("date")
    .exists()
    .notEmpty(),
    check("item")
    .exists()
    .notEmpty(),
    check("amount")
    .exists()
    .notEmpty(),
    check("price")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorGetItem = [
    check("id")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

const validatorUpdateItem = [
    check("id")
    .exists()
    .notEmpty(),
    check("date")
    .exists()
    .notEmpty(),
    check("item")
    .exists()
    .notEmpty(),
    check("amount")
    .exists()
    .notEmpty(),
    check("price")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


module.exports = { validatorCreateItem, validatorGetItem, validatorUpdateItem };