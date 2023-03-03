import "dotenv/config";
import express from "express";
import cors from "express";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan);
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`USER, Listo por el puerto ${port}`));
