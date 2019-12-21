import UserController from "../controllers/UserController";
import MensajeController from '../controllers/MensajeController';

export const controllers = [
    new UserController(),
    new MensajeController()
];