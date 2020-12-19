import * as mongoose from 'mongoose';

const mongoUri = process.env.MONGO;

const dBConnect = function () {
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true
  });
};

export default dBConnect;
