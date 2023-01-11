import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function createTask(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, type } = req.body;
  const result = await prisma.task.create({
    data: {
      name: name,
      type: type,
    },
  });

  res.json(result);
}
