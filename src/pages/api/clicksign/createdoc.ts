import { Request, Response } from 'express';
import { clicksign } from '../../../services/clicksign';

export default async (request: Request, response: Response ) => {
  const body = {
    "document":{
      "path": "/modelohje.docx",
      "template":{
        "data": {
          "nome": "Lucas GOnçalvesss Leite"
        }
      }
    }
  }

  const createdDoc = await clicksign.createDoc({body})
  console.log(createdDoc)
  return response.status(createdDoc.status).json({...createdDoc.data})
}
