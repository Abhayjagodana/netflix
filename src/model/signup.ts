import  { Schema, model, models } from "mongoose";

const signupSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
    match: /^[a-zA-Z\s]+$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: /^\+?[1-9]\d{1,14}$/,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const signup = models.Signup || model("Signup", signupSchema);

export default signup;
