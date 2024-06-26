const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Student = sequelize.define('Student', {
  USN: {
    type: DataTypes.STRING(10),
    primaryKey: true,
  },
  Name: {
    type: DataTypes.STRING(30),
  },
  Department: {
    type: DataTypes.STRING(3),
  },
  Semester: {
    type: DataTypes.INTEGER,
  },
  Address: {
    type: DataTypes.STRING,
  },
  PhoneNo: {
    type: DataTypes.STRING(10),
  },
  EmailId: {
    type: DataTypes.STRING(30),
  },
  DOB: {
    type: DataTypes.DATE
  },
  BloodGrp: {
    type: DataTypes.STRING(2)
  },
  CGPA: {
    type: DataTypes.REAL,
  },
  RoomNo: {
    type: DataTypes.STRING(4),
  },
  HostelId: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Student;