import mongoose, { Schema } from "mongoose";

var bankSchema = new Schema({
  partybankname : String,
  partybranch : String,
 
 
})

const partyDataSchema = new mongoose.Schema(
  {
    partyname: {
      type: String,
      
    },
    email: {
      type: String,
    
    },

    customerbank :[bankSchema ],
  
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

    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userData",
      
    },
  },
  {
    timestamp: true,
  }
);

const partyData = mongoose.model("paryData", partyDataSchema);
export default partyData;
