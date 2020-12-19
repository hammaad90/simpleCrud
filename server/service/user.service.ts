import { IUser } from "models/models/user.model";
import { createUser, getUser, findAllUser, updateUserById, deleteuser } from '../query/user.query';
import * as  bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';

export default class UserService {

    // method to register user
    public async createUser(payload: IUser) {
        console.log('payload>>>', payload)
        var encryptedPassword = bcrypt.hashSync(payload.password, 8);
        let user = {
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            password: encryptedPassword,
            phoneNumber: payload.phoneNumber,
            gender: payload.gender
        }
        let createUSer = await createUser(user);
        let result = _.pick(createUSer, ['_id', 'firstName', 'lastName', 'email', 'isActive', 'phoneNumber', 'gender'])
        return result;

    }

    // method to fetch user detail by email
    public async getUserByEamil(email: IUser) {
        let query = {
            email: email
        }
        let user = await getUser(query)
        return user;

    }

    // method to let user login
    public async login(payload: IUser, user) {
        let passwordIsValid = bcrypt.compareSync(payload.password, user.password);
        if (!passwordIsValid) {
            return false;
        } else {
            let LoginUser = _.pick(user, ['_id', 'firstName', 'lastName', 'email', 'isActive', 'phoneNumber', 'gender']);
            let token = jwt.sign({ id: user._id }, process.env.SECRETKEY, { expiresIn: "1 days" });
            return {
                user: LoginUser,
                token: token
            }
        }

    }

    // to get all user
    public async getAllUser() {
        let query = {}
        let user = await findAllUser(query)
        return user;
    }

    // to get user by id
    public async getUserById(userId) {
        let query = {_id: userId}
        let user = await getUser(query)
        return user;
    }

    // to get update a user
    public async updateUser(userId, user) {
        let query = {_id: userId}
        let updatedData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            gender: user.gender
        }
        let result = await updateUserById(query, updatedData)
        return result;
    }

    // to delete user by id
    public async deleteUserById(userId) {
        let query = {_id: userId}
        let user = await deleteuser(query)
        return user;
    }

}