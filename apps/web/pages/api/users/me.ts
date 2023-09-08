import type { NextApiRequest, NextApiResponse } from "next";
import { defaultHandler, defaultResponder, getUserFromToken } from "@insurahub/lib/server";
import prisma from "@insurahub/prisma";

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const user = await getUserFromToken(req, res);

  if (!user) return;

  return prisma.user.findFirstOrThrow({
    where: {
      id: user.id,
    },
    select: {
      email: true,
      name: true,
    },
  });
}

export default defaultHandler({
  GET: Promise.resolve({ default: defaultResponder(getHandler) }),
});
