import mongoose, { Schema } from "mongoose";

const firmDataSchema = new mongoose.Schema(
  {
    firmname: {
      type: String,
      
    },
    email: {
      type: String,
    
    },
    gstin: {
      type: Schema.Types.Mixed,
      
    },
    pancard: {
      type: Schema.Types.Mixed,
      
    },
    address: {
      type: Schema.Types.Mixed,
    },
    city: {
      type: String,
    
    },
    state: {
      type: String,
      
    },
    pincode: {
      type: Number,
      
    },
    phonenumber: {
      type: Number,
      
    },
    phonenumber2: {
      type: String,
    
    },

    bankLink: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userbranch",
      },
    ],

    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userData",
      
    },
  },
  {
    timestamp: true,
  }
);

const FirmData = mongoose.model("firmData", firmDataSchema);
export default FirmData;
