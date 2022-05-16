import { NextApiRequest, NextApiResponse } from 'next';
import data from './data';
import PostInterface from '../../../components/Post/interface';

const filterPost = (feed: PostInterface[], id: number): PostInterface => {
  const [ post ] = feed.filter((p) => { 
    if(p.id === id) return p;
  });

  return post;
}

function handler(req: NextApiRequest, res: NextApiResponse) {
  const feed = data;
  const id = +req.query.id;

  try {
    const post = filterPost(feed, id);

    res.status(200).json(post);
  } catch(err) {
    res.status(500).json({ error: 'failed to load data' });
  }
}

export default handler;