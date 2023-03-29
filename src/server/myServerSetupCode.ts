import { ServerSetupFn, Application } from "@wasp/types";

const mySetupFunction: ServerSetupFn = async ({ app }) => {
  addCustomRoute(app);
};

function addCustomRoute(app: Application) {
  // app.get('/customRoute', (_req, res) => {
  //   res.send('I am a custom route')
  // })
}
