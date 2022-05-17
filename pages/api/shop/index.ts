import { NextApiRequest, NextApiResponse } from 'next'
import PostInterface from '../../../components/Post/interface';
import data from '../posts/data'

const filterProducts = (
  data: PostInterface[]
): PostInterface[] => {
  const products = data.filter((p) => {
    if(p.isProduct) return p;
  });

  return products;
}

function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  try {
    const products = filterProducts(data);

    res.status(200).json(products)
  } catch(err) {
    res.status(500).json({error: 'failed to load data'});
  }
}

export default handler;