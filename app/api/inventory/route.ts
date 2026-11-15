import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    stores: [
      {
        store: "Southlake Town Square",
        silver: false,
        spaceGray: false,
      },
      {
        store: "NorthPark Center",
        silver: false,
        spaceGray: false,
      },
      {
        store: "Stonebriar Centre",
        silver: false,
        spaceGray: false,
      },
      {
        store: "Galleria Dallas",
        silver: false,
        spaceGray: false,
      },
      {
        store: "University Park Village",
        silver: false,
        spaceGray: false,
      },
    ],
  });
}