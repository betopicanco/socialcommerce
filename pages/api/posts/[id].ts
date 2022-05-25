import { NextApiRequest, NextApiResponse } from 'next';
import data from './data';
import PostInterface from '../../../components/Post/interface';

function handler(req: NextApiRequest, res: NextApiResponse) {
  const feed = data;
  const id = +req.query.id;

  try {
    const post = feed.find((p) => p.id === id)

    res.status(200).json(post);
  } catch(err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}

export default handler;