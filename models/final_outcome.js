const sequelize = require("../dbconnection");
const Sequelize = require("sequelize");

const OtherFinalOutcome = sequelize.sequelize.define(
  "tbl_other_final_outcome",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: Sequelize.STRING,
    appointment_id: Sequelize.INTEGER,
    created_by: Sequelize.INTEGER,
    updated_by: Sequelize.INTEGER
  },
  {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: "tbl_other_final_outcome"
  }
);

exports.OtherFinalOutcome = OtherFinalOutcome;
