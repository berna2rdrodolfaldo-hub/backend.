import { Schema, model } from "mongoose";

const PublicacionSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true
    },

    detalle: {
      type: String,
      required: true
    },

    multimedia: {
      type: String
    },

    fecha_apertura: {
      type: Date,
      required: true
    },

    fecha_conclusion: {
      type: Date
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

export default model(
  "Publicacion",
  PublicacionSchema
);