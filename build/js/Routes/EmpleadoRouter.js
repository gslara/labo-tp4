"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var EmpleadoControlador_js_1 = __importDefault(require("../Controlador/EmpleadoControlador.js"));
var EmpleadoRouter = /** @class */ (function () {
    function EmpleadoRouter() {
        this.router = express_1.Router();
        this.agregarRutas();
    }
    EmpleadoRouter.prototype.agregarRutas = function () {
        this.router.get('/empleados', EmpleadoControlador_js_1.default.getAll);
        this.router.get('/empleados/:legajo', EmpleadoControlador_js_1.default.getOne);
        this.router.get('/crear', EmpleadoControlador_js_1.default.crear);
        this.router.get('/empleados/:legajo/modificar', EmpleadoControlador_js_1.default.modificar);
        this.router.post('/empleados/destroy', EmpleadoControlador_js_1.default.borrar);
        this.router.post('/empleados/crear', EmpleadoControlador_js_1.default.create);
        this.router.post('/empleados/update', EmpleadoControlador_js_1.default.update);
    };
    return EmpleadoRouter;
}());
var empleadoRouter = new EmpleadoRouter();
exports.default = empleadoRouter.router;
