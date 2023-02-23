import { Schema, model } from "mongoose";

const PinSchema = new Schema({
  uuid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  pinNumber: {
    type: String,
    required: true,
    unique: true,
  },
  mode: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
});

const PinModel = model("pins", PinSchema);

export default PinModel;
