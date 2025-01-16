// import { NextApiRequest, NextApiResponse } from "next";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "GET") {
//     try {
//       const properties = await prisma.properties.findMany({
//         where: { status: "available" },
//       });
//       res.status(200).json(properties);
//     } catch (error) {
//       console.error("Error fetching properties:", error);
//       res.status(500).json({ message: "Error fetching properties", error });
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
