import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    gender:{
        type: String,
        enum: ['M', 'F']
    },
    isActive: {
        type: Boolean,
        default: true
    }

});

export default mongoose.model('users', schema);