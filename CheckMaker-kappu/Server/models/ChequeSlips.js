import mongoose, { Schema, ObjectId } from "mongoose";

const checkDataSchema = new mongoose.Schema(
  {
    firmname:{type:String},
   
    bank: { type: String },
    branch: { type: String },
    accountno: { type: Number },
    partyname:{type:String},
    chequeno:{type:mongoose.Schema.Types.Mixed},
    amount:{type:Number},
    chequedate:{type:Date},
    partybankname:{type:String},
    partybranchname:{type:String},
    docno:{type:Number},
    firmid:{type:mongoose.Schema.Types.ObjectId, ref:"firmData"},
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "userData" },
    partyid:{type:mongoose.Schema.Types.ObjectId,ref:"paryData"}
  },
  {
    timestamp: true,
  }
);

const Chequeslips = mongoose.model("chequeslips", checkDataSchema);
export default Chequeslips;
