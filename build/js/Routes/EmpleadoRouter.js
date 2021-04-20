"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var EmpleadoControlador_1 = __importDefault(require("../Controlador/EmpleadoControlador"));
var EmpleadoRouter = /** @class */ (function () {
    function EmpleadoRouter() {
        this.router = express_1.Router();
        this.agregarRutas();
    }
    EmpleadoRouter.prototype.agregarRutas = function () {
        this.router.get('/empleados', EmpleadoControlador_1.default.getAll);
    };
    return EmpleadoRouter;
}());
var empleadoRouter = new EmpleadoRouter();
exports.default = empleadoRouter.router;
