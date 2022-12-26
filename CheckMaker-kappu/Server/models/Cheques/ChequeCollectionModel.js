import mongoose, { Schema, ObjectId } from "mongoose";

const chequeCollectionSchema = new mongoose.Schema(
  {
    firmname:{type:String},
    partyname:{type:String},
    chequeno:{type:mongoose.Schema.Types.Mixed},
    amount:{type:Number},
    chequedate:{type:Date},
    partybankname:{type:String},
    partybranchname:{type:String},
    printed : {type:Boolean, default:false},
    firmid:{type:mongoose.Schema.Types.ObjectId, ref:"firmData"},
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "userData" },
    partyid:{type:mongoose.Schema.Types.ObjectId,ref:"paryData"}
  },
  {
    timestamp: true,
  }
);

const ChequeCollections = mongoose.model("chequecollection",chequeCollectionSchema );
export default ChequeCollections;
