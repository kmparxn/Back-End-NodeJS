const {sequelize} = require("../../config/mysql");
const {DataTypes} = require("sequelize");

const Auth = sequelize.define(
    'Auth',
    {
        name:{
            type: DataTypes.STRING
        },
        lastName:{
            type: DataTypes.STRING
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false

        },
        role:{
            type: DataTypes.ENUM(["user", "admin"]),
            defaultValue: "user"
        },
    },
    {
        timestamps: true,
    }
);

module.exports = Auth;