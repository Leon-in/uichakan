import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  
  if (!session || (session.user as any).role !== "admin") {
    redirect("/admin/login")
  }

  return <div className="min-h-screen bg-gray-100">{children}</div>
}

