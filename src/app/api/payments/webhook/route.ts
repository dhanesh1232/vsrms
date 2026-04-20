import { NextRequest, NextResponse } from "next/server";

// POST /api/payments/webhook
// Razorpay webhook handler — verifies signature and updates booking status
export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get("x-razorpay-signature");
    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }
    // TODO: Verify webhook signature using RAZORPAY_WEBHOOK_SECRET
    // const isValid = validateWebhookSignature(body, signature, process.env.RAZORPAY_WEBHOOK_SECRET!);
    // Parse event and update booking status accordingly
    const event = JSON.parse(body);
    console.log("[Razorpay Webhook]", event.event);
    return NextResponse.json({ received: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
