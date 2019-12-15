import express from "express";
import { Controller } from "./util/controller.interface";

class ExampleController implements Controller {
  public path = "/example";
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
    // Bind functions
    this.helloWorld = this.helloWorld.bind(this);
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}/hello`, this.helloWorld);
  }

  helloWorld = (res: express.Request, resp: express.Response) => {
    resp.status(201).send("Hello World from Example Controller!");
  };
}

export default ExampleController;
