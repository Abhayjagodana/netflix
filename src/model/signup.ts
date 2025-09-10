import mongoose, { Schema, model, models } from "mongoose";
import { regex } from "zod";

const signupSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
    regex: /^[a-zA-Z\s]+$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    regex: /^\+?[1-9]\d{1,14}$/,
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
