import app from "./application";
import * as http from "http";

const port = process.env.PORT || 8000;

http.createServer(app).listen(port);
