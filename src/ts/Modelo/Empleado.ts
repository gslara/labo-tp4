export default class Empleado{
    legajo? : bigint;
    apellido : string;
    nombre : string;
    dni : bigint;
    sector : string;
    fechaIngreso? : Date;
    activo? : boolean;

    constructor(legajo : bigint, apellido : string, nombre : string, dni : bigint, sector : string, fechaIngreso : Date, activo : boolean){
        this.legajo = legajo;
        this.apellido = apellido;
        this.nombre = nombre;
        this.dni = dni;
        this.sector = sector;
        this.fechaIngreso = fechaIngreso;
        this.activo = activo;
    }
}