import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import route from "./routes/index.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", route);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
