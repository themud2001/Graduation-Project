const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/db");
const User = require("./User");

const WaterStation = sequelize.define("waterStations", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

WaterStation.hasMany(User);
User.belongsTo(WaterStation);

module.exports = WaterStation;