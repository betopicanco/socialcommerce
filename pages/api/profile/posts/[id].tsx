import { NextApiRequest, NextApiResponse } from "next";
import data from '../../posts/data';

type handlerFn = (req: NextApiRequest, res: NextApiResponse) => void;

const handler: handlerFn = (req, res) => {
  try {
    const id = Number(req.query.id);
    const feed = data.filter((p) => {
      if(p.profile.id === id) return p;
    });

    res.status(200).json(feed);
  } catch(err) {
    res.status(500).json({error: err});
  }
}

export default handler;