import { NextApiRequest, NextApiResponse } from "next";
import data from "./data";
import ProfileInterface from "./interface";

function handler(req: NextApiRequest, res: NextApiResponse) {
  const profileList = data;
  const id = +req.query.id;
  const profile = profileList.find((prof: ProfileInterface) => prof.id === id);

  try {
    res.status(200).json(profile)
  } catch(err) {
    res.status(500).json({err: 'failed to load data'});
  }
}

export default handler;