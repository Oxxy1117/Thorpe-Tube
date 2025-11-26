// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   return NextResponse.json({ ok: true });
// }
// src/app/api/users/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  return NextResponse.json({ status: "ok" });
}
