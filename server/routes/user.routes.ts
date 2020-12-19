import { Application, Request, Response } from 'express';
import { authValidator } from '../config/tokenValidator';
import { UserController } from '../controllers/user.controller';

export class UserRoutes {

    private user_controller: UserController = new UserController();

    public route(app: Application) {

        // to register user
        app.post('/api/people', (req: Request, res: Response) => {
            this.user_controller.create_user(req, res);
        });

        // to let user login
        app.post('/api/people/login', (req: Request, res: Response) => {
            this.user_controller.login(req, res);
        });

        // to get all user
        app.get('/api/people', (req: Request, res: Response) => {
            this.user_controller.getAllUser(req, res);
        });

         // to get user by id
         app.get('/api/people/:id', (req: Request, res: Response) => {
            this.user_controller.getUserById(req, res);
        });

        // to update a user
        app.put('/api/people/:id', (req: Request, res: Response) => {
            this.user_controller.updateUser(req, res);
        });

         // to update a user
         app.delete('/api/remove/:id', (req: Request, res: Response) => {
            this.user_controller.deleteUser(req, res);
        })

    }
}