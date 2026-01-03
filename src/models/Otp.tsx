import mongoose, { Schema, model, models } from "mongoose";

const otpSchema = new Schema({
  phone: { type: String, required: true },
  code: { type: String, required: true },
  expiresAt: { type: Date, required: true },
});

const Otp = models.Otp || model("Otp", otpSchema);
export default Otp;
