import mongoose from "mongoose";
const { Schema } = mongoose;

const ourTeamSchema = new Schema({
   name: {
       type: String,
       required: [true, 'Name is required']
   },
    surname: {
        type: String,
        required: [true,'Surname is required'],
    },
    job: {
        type: String,
        required: [true,'Job is required']
    },
    email: {
      type: String,
      required: [true,'Email is required'],
      unique: true
    },
    facebook: {
       type: String,
    },
    twitter: {
       type: String
    },
    linkedIn: {
       type: String
    }
});

const OurTeam = mongoose.model("OurTeam",ourTeamSchema);

export default  OurTeam