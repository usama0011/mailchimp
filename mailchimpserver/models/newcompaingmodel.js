import mongoose from "mongoose";

const { Schema } = mongoose;

const campaignSchema = new Schema(
  {
    compaingname: {
      type: String,
    },
    comapingemail: {
      type: String,
    },
    subject: {
      type: String,
    },
    previewtext: {
      type: String,
    },
    sendtime: {
      type: String,
    },
    chooseemailtemplate: {
      type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("NewCampaign", campaignSchema);

// addmore  here