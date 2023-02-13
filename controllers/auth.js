const { matchedData } = require('express-validator');
const {authModel} = require('../models')
const { handleHttpError } = require("../utils/handleError")
/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req, res) =>{
    try {      
        const data = await authModel.find({});
        res.send({data})
        
    } catch (e) {
        handleHttpError(res, "ERROR_GET_UserS")    
    }
};
/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getUser = async (req, res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await authModel.findById(id);
        res.send({data});
        
    } catch (e) {
        handleHttpError(res, "ERROR_GET_User")
    }
};
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createUser = async (req, res) =>{
    try {
        const body = matchedData(req)
        const data = await authModel.create(body);
        res.send({data});
        
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_UserS")      
    }

};
/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateUser = async (req, res) =>{
    try {
        const {id, ...body} = matchedData(req);
        const data = await authModel.findOneAndUpdate(body);
        res.send({data});
    } catch (e) {
        handleHttpError(res, "ERROR_CREATE_UserS");     
    }
};
/**
 *  Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteUser = async (req, res) =>{
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await authModel.deleteOne({_id:id});
        res.send({ data });
        
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_User")
        
    }

};

module.exports = {getUsers, getUser, createUser, updateUser, deleteUser}