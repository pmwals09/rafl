"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var api_1 = __importDefault(require("./api/api"));
var rootRouter = express_1.Router();
rootRouter.use('/api', api_1.default);
exports.default = rootRouter;
