"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var EmpleadoRouter_1 = __importDefault(require("./Routes/EmpleadoRouter"));
var Aplicacion = /** @class */ (function () {
    function Aplicacion() {
        this.application = express_1.default();
        this.application.listen(3000);
        this.addRoutes();
    }
    Aplicacion.prototype.addRoutes = function () {
        this.application.use(EmpleadoRouter_1.default);
        this.application.get('/', function (request, response) {
            response.sendFile(__dirname + "/index.html");
        });
    };
    return Aplicacion;
}());
var aplicacion = new Aplicacion();
