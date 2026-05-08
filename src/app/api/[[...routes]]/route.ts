import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function disabledApiResponse() {
  return NextResponse.json(
    {
      success: false,
      message:
        "The legacy portfolio API is currently disabled for this public deployment.",
    },
    { status: 503 }
  );
}

export async function GET() {
  return disabledApiResponse();
}

export async function POST() {
  return disabledApiResponse();
}

export async function PATCH() {
  return disabledApiResponse();
}

export async function DELETE() {
  return disabledApiResponse();
}
