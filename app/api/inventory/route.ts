import { NextResponse } from "next/server";
import { getAppleInventory } from "@/lib/apple";

export async function GET() {
  const stores = await getAppleInventory();

  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    stores,
  });
}