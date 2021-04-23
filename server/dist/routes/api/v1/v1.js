"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var v1Router = express_1.Router();
v1Router.get("/", function (req, res) {
    res.json({ site: "v1Router" });
});
exports.default = v1Router;
