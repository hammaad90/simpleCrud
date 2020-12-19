import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

// validate user token and check token provided or not
export const authValidator = function (req: Request, res: Response, next: NextFunction) {
  var token = req.headers['x-access-token'];
  if (!token) return res
    .status(401)
    .send({ auth: false, info: "No token provided" });
  jwt.verify(token, process.env.SECRETKEY, function (err, decoded) {
    if (err) return res
      .status(500)
      .send({ auth: false, info: "Failed to authenticate token." });
    req['decoded'] = decoded;
    next();
  });

}