import mongoose from "mongoose";

const bankDataSchema = new mongoose.Schema(
  {
    bankname: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const BankData = mongoose.model("bankData", bankDataSchema);
export default BankData;
