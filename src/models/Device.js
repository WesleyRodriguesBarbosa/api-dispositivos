import mongoose from "mongoose";

const DeviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    pin: {
      type: Number,
      required: true,
      unique: true
    },
    status: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Device", DeviceSchema);