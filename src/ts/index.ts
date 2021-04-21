import Express, { Application } from 'express';
import empleadoRouter from './Routes/EmpleadoRouter.js';
import path from 'path';

class Aplicacion{
    application : Application

    constructor(){
        this.application = Express();
        this.application.listen(3000);
        this.application.set('view engine', 'ejs');
        this.application.set('views',path.resolve('build/views'));
        this.addRoutes();
    }

    addRoutes(){
        this.application.use(empleadoRouter);
        this.application.get('/',(req, res)=>{
            res.render('index');
        });
    }
}

const aplicacion = new Aplicacion();




