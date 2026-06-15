import { Schema, model } from "mongoose";

const GasolineraSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true
    },

    ubicacion: {
      type: String,
      required: true
    },

    celular: {
      type: String,
      required: true
    },

    disponible: {
      type: Boolean,
      default: true
    },

    usuarioId: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default model("Gasolinera", GasolineraSchema);