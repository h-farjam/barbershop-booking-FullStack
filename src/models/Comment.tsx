import mongoose, { Schema, models, model } from "mongoose";

const CommentSchema = new Schema(
  {
    name: { type: String, required: true }, // نام فرد
    text: { type: String, required: true }, // متن نظر
    date: { type: String, required: true }, // تاریخ — مثل 1404/7/19
  },
  { timestamps: true }
);

const Comment = models.Comment || model("Comment", CommentSchema);
export default Comment;
