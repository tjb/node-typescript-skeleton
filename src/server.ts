import App from "./app";
import ExampleController from "./example.controller";

const app = new App(
  [
    // Add controllers here
    new ExampleController()
  ],
  8080
);

// Start server
app.listen();
