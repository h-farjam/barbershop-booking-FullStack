// src/models/Reservation.ts
import mongoose, { Schema, model, models, Document, Types } from "mongoose";

export interface IReservation extends Document {
  userId: Types.ObjectId; // Ref به User
  serviceId: Types.ObjectId; // Ref به Service
  slotId: Types.ObjectId; // Ref به TimeSlot
  bookedAt: Date;
}

const reservationSchema = new Schema<IReservation>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  serviceId: { type: Schema.Types.ObjectId, ref: "Service", required: true },
  slotId: { type: Schema.Types.ObjectId, ref: "TimeSlot", required: true },
  bookedAt: { type: Date, default: Date.now },
});

const Reservation =
  models.Reservation || model<IReservation>("Reservation", reservationSchema);
export default Reservation;
