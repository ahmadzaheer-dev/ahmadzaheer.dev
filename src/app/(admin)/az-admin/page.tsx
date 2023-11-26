import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "@/ui/MaxWidthWrapper";

export default async function Admin() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/az-login");

  return (
    <div>
      <MaxWidthWrapper>
        <div className="text-4xl font-bold">Admin Page</div>
      </MaxWidthWrapper>
    </div>
  );
}
