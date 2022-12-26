import mongoose, { Schema, ObjectId } from "mongoose";

const bankDataSchema = new mongoose.Schema(
  {
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "userData" },
    firmid:{type: mongoose.Schema.Types.ObjectId, ref: "firmdata"},
    bankname: { type: String },
    branch: { type: String },
    account: { type: Number },
    firmname: { type: String },
    depositdate: { type: Date },
    docdate: { type: Date },
    twothousand: [{ quantity: Number, amount: Number }],
    fivehundered: [{ quantity: Number, amount: Number }],
    twohundered: [{ quantity: Number, amount: Number }],
    onehundered: [{ quantity: Number, amount: Number }],
    fifty: [{ quantity: Number, amount: Number }],
    twenty: [{ quantity: Number, amount: Number }],
    ten: [{ quantity: Number, amount: Number }],
    five: [{ quantity: Number, amount: Number }],
    coins:{type:Number},
    totalamount: { type: Number }
  },
  {
    timestamp: true,
  }
);

const UserBranch = mongoose.model("userslip", bankDataSchema);
export default UserBranch;
