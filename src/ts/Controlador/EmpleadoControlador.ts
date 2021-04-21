import mySQL from '../Datos/MySQL.js';
import {Request, Response} from 'express';
import Empleado from '../Modelo/Empleado.js';

class EmpleadoControlador{
    async getAll(req : Request, res : Response){
        try{
            let conexion = await mySQL.connect();
            let es = await conexion.query('SELECT * FROM empleados');
            await res.render('empleados', {empleados : es});
            conexion.release();
        }catch(error){
            console.error(error);
        }
    }

    async getOne(req : Request, res : Response){
        try{
            let conexion = await mySQL.connect();
            let es =
                await conexion.query(
                    'SELECT * FROM empleados WHERE legajo = ?',
                    req.params.legajo
            );
            await res.render('empleado', {empleado : es[0]});
            conexion.release();
        }catch(error){
            console.error(error);
        }
    }

    async create(req : Request, res : Response){
        
    }

    async borrar(req : Request, res : Response){
        try{
            let conexion = await mySQL.connect();
            let consulta = await conexion.query('DELETE FROM empleados WHERE legajo = ?',
            req.params.legajo);
            conexion.release();
        }catch(error){
            console.error(error);
        }finally{
            res.redirect('/');
        }
    }
}

const empleadoControlador = new EmpleadoControlador();

export default empleadoControlador;