const { matchedData } = require('express-validator');
const {companiesModel} = require('../models')
const { handleHttpError } = require("../utils/handleError")
/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getCompanies = async (req, res) =>{
    try {      
        const data = await companiesModel.find({});
        res.send({data})
        
    } catch (e) {
        handleHttpError(res, "ERROR_GET_CompanyS")    
    }
};
/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getCompany = async (req, res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await companiesModel.findById(id);
        res.send({data});
        
    } catch (e) {
        handleHttpError(res, "ERROR_GET_Company")
    }
};
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createCompany = async (req, res) =>{
    try {
        const body = matchedData(req)
        const data = await companiesModel.create(body);
        res.send({data});
        
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_CompanyS")      
    }

};
/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateCompany = async (req, res) =>{
    try {
        const {id, ...body} = matchedData(req);
        const data = await companiesModel.findOneAndUpdate(body);
        res.send({data});
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_CompanyS");     
    }
};
/**
 *  Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteCompany = async (req, res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await companiesModel.deleteOne({_id:id});
        res.send({ data });
        
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_Company")
        
    }

};

module.exports = {getCompanies, getCompany, createCompany, updateCompany, deleteCompany}