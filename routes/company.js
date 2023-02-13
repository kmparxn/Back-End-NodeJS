const express = require("express");
const router = express.Router();
const { getCompanies, getCompany, createCompany, updateCompany, deleteCompany} = require("../controllers/company");
const { validatorCreateCompany, validatorGetCompany } = require("../validators/company");
const customHeader = require("../middleware/customHeader");

router.get("/", getCompanies);
router.get("/:id", validatorGetCompany, getCompany);
router.post("/", validatorCreateCompany , createCompany);
router.put("/:id", validatorGetCompany, validatorCreateCompany, updateCompany);
router.delete("/:id", validatorGetCompany, deleteCompany);

module.exports = router;