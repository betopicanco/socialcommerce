import { NextApiRequest, NextApiResponse } from "next";
import data from './data';

function throwProfileNotFound(): never {
  throw `Perfil não encontrado`;
}

function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  try {
    const id = Number(req.query.id);
    if(isNaN(id)) throwProfileNotFound();
    
    const profiles = data;
    const profile = profiles.find(prof => prof.id === id);
    if(!profile) throwProfileNotFound();

    res.status(200).json(profile);
  } catch(err) {
    res.status(500).json({error: err});
  }
};

export default handler;