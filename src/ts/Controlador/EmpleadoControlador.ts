import mySQL from "../Datos/MySQL";
import {Request, Response} from 'express';

class EmpleadoControlador{
    async getAll(req : Request, res : Response){
        try{
            let conexion = await mySQL.connect();
            let empleados = await conexion.query('SELECT * FROM empleados');
            res.send(empleados);
        }catch(error){
            console.error(error);
        }
    }
}

const empleadoControlador = new EmpleadoControlador();

export default empleadoControlador;