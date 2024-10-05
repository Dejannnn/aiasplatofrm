import { currentUser } from "@clerk/nextjs/server";
import { getConnection } from "@/lib/db";
import { Badge } from "@/components/ui/badge";
import UploadForm from "@/components/upload/upload-form"

export default async function Page() {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress ?? "";
  const sql = await getConnection();
  const response = await sql`SELECT * FROM users WHERE status = 'active' and email = ${email}`;

  console.log(">>>response>>>", JSON.stringify(response));
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <Badge className="bg-gradient-to-r from-purple-700 to-pink-800 text-white px-4 py-1 text-lg capitalize">Basic Plan</Badge>
      <h2 className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Start creating amazing content</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">Uploading new amazing content</p>
      <UploadForm />
    </div>
  )
}