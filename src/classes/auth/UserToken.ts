import * as jwt from 'jsonwebtoken';

export default class UserToken {

    private static seed: string = '7a[t^].NMV^GW=pkv{6M}XfgPdc4';
    private static caducidad: string = '30d';

    constructor() {

    }

    static getJwtToken( payload: any ): string {

        return jwt.sign({
            usuario: payload
        }, this.seed, { expiresIn: this.caducidad });

    }

    static comprobarToken( userToken: string ) {

        return new Promise( (resolve, reject ) => {

            jwt.verify( userToken, this.seed, ( err, decoded ) => {
    
                if ( err ) {
                    reject();
                } else {
                    resolve( decoded );
                }
       
            })
        });
    }


}


