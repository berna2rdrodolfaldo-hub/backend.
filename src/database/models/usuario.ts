import { Schema, model } from "mongoose";

export const ROLES = [
  "ADMIN",
  "EMPLEADO",
  "CLIENTE"
] as const;

const UsuarioSchema = new Schema(
  {
    nombres: {
      type: String,
      required: true
    },

    ap_paterno: {
      type: String,
      required: true
    },

    ap_materno: {
      type: String,
      required: true
    },

    ci: {
      type: String,
      required: true,
      unique: true
    },

    estado: {
      type: String,
      default: "ACTIVO"
    },

    password: {
      type: String,
      required: true,
      select: false
    },

    rol: {
      type: String,
      enum: ROLES,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default model("Usuario", UsuarioSchema);