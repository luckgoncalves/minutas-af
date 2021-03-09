import { Request, Response } from 'express';
import { clicksign } from '../../../../services/clicksign';

export default async (request: Request, response: Response ) => {
  const { body } = request
  // console.log(body.document)
  
  const signers = await clicksign.adcSignersDocuments({body})
  return response.status(signers.status).json({...signers.data})
}
