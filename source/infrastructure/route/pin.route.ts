import { Router } from "express";
import { PinUseCase } from "../../pin/aplication/pinUseCase";
import { PinController } from "../controller/pin.ctrl";
import { MongoRepository } from "../repository/mongo.repository";

const route = Router();

//* iniciar repo

const mongoRepository = new MongoRepository();

//* Casos de uso

const pinUseCase = new PinUseCase(mongoRepository);

//*Iniciar Controller

const pinCtrl = new PinController(pinUseCase);

//** */

route.post("/user", pinCtrl.insertCtrl);
route.get("/user/:id", pinCtrl.getCtrl);

export default route;
