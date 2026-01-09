import api from "@/src/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const pageNumber = searchParams.get("page[number]") ?? "1";
    const pageSize = searchParams.get("page[size]") ?? "10";
    const sort = searchParams.get("sort") ?? "-published_at";
    const response = await api.get("/ideas", {
      params: {
        "page[number]": pageNumber,
        "page[size]": pageSize,
        sort,
        "append[]": ["small_image", "medium_image"],
      },
    });
    return NextResponse.json(
      {
        success: true,
        data: response.data,
        message: "Ideas fetched successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
        response: error.response?.data,
      },
      { status: error.response?.status || 500 }
    );
  }
}
