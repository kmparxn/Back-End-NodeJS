const { matchedData } = require('express-validator');
const {companiesModel} = require('../models');
const Item = require('../models/sql/items');
const { handleHttpError } = require("../utils/handleError")
/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getCompanies = async (req, res) =>{
    try {      
        const data = await companiesModel.findAll({ include: Item });
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
        const data = await companiesModel.findByPk(id);
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
        const data = await companiesModel.update(body, { where: { nit: id } });
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
        const data = await companiesModel.destroy({
            where: {
              id: id
            }
          });
        res.send({ data });
        
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_Company")
        
    }

};

module.exports = {getCompanies, getCompany, createCompany, updateCompany, deleteCompany}