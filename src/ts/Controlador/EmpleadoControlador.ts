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
                    req.body.legajo
                );
            if(es){
                es.render('formulario', { empleado: es, opcion: 'Modificar' });
                let Legajo = document.getElementsByName('Legajo');
                let Apellido = document.getElementsByName('Apellido');
                let Nombre = document.getElementsByName('Nombre');
                let Dni = document.getElementsByName('Dni');
                let Sector = document.getElementsByName('Sector');
                let Fecha = document.getElementsByName('Fecha');
                let Activo = document.getElementsByName('Activo');
                console.log(Legajo);
                console.log(Apellido);
                console.log(Nombre);
                console.log(Dni);
                console.log(Sector);
                console.log(Fecha);
                console.log(Activo);
            }
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