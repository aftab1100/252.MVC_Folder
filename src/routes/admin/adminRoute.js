//express Route()
const express = require("express");
const { adminController } = require("../../controllers/admin/adminController");
const { studentValidator } = require("../../validators/student");
const adminRoute = express.Router();

adminRoute.get("/admin/save_student", studentValidator, adminController);

exports.adminRoute = adminRoute;
