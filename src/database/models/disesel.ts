import { Schema, model } from "mongoose";

const DieselSchema = new Schema(
  {
    cantidad: {
      type: Number,
      required: true
    },

    num_atendidos: {
      type: Number,
      default: 0
    },

    estado: {
      type: String,
      default: "DISPONIBLE"
    },

    gasolineraId: {
      type: Schema.Types.ObjectId,
      ref: "Gasolinera",
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default model("Diesel", DieselSchema);