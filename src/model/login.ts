import mongoose, { Schema, Document, models } from "mongoose";

export interface ILogin extends Document {
  email: string;
  password: string;
}

const LoginSchema: Schema = new Schema(
  {
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const Login = models.Login || mongoose.model<ILogin>("Login", LoginSchema);

export default Login;