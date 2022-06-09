import { NextApiRequest, NextApiResponse } from "next";
import PostInterface from "../../../components/Post/interface";
import data from "../posts/data";

const product = (item: PostInterface) => item.isProduct;

const filterItems = (
  data: PostInterface[],
  itemsId: string | string[]
) => {
  const products = data.filter(product);
  const items = products.filter(({ id }) => itemsId.includes(id + ''));

  return items;
}

function handler(
  req: NextApiRequest, 
  res: NextApiResponse 
) {
  const { items: itemsId } = req.query;
  const items = filterItems(data, itemsId);

  res.status(200).json(items);
}

export default handler;