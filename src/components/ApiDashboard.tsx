import { authOptions } from "@/lib/auth";
import db from "@/lib/prisma";
import { formatDistance } from "date-fns";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import ApiKeyOptions from "./ApiKeyOptions";
import { Input } from "@/ui/Input";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import Table from "@/ui/Table";
import CopyButton from "./CopyButton";

const ApiDashboard = async ({}) => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKeys = await db.apiKey.findMany({
    where: { userId: user.user.id },
  });

  const activeApiKey = apiKeys.find((key) => key.enabled);

  if (!activeApiKey) return notFound();

  const userRequests = await db.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key) => key.id),
      },
    },
  });

  const serializableRequests = userRequests.map((req) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timestamp), new Date()),
  }));

  return (
    <div className="container flex flex-col gap-6">
      <LargeHeading>Welcome back, {user.user.name}</LargeHeading>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
        <Paragraph className="text-center md:text-left mb-2 md:mb-0">
          Your API key:
        </Paragraph>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2 md:items-start">
          <div className="relative w-full md:w-auto">
            <Input
              className="w-full md:w-auto text-center md:text-left pr-12 py-2 rounded-md truncate"
              readOnly
              value="hdqmpGx-2DI_-Nul6wXO1hdqmpGx-2DI_-Nul6wXO1hdqmpGx-2DI_-Nul6wXO1"
            />

            <CopyButton
              className="absolute right-0 top-0 bottom-0 rounded-md transition duration-300"
              valueToCopy={activeApiKey.key}
            />
          </div>

          <ApiKeyOptions apiKeyKey={activeApiKey.key} />
        </div>
      </div>

      <Paragraph className="text-center md:text-left mt-4 -mb-4">
        Your API history:
      </Paragraph>

      <Table userRequests={serializableRequests} />
    </div>
  );
};

export default ApiDashboard;
