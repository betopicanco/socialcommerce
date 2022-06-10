import { NextApiRequest, NextApiResponse } from "next";
import data from "../../posts/data";

type handlerFn = (req: NextApiRequest, res: NextApiResponse) => void;

const handler: handlerFn = (req, res) => {
  const id = Number(req.query.id);
  const shop = data.filter((p) => {
    if(p.profile.id === id && p.isProduct) return p;
  });

  res.status(200).json(shop);
}

export default handler;