"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersRouter = express_1.Router();
usersRouter.use("/", function (req, res) {
    res.json({ test: "Successful" });
});
exports.default = usersRouter;
