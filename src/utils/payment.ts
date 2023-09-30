import crypto from "crypto";

export function encodeRequest(payload: any) {
  return Buffer.from(JSON.stringify(payload)).toString("base64");
}

export function signRequest(payload: any) {
  return crypto.createHash("sha256").update(payload).digest("hex");
}
