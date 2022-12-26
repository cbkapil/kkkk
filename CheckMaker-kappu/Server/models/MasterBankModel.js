import mongoose from "mongoose";

const masterbankDataSchema = new mongoose.Schema(
  {
    banknamelist: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const MasterBankData = mongoose.model("MasterBankData", masterbankDataSchema);
export default MasterBankData;
