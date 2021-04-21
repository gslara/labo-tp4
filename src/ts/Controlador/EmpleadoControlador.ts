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
        res.render('formulario', {opcion: 'Crear', url:'crear', empleado: ''});
    }

    async modificar(req: Request, res: Response) {
        try{
            let conexion = await mySQL.connect();
            let es =
                await conexion.query('SELECT * FROM empleados WHERE legajo = ?',req.params.legajo);
            res.render('formulario', { empleado: es[0], opcion: 'Modificar', url:'update' });
        }catch(error){
            console.error(error);
        }
    }

    async create(req : Request, res : Response){
        try{
            let conexion = await mySQL.connect();
            let query = `INSERT INTO empleados VALUES(${req.body.Legajo},'${req.body.Apellido}','${req.body.Nombre}',${req.body.Dni},'${req.body.Sector}','${req.body.Fecha}',${req.body.Activo})`
            await conexion.query(query);
            conexion.release();
        }catch(error){
            console.error(error);
        }

        res.redirect('/empleados');
    }

    async update(req: Request, res: Response) {
        try{
            let conexion = await mySQL.connect();
            let query = `UPDATE empleados SET legajo = ${req.body.Legajo}, apellido = '${req.body.Apellido}', nombre = '${req.body.Nombre}', dni = ${req.body.Dni}, sector = '${req.body.Sector}', fecha_ingreso = '${req.body.Fecha}', activo = ${req.body.Activo} WHERE legajo = ${req.body.Legajo}`;
            let es = await conexion.query(query);
            await conexion.release();
            res.redirect('/empleados');
        }catch(error){
            console.error(error);
        }
    }

    async borrar(req : Request, res : Response){
        try{
            let conexion = await mySQL.connect();
            console.log(req.params.legajo);
            await conexion.query('DELETE FROM empleados WHERE legajo = ?', req.params.legajo);
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