import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  // Get page parameter with default value of 1
  const page = parseInt(searchParams.get("page")) || 1;

  const POST_PER_PAGE = 2;

  try {
    const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
    });

    // Return posts with status 200
    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.error("Error fetching posts:", err);

    // Return error message with status 500
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
