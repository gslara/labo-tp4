"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empleado = /** @class */ (function () {
    function Empleado(legajo, apellido, nombre, dni, sector, fechaIngreso, activo) {
        this.legajo = legajo;
        this.apellido = apellido;
        this.nombre = nombre;
        this.dni = dni;
        this.sector = sector;
        this.fechaIngreso = fechaIngreso;
        this.activo = activo;
    }
    return Empleado;
}());
exports.default = Empleado;
