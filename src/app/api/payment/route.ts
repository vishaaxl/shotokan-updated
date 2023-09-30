import { encodeRequest, signRequest } from "@/utils/payment";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

type Data = {
  data: any;
};

const url = "https://api.phonepe.com/apis/hermes";

export async function GET() {
  const payload = {
    merchantId: "WMSKFINDIAONLINE",
    merchantTransactionId: uuidv4(),
    merchantUserId: "MUID123",
    amount: 10000,
    redirectUrl: "http://localhost:3000/success",
    redirectMode: "POST",
    callbackUrl: "https://localhost:3000/error",
    mobileNumber: "8318218163",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const base64 = encodeRequest(payload);

  const sign = base64 + "/pg/v1/pay" + process.env.PHONEPE_SALT_KEY;
  const X_VERIFY = signRequest(sign) + "###" + 1;

  const jsonResponse = await fetch(url + "/pg/v1/pay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-VERIFY": X_VERIFY,
    },
    body: JSON.stringify({ request: base64 }),
  }).then((response) => {
    return response.json();
  });

  if (jsonResponse.success) {
    return NextResponse.json(
      { data: jsonResponse },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      { data: jsonResponse.code },
      {
        status: 403,
        statusText: "Cannot process the request at the moment",
      }
    );
  }
}
