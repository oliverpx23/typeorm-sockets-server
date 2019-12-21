"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
//Inicializar los nuevos controladores aqui "New Controller(),""
var controllers = [];
var app = new App_1.default(controllers, 3001);
app.listen();
exports.default = app;
//# sourceMappingURL=server.js.map