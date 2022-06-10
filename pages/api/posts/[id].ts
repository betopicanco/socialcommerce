import { NextApiRequest, NextApiResponse } from 'next';
import data from './data';

type handlerFn = (req: NextApiRequest, res: NextApiResponse) => void;

const handler: handlerFn = (req, res) => {
  const feed = data;
  const id = Number(req.query.id);

  try {
    const post = feed.find((p) => p.id === id)

    res.status(200).json(post);
  } catch(err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}

export default handler;