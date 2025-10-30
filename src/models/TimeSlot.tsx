// models/TimeSlot.ts
import mongoose, { Schema, models } from "mongoose";

const TimeSlotSchema = new Schema({
  date: { type: String, required: true }, // تاریخ روز، مثلا "۱۴۰۴/۰۸/۰۸"
  time: { type: String, required: true }, // مثلا "10:00 - 12:00"
  isBooked: { type: Boolean, default: false }, // آیا رزرو شده؟
  bookedBy: { type: String, default: null }, // اسم کاربری که رزرو کرده
  bookedAt: { type: Date }, // زمان رزرو
});

const TimeSlot = models.TimeSlot || mongoose.model("TimeSlot", TimeSlotSchema);
export default TimeSlot;
