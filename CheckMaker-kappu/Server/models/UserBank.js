import mongoose, { Schema, ObjectId } from "mongoose";

const bankDataSchema = new mongoose.Schema(
  {
    bankname: {
      type: String,
      required: true,
      unique: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userData",
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const UserBank = mongoose.model("userbank", bankDataSchema);
export default UserBank;
