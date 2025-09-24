import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const client = await clientPromise;
    if (!client) {
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }

    const db = client.db("kmaris");

    const categories = await db
      .collection("categories")
      .find({})
      .sort({ categoryName: 1 })
      .toArray();

    // Map MongoDB documents to Category interface
    const safeCategories = categories.map((category) => ({
      _id: category._id.toString(),
      categoryName: category.categoryName || "",
    }));

    return NextResponse.json(safeCategories, { status: 200 });
  } catch (error) {
    console.error("API /api/categories GET error:", error);
    return NextResponse.json(
      {
        error: "Error fetching categories",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}