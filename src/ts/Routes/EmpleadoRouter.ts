import Express,{Router} from 'express';
import EmpleadoControlador from '../Controlador/EmpleadoControlador.js';

class EmpleadoRouter{
    router : Router;

    constructor(){
        this.router = Router();
        this.agregarRutas();
    }

    agregarRutas(){
        this.router.get('/empleados',EmpleadoControlador.getAll);
        this.router.get('/empleados/:legajo',EmpleadoControlador.getOne);
        this.router.get('/crear',EmpleadoControlador.crear);
        this.router.get('/empleados/:legajo/modificar', EmpleadoControlador.modificar);
        this.router.post('/empleados/:legajo/destroy',EmpleadoControlador.borrar);
        this.router.post('/empleados/crear',EmpleadoControlador.create);
        this.router.post('/empleados/update', EmpleadoControlador.update);
    }
}

const empleadoRouter = new EmpleadoRouter();

export default empleadoRouter.router;