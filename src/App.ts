import * as express from 'express';
import { createConnection, Connection } from 'typeorm';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { Server } from 'http';
import * as SocketIO from 'socket.io';
import * as mysockets from './sockets/socket';


import { controllers } from './classes/IndexControllers'


class App {

    private static _instance: App;  //Para patron singleton

    private app: express.Application;
    private port: number;
    public connection: Connection; // TypeORM conexion a la base de datos

    public io: SocketIO.Server;

    private httpServer: Server;

    private constructor() {


        this.app = express();
        this.port = 3001;
        this.initializeModels();
        this.initializeMiddlewares();
        this.initializeControllers();
        
        this.httpServer = new Server(this.app);
        
        this.io = SocketIO(this.httpServer);
        
        this.escucharSockets();
        

    }

    // para patron singleton
    public static get Instance() {
        return this._instance || (this._instance = new this())
    }

    private escucharSockets() {
        console.log('Escuchando Sockets');
        this.io.on('connection', cliente => {

            console.log("cliente conectado");
            mysockets.desconectar(cliente);
            
        });
    }

    private async initializeModels() {
        const connection = await createConnection();
        if (connection === undefined) { 
            throw new Error('Error conectando a la base de datos'); 
        }
        else {
            console.log("Base de datos Conectada!...");
        } // Si falla la conexion a la db se detiene el backend
        connection.synchronize(); // Sincroniza la base de datos (Usar solo si la base de datos se arma desde los modelos declarados en el backend)
        this.connection = connection; // Almacenamos la conexion en la clase, normalmente no se utiliza pero podria ser util
    }


    private initializeMiddlewares() {
        //this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({ extended: true}));
        this.app.use( bodyParser.json());
        this.app.use(cors({origin: true, credentials: true})); // CORS, configuracion de los dominios permitidos
    }


    private initializeControllers() {
        // se inicializa la lista de controladores enviados en App.ts
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.httpServer.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }

}

export default App;