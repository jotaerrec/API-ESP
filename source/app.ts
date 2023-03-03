import "dotenv/config";
import express from "express";
import cors from "express";
import pinRoute from "./infrastructure/route/pin.route";
import dbInit from "./infrastructure/db/mongo";
import { modbusTCP } from "./infrastructure/modbus/modbus.provider";

modbusTCP;
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use("/pin", pinRoute);
dbInit().then();
app.listen(port, () => console.log(`Server listo por el puerto ${port} /*`));
