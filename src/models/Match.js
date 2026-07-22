import mongoose from "mongoose";

const MatchRequestSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  requests: [
    {
      _id: false,
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected", "cancelled"],
        default: "pending",
      },
      sentAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});
const Match = mongoose.model("Match", MatchRequestSchema);
export default Match;
