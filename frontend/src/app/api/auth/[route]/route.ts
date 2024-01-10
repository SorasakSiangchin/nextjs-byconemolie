// export const dynamic = 'auto'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'

import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// POST
export async function POST(
  request: NextRequest,
  context: {
    params: {
      route: string;
    };
  }
): Promise<any> { // Promise เปรียบเหมือน Task ใน C#
  const route = context.params.route;
  const body = await request.json();
  if (route === "signin") {
    return NextResponse.json({
      result : "ok" ,
      message : "login successfully" ,
      body
    })
  }
}


