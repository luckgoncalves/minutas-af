import { Request, Response } from 'express';
import { clicksign } from '../../../../services/clicksign';

export default async (request: Request, response: Response ) => {
  const { body } = request
  // console.log(body.document)
  
  const createSigners = await clicksign.createSignatario({body})
  return response.status(createSigners.status).json({...createSigners.data})
}
