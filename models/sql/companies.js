const {sequelize} = require("../../config/mysql");
const {DataTypes} = require("sequelize");
const Item = require("./items");
const Company = sequelize.define(
    'Company',
    {
        name:{
            type: DataTypes.STRING
        },
        address:{
            type: DataTypes.STRING
        },
        nit:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        phone:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pais:{
            type: DataTypes.STRING
        },    
    },
    {
        timestamps: true,
    }
);

Company.hasMany(Item);
Item.belongsTo(Company);

module.exports = Company;