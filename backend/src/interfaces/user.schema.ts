import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    _id: Object,
    email: String,
    name: String,
    photo: String,
  },
  { timestamps: true, collection: 'users' },
);
