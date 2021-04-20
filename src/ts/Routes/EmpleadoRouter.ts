import {Router} from 'express';
import EmpleadoControlador from '../Controlador/EmpleadoControlador';

class EmpleadoRouter{
    router : Router;

    constructor(){
        this.router = Router();
        this.agregarRutas();
    }

    agregarRutas(){
        this.router.get('/empleados',EmpleadoControlador.getAll);
        this.router.get('/empleados/:legajo',EmpleadoControlador.getOne);
    }
}

const empleadoRouter = new EmpleadoRouter();

export default empleadoRouter.router;