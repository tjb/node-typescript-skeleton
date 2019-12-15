import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Controller } from "./util/controller.interface";

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.app.use("/", controller.router);
    });
    this.app.get("/hello", (req: express.Request, res: express.Response) =>
      res.status(201).send("Hello World!")
    );
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server online. Port: ${process.env.PORT || this.port}`);
    });
  }
}

export default App;
