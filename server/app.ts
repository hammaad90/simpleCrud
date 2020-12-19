import * as express from "express";
import * as bodyParser from "body-parser";
import dBConnect from './config/databaseConnection';
import { UserRoutes } from "./routes/user.routes";

class App {

   public app: express.Application;
   private userRoutes: UserRoutes = new UserRoutes();


   constructor() {
      this.app = express();
      this.config();
      this.connectDb();
      this.userRoutes.route(this.app);
   }

   private config(): void {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: true }));
   }

   // connect to DB
   private connectDb(): void {
      dBConnect();
   }

}
export default new App().app;