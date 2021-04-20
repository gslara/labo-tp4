import mySQL from '../Datos/MySQL';
import {Request, Response} from 'express';
import Empleado from '../Modelo/Empleado';

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

    async getOne(req : Request, res : Response){
        try{
            let conexion = await mySQL.connect();
            let empleado =
                await conexion.query(
                    'SELECT * FROM empleados WHERE legajo = ?',
                    req.params.legajo
            );
            res.send(empleado);
        }catch(error){
            console.error(error);
        }
    }

    async create(req : Request, res : Response){
        
    }
}

const empleadoControlador = new EmpleadoControlador();

export default empleadoControlador;