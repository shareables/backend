import bodyparser from "body-parser";
import express, { Response, Request } from "express";

const PORT = process.env.port || 8000;

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (_: Request, res: Response) => {
  res.status(200).send("Hello, World!");
});

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log("sharables backend now listening on port:", PORT);
});
