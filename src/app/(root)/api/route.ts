import React from "react";
import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch("http://192.168.1.137:3000", { method: "GET" });
  console.log(res)
  const requestHeader = new Headers(request.headers);
  const headerList = headers();

  return Response.json({
    data: {
      userId: headerList.get("userId"),
      token: headerList.get("token"),
      platform: headerList.get("platform"),
      version: headerList.get("version"),
    },
  });
}
