import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { FC } from "react";

import ApiDashboard from "@/components/ApiDashboard";
import RequestApiKey from "@/components/RequestApiKey";
import LargeHeading from "@/components/ui/LargeHeading";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Text Analysis API | Dashboard",
  description: "Free and open-source text analysis API",
};

const page = async ({}) => {
  const user = await getServerSession(authOptions);
  if (!user) return <p>no user ❌</p>;
  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id },
  });
  return (
    <div className="max-w-7xl mx-auto mt-16">
      {apiKey ? <ApiDashboard /> : <RequestApiKey />}
    </div>
  );
};

export default page;
