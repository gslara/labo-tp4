import Express, { Application } from 'express';
import empleadoRouter from './Routes/EmpleadoRouter';

class Aplicacion{
    application : Application

    constructor(){
        this.application = Express();
        this.application.listen(3000);
        this.addRoutes();
    }

    addRoutes(){
        this.application.use(empleadoRouter);
        this.application.get('/', (request, response) => {
            response.sendFile(`${__dirname}/index.html`)
        });
    }
}

const aplicacion = new Aplicacion();




