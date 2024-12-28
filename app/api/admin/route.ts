import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"
import { NextResponse } from "next/server"

export async function GET() {
  const session = await getServerSession(authOptions)
  
  if (!session || (session.user as any).role !== "admin") {
    return new NextResponse(
      JSON.stringify({ error: "Unauthorized" }),
      { status: 401 }
    )
  }

  // Example admin data
  const data = {
    users: [
      { id: 1, name: "张三", status: "active" },
      { id: 2, name: "李四", status: "inactive" },
    ],
    stats: {
      totalUsers: 245,
      activeUsers: 180,
      totalSessions: 1250
    }
  }

  return NextResponse.json(data)
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  
  if (!session || (session.user as any).role !== "admin") {
    return new NextResponse(
      JSON.stringify({ error: "Unauthorized" }),
      { status: 401 }
    )
  }

  const data = await req.json()
  
  // Handle different admin operations
  switch (data.action) {
    case "updateUser":
      // Update user logic here
      break
    case "deleteUser":
      // Delete user logic here
      break
    default:
      return new NextResponse(
        JSON.stringify({ error: "Invalid action" }),
        { status: 400 }
      )
  }

  return NextResponse.json({ success: true })
}

