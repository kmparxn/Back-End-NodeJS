const express = require("express");
const router = express.Router();
const { getCompanys, getCompany, createCompany, updateCompany, deleteCompany} = require("../controllers/tracks");
const { validatorCreateCompany, validatorGetCompany } = require("../validators/tracks");
const customHeader = require("../middleware/customHeader");

router.get("/", getCompanies);
router.get("/:id", validatorGetCompany,getCompany);
router.post("/", validatorCreateCompany , createCompany);
router.put("/:id", validatorGetCompany, validatorCreateCompany, updateCompany);

router.delete("/:id", validatorGetCompany, deleteCompany);


module.exports = router;