import users from '../models/schema/user.schema';

// query to create user
export async function createUser(data) {
    let user = await users.create(data);
    return user ? user : null;
}

// query to get user detail
export async function getUser(query) {
    let user = await users.findOne(query);
    return user ? user : null;
}

// query to get all user
export async function findAllUser(query) {
    let user = await users.find(query);
    return user ? user : null;
}

// query to get all user
export async function updateUserById(query, data) {
    let user = await users.findByIdAndUpdate(query, data, {new: true});
    return user ? user : null;
}

// query to get all user
export async function deleteuser(query) {
    let user = await users.findByIdAndDelete(query);
    return user ? user : null;
}

