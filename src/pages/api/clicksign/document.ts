import { Request, Response } from 'express';
import { clicksign } from '../../../services/clicksign';

export default async (request: Request, response: Response ) => {

  const { template } = request.body
  const document = await clicksign.findDocument(template)
                       
  return response.status(document.status).json({...document.data})
}