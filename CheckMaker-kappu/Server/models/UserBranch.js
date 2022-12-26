import mongoose, { Schema, ObjectId } from "mongoose";

const bankDataSchema = new mongoose.Schema(
  {
    firmname:{type:String},
    ifsc: { type: mongoose.Schema.Types.Mixed },
    bank: { type: String },
    branch: { type: String },
    account: { type: Number },
    firmid: { type: mongoose.Schema.Types.ObjectId, ref: "firmData" },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "userData" },
  },
  {
    timestamp: true,
  }
);

const UserBranch = mongoose.model("userbranch", bankDataSchema);
export default UserBranch;
