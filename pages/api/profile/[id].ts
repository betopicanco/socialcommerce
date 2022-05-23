import { NextApiRequest, NextApiResponse } from "next";
import data from "./data";
import ProfileInterface from "./interface";

const filterProfile = (
  profileList: ProfileInterface[], 
  id: number
): ProfileInterface => {
  const [ profile ] = profileList.filter((prof) => {
    return prof.id === id;
  });

  return profile;
}

function handler(req: NextApiRequest, res: NextApiResponse) {
  const profileList = data;
  const id = +req.query.id;
  const profile = filterProfile(profileList, id);

  try {
    res.status(200).json(profile)
  } catch(err) {
    res.status(500).json({err: 'failed to load data'});
  }
}

export default handler;