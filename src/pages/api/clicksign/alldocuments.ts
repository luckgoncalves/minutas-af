import { Request, Response } from 'express';
import { clicksign } from '../../../services/clicksign';

export default async (request: Request, response: Response ) => {

  const allDocuments = await clicksign.allDocuments('')
                                      .then(response => response.data.documents)
  return response.json(allDocuments)
}