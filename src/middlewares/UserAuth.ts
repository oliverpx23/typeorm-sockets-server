import { Response, Request, NextFunction } from 'express';
import Token from '../classes/auth/UserToken';
 

export const verificaToken = ( req: Request, res: Response, next: NextFunction  ) => {

    const userToken = req.headers.authorization || '';

    

    Token.comprobarToken( userToken )
    .then(  (decoded: any) => {
        console.log('Decoded', decoded );
        req.body.usuario = decoded.usuario;
        next();
    })
    .catch( err => {

        res.status(403).json({
            ok: false,
            mensaje: 'Token Invalido'
        });

    });

}
