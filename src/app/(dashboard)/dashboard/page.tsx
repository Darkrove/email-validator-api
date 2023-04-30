import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { FC } from "react";

import ApiDashboard from "@/components/ApiDashboard";
import RequestApiKey from "@/components/RequestApiKey";
import LargeHeading from "@/components/ui/LargeHeading";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Email Validator API | Dashboard",
  description: "Free and open-source email validator API",
};

const page = async ({}) => {
  const user = await getServerSession(authOptions);
  if (!user) return <p>no user ❌</p>;
  const apiKey = await prisma.apiKey.findFirst({
    where: { userId: user.user.id },
  });
  return (
    <div className="max-w-7xl mx-auto mt-16">
      {apiKey ? <ApiDashboard /> : <RequestApiKey />}
    </div>
  );
};

export default page;
