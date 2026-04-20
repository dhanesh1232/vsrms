import mongoose, { Schema, model, models } from "mongoose";

export enum UserRole {
  ADMIN = "admin",
  CARE_TRACKER = "care_tracker",
  VEHICLE_PARTNER = "vehicle_partner",
  PATIENT = "patient",
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false }, // Optional for PATIENT login via OTP
    phone: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: Object.values(UserRole),
      required: true,
    },
    isActive: { type: Boolean, default: true },
    metadata: { type: Schema.Types.Map, of: String },
  },
  { timestamps: true },
);

const User = models.User || model("User", UserSchema);

export default User;
