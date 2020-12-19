# TO start project: 
1. Install typescript and ts-node globally npm install -g typescript ts-node  
2. Install npm install on root directory
3. Start mongo database server
4. run `npm run start`  to start the project


# Apis with payload:
# Register User APi:
Api Url: http://localhost:3030/api/people
Api Type: POST
Api Payload: {
    "firstName": "Test update",
    "lastName": "test update",
    "email": "test5@gmail.com",
    "phoneNumber": "123456789",
    "password": "123456789",
    "gender": "F"
}

Api Response: 
{
    "info": "User Successfully Registered",
    "data": {
        "_id": "5f094e1c9e6e261a0ddab9cd",
        "firstName": "test",
        "lastName": "hello",
        "email": "qwerty@gmail.com",
         "phoneNumber": "123456789",
         "gender": "F"
        "isActive": true
    }
}

# Login User Api
Api Url : http://localhost:3030/api/people/login
Api Type: POST
Api Payload: {
    "email": "hello@gmail.com",
    "password": "123456"
}

Api Response: {
    "STATUS": "SUCCESS",
    "MESSAGE": "User Login",
    "DATA": {
        "user": {
            "_id": "5f087356e418a67406eae8d3",
            "firstName": "test",
            "lastName": "hello",
            "email": "hello@gmail.com"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMDg3MzU2ZTQxOGE2NzQwNmVhZThkMyIsImlhdCI6MTU5NDM5MzI3NywiZXhwIjoxNTk0NDc5Njc3fQ.BdIGSiyH5AKtoPAvM-7bvezLcUQ0wt_G_h5RcQjBrlw"
    }
}

# Get All User
Api Url: http://localhost:3030/api/people
Api Type: GET
Api Response: 
{
    "allUser": [
        {
            "isActive": true,
            "_id": "5fde49c49942d3565c389f0b",
            "firstName": "Test",
            "lastName": "Singh",
            "email": "test@gmail.com",
            "password": "$2a$08$Hvi6p3I8ItM4Oy8cRQED.OteSK2BvXzaWoKFymnknOnYAV5XuEcWG",
            "phoneNumber": "123456789",
            "gender": "M",
            "__v": 0
        },
        {
            "isActive": true,
            "_id": "5fde537bb03e79621543c970",
            "firstName": "Test update",
            "lastName": "test update",
            "email": "test1@gmail.com",
            "password": "$2a$08$K.9cc6nl8ccBG5aBMDjLJu2qkHuIkQDG73/ktrtrsdtNwUyw4KKau",
            "phoneNumber": "123456789",
            "gender": "F",
            "__v": 0
        },
        {
            "isActive": true,
            "_id": "5fde5452b5eaa0648e6a5904",
            "firstName": "Test update",
            "lastName": "test update",
            "email": "test3@gmail.com",
            "password": "$2a$08$/74faUvVO.c23x8XZaCtDOR7spjOKd6tUHvth//rqzJb7p8HS355S",
            "phoneNumber": "123456789",
            "gender": "F",
            "__v": 0
        }
    ]
}

# to get user by id
Api Url : http://localhost:3030/api/people/5fde537bb03e79621543c970
Api Type: GET
Api Response: {
    "user": {
        "isActive": true,
        "_id": "5fde537bb03e79621543c970",
        "firstName": "Test update",
        "lastName": "test update",
        "email": "test1@gmail.com",
        "password": "$2a$08$K.9cc6nl8ccBG5aBMDjLJu2qkHuIkQDG73/ktrtrsdtNwUyw4KKau",
        "phoneNumber": "123456789",
        "gender": "F",
        "__v": 0
    }
}

# to update user by id
Api Url : http://localhost:3030/api/people/5fde537bb03e79621543c970
Api Type: PUT
Api Payload:{
    "firstName": "Test",
    "lastName": "test",
    "email": "test5@gmail.com",
    "phoneNumber": "123456789",
    "gender": "F"
}
Api Response: {
    "user": {
        "isActive": true,
        "_id": "5fde537bb03e79621543c970",
        "firstName": "Test",
        "lastName": "test",
        "email": "test5@gmail.com",
        "password": "$2a$08$K.9cc6nl8ccBG5aBMDjLJu2qkHuIkQDG73/ktrtrsdtNwUyw4KKau",
        "phoneNumber": "123456789",
        "gender": "F",
        "__v": 0
    }
}

# to delete a user by id
Api Url: http://localhost:3030/api/remove/5fde537bb03e79621543c970
Api Type: DELETE
Api Response: {
    "user": {
        "isActive": true,
        "_id": "5fde537bb03e79621543c970",
        "firstName": "Test",
        "lastName": "test",
        "email": "test4@gmail.com",
        "password": "$2a$08$9rk//5tw/4o/9zxRh8Et5OXC4PgY9hPLrH24coCCiPD/sHYpy7nee",
        "phoneNumber": "123456789",
        "gender": "F",
        "__v": 0
    }
}