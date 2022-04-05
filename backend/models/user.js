import mongoose from 'mongoose';
import crypto from 'crypto';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      max: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    profile: {
      type: String,
      required: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: {
      salt: Number,
      about: {
        type: String,
      },
      role: {
        type: Number,
        trim: true,
      },
      photo: {
        data: Buffer,
        contentType: String,
      },
    },
    resetPasswordLink: {
      data: String,
      default: '',
    },
  },
  { timestamp: true }
);

const User = mongoose.model('User', userSchema);

//Export Sattement
export default User;
