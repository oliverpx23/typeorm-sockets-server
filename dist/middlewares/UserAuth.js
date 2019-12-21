"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserToken_1 = require("../classes/auth/UserToken");
exports.verificaToken = function (req, res, next) {
    var userToken = req.headers.authorization || '';
    UserToken_1.default.comprobarToken(userToken)
        .then(function (decoded) {
        console.log('Decoded', decoded);
        req.body.usuario = decoded.usuario;
        next();
    })
        .catch(function (err) {
        res.status(403).json({
            ok: false,
            mensaje: 'Token Invalido'
        });
    });
};
//# sourceMappingURL=UserAuth.js.map