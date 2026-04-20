import mongoose, { Schema, model, models } from "mongoose";

export enum EnquiryStatus {
  PENDING = "pending",
  REVIEWING = "reviewing",
  CONTACTED = "contacted",
  CONVERTED = "converted",
  REJECTED = "rejected",
}

export enum EnquiryType {
  CARE = "care",
  TRANSPORT = "transport",
}

const EnquirySchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    type: {
      type: String,
      enum: Object.values(EnquiryType),
      required: true,
    },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(EnquiryStatus),
      default: EnquiryStatus.PENDING,
    },
    metadata: { type: Schema.Types.Map, of: String }, // For dynamic fields like 'preferred_date'
  },
  { timestamps: true },
);

const Enquiry = models.Enquiry || model("Enquiry", EnquirySchema);

export default Enquiry;
