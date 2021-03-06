"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MySQL_js_1 = __importDefault(require("../Datos/MySQL.js"));
var EmpleadoControlador = /** @class */ (function () {
    function EmpleadoControlador() {
    }
    EmpleadoControlador.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var conexion, es, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, MySQL_js_1.default.connect()];
                    case 1:
                        conexion = _a.sent();
                        return [4 /*yield*/, conexion.query('SELECT * FROM empleados')];
                    case 2:
                        es = _a.sent();
                        return [4 /*yield*/, res.render('empleados', { empleados: es })];
                    case 3:
                        _a.sent();
                        conexion.release();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EmpleadoControlador.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var conexion, es, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, MySQL_js_1.default.connect()];
                    case 1:
                        conexion = _a.sent();
                        return [4 /*yield*/, conexion.query('SELECT * FROM empleados WHERE legajo = ?', req.params.legajo)];
                    case 2:
                        es = _a.sent();
                        return [4 /*yield*/, res.render('empleado', { empleado: es[0] })];
                    case 3:
                        _a.sent();
                        conexion.release();
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EmpleadoControlador.prototype.crear = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                res.render('formulario', { opcion: 'Crear', url: 'crear', empleado: '' });
                return [2 /*return*/];
            });
        });
    };
    EmpleadoControlador.prototype.modificar = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var conexion, es, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, MySQL_js_1.default.connect()];
                    case 1:
                        conexion = _a.sent();
                        return [4 /*yield*/, conexion.query('SELECT * FROM empleados WHERE legajo = ?', req.params.legajo)];
                    case 2:
                        es = _a.sent();
                        res.render('formulario', { empleado: es[0], opcion: 'Modificar', url: 'update' });
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EmpleadoControlador.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var conexion, query, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, MySQL_js_1.default.connect()];
                    case 1:
                        conexion = _a.sent();
                        query = "INSERT INTO empleados VALUES(" + req.body.Legajo + ",'" + req.body.Apellido + "','" + req.body.Nombre + "'," + req.body.Dni + ",'" + req.body.Sector + "','" + req.body.Fecha + "'," + req.body.Activo + ")";
                        return [4 /*yield*/, conexion.query(query)];
                    case 2:
                        _a.sent();
                        conexion.release();
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        console.error(error_4);
                        return [3 /*break*/, 4];
                    case 4:
                        res.redirect('/empleados');
                        return [2 /*return*/];
                }
            });
        });
    };
    EmpleadoControlador.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var conexion, query, es, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, MySQL_js_1.default.connect()];
                    case 1:
                        conexion = _a.sent();
                        query = "UPDATE empleados SET legajo = " + req.body.Legajo + ", apellido = '" + req.body.Apellido + "', nombre = '" + req.body.Nombre + "', dni = " + req.body.Dni + ", sector = '" + req.body.Sector + "', fecha_ingreso = '" + req.body.Fecha + "', activo = " + req.body.Activo + " WHERE legajo = " + req.body.Legajo;
                        return [4 /*yield*/, conexion.query(query)];
                    case 2:
                        es = _a.sent();
                        return [4 /*yield*/, conexion.release()];
                    case 3:
                        _a.sent();
                        res.redirect('/empleados');
                        return [3 /*break*/, 5];
                    case 4:
                        error_5 = _a.sent();
                        console.error(error_5);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EmpleadoControlador.prototype.borrar = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var conexion, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        return [4 /*yield*/, MySQL_js_1.default.connect()];
                    case 1:
                        conexion = _a.sent();
                        console.log(req.params.legajo);
                        return [4 /*yield*/, conexion.query('DELETE FROM empleados WHERE legajo = ?', req.params.legajo)];
                    case 2:
                        _a.sent();
                        res.redirect('/empleados');
                        conexion.release();
                        return [3 /*break*/, 5];
                    case 3:
                        error_6 = _a.sent();
                        console.error(error_6);
                        return [3 /*break*/, 5];
                    case 4: return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return EmpleadoControlador;
}());
var empleadoControlador = new EmpleadoControlador();
exports.default = empleadoControlador;
