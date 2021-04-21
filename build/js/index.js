"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var EmpleadoRouter_js_1 = __importDefault(require("./Routes/EmpleadoRouter.js"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var Aplicacion = /** @class */ (function () {
    function Aplicacion() {
        this.application = express_1.default();
        this.application.listen(3000);
        this.application.set('view engine', 'ejs');
        this.application.set('views', path_1.default.resolve('build/views'));
        this.application.use(body_parser_1.default.json());
        this.application.use(body_parser_1.default.urlencoded({ extended: true }));
        this.addRoutes();
    }
    Aplicacion.prototype.addRoutes = function () {
        this.application.use(EmpleadoRouter_js_1.default);
        this.application.get('/', function (req, res) {
            res.render('index');
        });
    };
    return Aplicacion;
}());
var aplicacion = new Aplicacion();
