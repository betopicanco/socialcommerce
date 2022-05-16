import { NextApiResponse } from "next";
import data from "./data";

export default function handler(req: NextApiResponse , res: NextApiResponse) {
  const feed = data;

  res.status(200).json(feed);
}