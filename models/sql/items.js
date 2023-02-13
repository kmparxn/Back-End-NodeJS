const {sequelize} = require("../../config/mysql");
const {DataTypes} = require("sequelize");

const Item = sequelize.define(
    'Item',
    {
        date:{
            type: DataTypes.DATE
        },
        item:{
            type: DataTypes.STRING
        },
        amount:{
            type: DataTypes.INTEGER
        },
        price:{
            type: DataTypes.INTEGER
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Item;