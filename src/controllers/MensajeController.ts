import * as express from 'express';
import App from '../App';

class MensajeController {

    public path = '/usuario';
    public router: express.Router = express.Router();


    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {        
        // Endpoints 
        this.router.get(this.path, this.getAll);   //Enpoint GET a {APIURL}/usuarios
        this.router.get(this.path+'/:search', this.getAll);   //Enpoint GET a {APIURL}/usuarios/{search}
 
    }

    public async getAll (req: express.Request, res: express.Response) {
        
        const socket = App.Instance.io;
        socket.emit('mensaje-nuevo', {id: 1, mensaje: 'Probando respuesta de sockets xd'} );
        console.log('emitimos bien');
    
        res.json({
            ok: true
        });
    
    }

    public async getSearchUser (req: express.Request, res: express.Response) {


         
    }
}

export default MensajeController;