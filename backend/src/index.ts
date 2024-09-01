import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ msg: "Hello!" });
});

app.listen(7000, () => {
  console.log("server started on port 7000");
});
