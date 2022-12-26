import mongoose, { Schema } from "mongoose";

var Docschema = new Schema({
    docids:{type:mongoose.Schema.Types.ObjectId, ref:"chequeslips"},

 
 
})

const DocDataSchema = new mongoose.Schema(
  {
    docno: {
      type: Number,
      
    },
   

    docid:[Docschema ],
  
    userid:{type:mongoose.Schema.Types.ObjectId, ref:"userData"}
  
  },
  {
    timestamp: true,
  }
);

const docData = mongoose.model("docData", DocDataSchema);
export default docData;
