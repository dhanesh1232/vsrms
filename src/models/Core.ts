import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['SUPER_ADMIN', 'CARE_ADMIN', 'TRANSPORT_ADMIN', 'FINANCE_ADMIN', 'CONTENT_ADMIN', 'CARE_TRACKER', 'PATIENT', 'BOOKER'],
    default: 'BOOKER'
  },
  phone: String,
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export const User = models.User || model('User', UserSchema);

const EnquirySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  condition: String,
  careMode: { type: String, enum: ['CENTRE', 'FIELD', 'HOME'], default: 'HOME' },
  status: { type: String, enum: ['PENDING', 'CONTACTED', 'ADMITTED', 'REJECTED'], default: 'PENDING' },
  notes: String,
}, { timestamps: true });

export const Enquiry = models.Enquiry || model('Enquiry', EnquirySchema);

const BookingSchema = new Schema({
  booker: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  pickupLocation: { type: String, required: true },
  dropLocation: { type: String, required: true },
  pickupDate: { type: Date, required: true },
  pickupTime: String,
  tripType: { type: String, enum: ['ONE_WAY', 'ROUND_TRIP'], default: 'ONE_WAY' },
  status: { type: String, enum: ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'], default: 'PENDING' },
  totalAmount: Number,
  paymentStatus: { type: String, enum: ['PENDING', 'PAID', 'REFUNDED'], default: 'PENDING' },
  razorpayOrderId: String,
  razorpayPaymentId: String,
}, { timestamps: true });

export const Booking = models.Booking || model('Booking', BookingSchema);
