import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: String,

    media: [
      {
        type: String,
      },
    ],

    seen: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
