import { NextApiRequest, NextApiResponse } from "next";
import { getDocument } from "@insurahub/lib/query";
import { defaultHandler, defaultResponder, getUserFromToken } from "@insurahub/lib/server";
import prisma from "@insurahub/prisma";
import { addDigitalSignature } from "@insurahub/signing/addDigitalSignature";
import { Document as PrismaDocument } from "@prisma/client";

// todo remove before launch

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const documentId = req.query.id || 1;
  const document: PrismaDocument = await getDocument(+documentId, req, res);
  const signedDocument = await addDigitalSignature(document.document);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Length", signedDocument.length);
  res.setHeader("Content-Disposition", `attachment; filename=${document.title}`);

  return res.status(200).send(signedDocument);
}

export default defaultHandler({
  GET: Promise.resolve({ default: defaultResponder(getHandler) }),
});
