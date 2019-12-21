"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var UserToken = /** @class */ (function () {
    function UserToken() {
    }
    UserToken.getJwtToken = function (payload) {
        return jwt.sign({
            usuario: payload
        }, this.seed, { expiresIn: this.caducidad });
    };
    UserToken.comprobarToken = function (userToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            jwt.verify(userToken, _this.seed, function (err, decoded) {
                if (err) {
                    reject();
                }
                else {
                    resolve(decoded);
                }
            });
        });
    };
    UserToken.seed = '7a[t^].NMV^GW=pkv{6M}XfgPdc4';
    UserToken.caducidad = '30d';
    return UserToken;
}());
exports.default = UserToken;
//# sourceMappingURL=UserToken.js.map