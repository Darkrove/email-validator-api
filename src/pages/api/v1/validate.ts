import { NextApiRequest, NextApiResponse } from "next";
import { withMethods } from "@/lib/api-middleware/with-methods";
import db from "@/lib/prisma";
import { z } from "zod";
import { validateEmail } from "@/helpers/valid-email";

const reqSchema = z.object({
  email: z.string().max(255),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body as unknown;
  const apiKey = req.headers.authorization;
  if (!apiKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { email } = reqSchema.parse(body);
    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    });
    if (!validApiKey) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const start = new Date();
    const result = validateEmail(email);
    const duration = new Date().getTime() - start.getTime();

    await db.apiRequest.create({
      data: {
        duration,
        method: req.method as string,
        path: req.url as string,
        status: 200,
        apiKeyId: validApiKey.id,
        usedApiKey: validApiKey.key,
      },
    });

    return res.status(200).json({ success: true, email, result });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues });
    }
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export default withMethods(["POST"], handler);
