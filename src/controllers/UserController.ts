import * as express from 'express';
import { createQueryBuilder } from 'typeorm';
import { UsuarioDashboardModel } from "../models/UsuarioDashboard";
import * as bcrypt from 'bcrypt';


class UserController {

    public path = '/usuarios';
    public router: express.Router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        // Middlewares en caso de haber
        // ...
        
        // Endpoints 
        this.router.get(this.path, this.getAll);   //Enpoint GET a {APIURL}/usuarios
        this.router.get(this.path+'/{search}', this.getAll);   //Enpoint GET a {APIURL}/usuarios/{search}
        this.router.post(this.path,  this.createUser);
 
    }

    public async getAll (req: express.Request, res: express.Response) {


         
    }

    public async createUser (req: express.Request, res: express.Response) {

        if(!req.body.Password || !req.body.UserName) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Los parametros Usuario y Contraseña son requeridos.'
            });
        }

        const user = new UsuarioDashboardModel();     
        user.UserName = req.body.UserName;
        user.Password = bcrypt.hashSync(req.body.Password, 10);
        user.Nombre = req.body.Nombre;
        user.ImgUrl = req.body.ImgUrl;

        user.save().then(
            (resp: any) => {
                //console.log(resp);
                return res.status(200).json({
                    ok: true,
                    mensaje: 'Usuario creado exitosamente',
                    data: resp
                });
            } 
        ).catch(
            (err: any) => {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Ocurrio un error al intentar crear el usuario',
                    error: err
                });
            }
        );
    }
}

export default UserController;