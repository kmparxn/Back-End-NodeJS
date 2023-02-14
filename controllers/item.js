const { matchedData } = require('express-validator');
const {itemsModel} = require('../models')
const { handleHttpError } = require("../utils/handleError")
/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) =>{
    try {      
        const data = await itemsModel.findAll();
        res.send({data})
        
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ItemS")    
    }
};
/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await itemsModel.findByPk();
        res.send({data});
        
    } catch (e) {
        handleHttpError(res, "ERROR_GET_Item")
    }
};
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) =>{
    try {
        const body = matchedData(req)
        const data = await itemsModel.create(body);
        res.send({data});
        
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_ItemS")      
    }

};
/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) =>{
    try {
        const {id, ...body} = matchedData(req);
        const data = await itemsModel.update(body, { where: { id: id } });
        res.send({data});
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_ItemS");     
    }
};
/**
 *  Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await itemsModel.destroy({
            where: {
              id: id
            }
          });
        res.send({ data });
        
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_Item")
        
    }

};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}