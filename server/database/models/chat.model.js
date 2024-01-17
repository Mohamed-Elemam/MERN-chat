import { Schema, Types, model } from "mongoose";

const chatSchema = new Schema({
  sender: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiver: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  messages: [
    {
      from: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
      },
      to: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
      },
      message: { type: String, required: true },
    },
  ],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export const ChatModel = model("Chat", chatSchema);
