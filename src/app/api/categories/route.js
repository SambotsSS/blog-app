import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    // Return categories with status 200
    return NextResponse.json(categories, { status: 200 });
  } catch (err) {
    console.error("Error fetching categories:", err);

    // Return error message with status 500
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
