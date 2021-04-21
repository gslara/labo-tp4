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

    async crear(req: Request, res: Response) {
        res.render('formulario');
    }

    async modificar(req: Request, res: Response) {
        try{
            let conexion = await mySQL.connect();
            let es =
                await conexion.query(
                    'SELECT * FROM empleados WHERE legajo = ?',
                    req.params.legajo
                );
            res.render('formulario', { empleado: es[0], opcion: 'Modificar', url:'modificar' });
        }catch(error){
            console.error(error);
        }
    }

    async create(req : Request, res : Response){
        
    }

    async update(req: Request, res: Response) {

    }

    async borrar(req : Request, res : Response){
        try{
            let conexion = await mySQL.connect();
            console.log(req.body);
            await conexion.query('DELETE FROM empleados WHERE legajo = ?',
            req.body.legajo);
            res.redirect('/empleados');
            conexion.release();
        }catch(error){
            console.error(error);
        }finally{
            
        }
    }
}

const empleadoControlador = new EmpleadoControlador();

export default empleadoControlador;