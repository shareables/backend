import bodyparser from "body-parser";
import express, { Response, Request } from "express";
import HealthCheckRoute from "./routes/healthcheck";

const PORT = process.env.port || 8000;

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/health-check", HealthCheckRoute);

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log("sharables backend now listening on port:", PORT);
});
