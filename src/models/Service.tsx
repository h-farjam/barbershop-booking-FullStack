import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // عنوان الزامی است
    trim: true,
  },
  subtitle: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);

export default Service;
