import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "Running", "Goal Attained", "Cancelled"],
        default: "Pending",
      },
    likes:[{type:ObjectId, ref:"User"}],
    comments:[{
        text:String,
        postedBy:{type:ObjectId, ref:"User"}
    }],
    donors:[{
        text:String,
        postedBy:{type:ObjectId, ref:"User"}
    }],
    goal:{
        type:String,
        required:true
    },
    totalFund:{
        type:String,
        default: "0",
        required:true
    },
    ownedBy:{
       type:ObjectId,
       ref:"User"
    }
},{timestamps:true})

module.exports = model("Blog", blogSchema)