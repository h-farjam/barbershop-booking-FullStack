import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  Fname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
    trim: true,
  },
  Lname: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 15,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    match: /^09\d{9}$/, // اعتبارسنجی شماره موبایل در سطح schema هم
  },
});

const User = models.User || model("User", userSchema);

export default User;
