import { Request, Response } from 'express';
import { clicksign } from '../../../services/clicksign';

export default async (request: Request, response: Response ) => {

  const { template } = request.body
  console.log(request)
  const document = await clicksign.findDocument('3d52c705-1eb6-4317-9502-c48c197f21c2')
                       
  return response.status(document.status).json({...document.data})
}