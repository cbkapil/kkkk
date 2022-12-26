
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'


const userDataSchema = new mongoose.Schema({
    username: {
        type: String,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        
    },

    mobile: {
        type: Number,
        
    },
    
    isAdmin: {
        type : Boolean,
        default : false,
    },

    firmid : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'firmData',
    }],

  

    slips:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'userslip'
    }],
    partyLink:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'paryData'
    }],
    chequeslips:[{type:mongoose.Schema.Types.ObjectId,
        ref:'chequeslips'

    }]
},
{
    timestamp: true
});

userDataSchema.pre('save', async function(next){
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        
        
    }
    next();
})

// // Verify The Password
// userDataSchema.methods.isPasswordMatch = async function (enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password)
// }

const UserData = mongoose.model("userData", userDataSchema);
export default UserData;