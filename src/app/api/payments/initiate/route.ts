import { NextRequest, NextResponse } from "next/server";

// POST /api/payments/initiate
// Creates a Razorpay order and returns order_id
export async function POST(req: NextRequest) {
  try {
    const { bookingId, amount } = await req.json();
    if (!bookingId || !amount) {
      return NextResponse.json({ error: "bookingId and amount are required" }, { status: 400 });
    }
    // TODO: Integrate Razorpay SDK
    // const razorpay = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
    // const order = await razorpay.orders.create({ amount: amount * 100, currency: "INR", receipt: bookingId });
    return NextResponse.json({ orderId: "order_scaffold_123", amount, currency: "INR" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Payment initiation failed" }, { status: 500 });
  }
}
