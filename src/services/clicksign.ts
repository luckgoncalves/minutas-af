import api from './api'
let access_token = 'b8ecb05c-2526-4b46-87a1-0909a95a82d2';

export const clicksign = {
  createDoc: async function ({body}) {
    let key_template = '33b6aff0-0502-454e-9bbb-3610e66401e8';

    try {
      return  await api.post(`/templates/${key_template}/documents?access_token=${access_token}`, {
        ...body
      })
    } catch (error) {
      return (error.response.data)
    }
  },

  allDocuments: async function (payload) {
    try {
      return await api.get(`/documents?access_token=${access_token}`)
    } catch (error) {
      return error.response
    }
  },

  findDocument: async function (payload) {
    try {
      return await api.get(`/documents/${payload}?access_token=${access_token}`)
    } catch (error) {
      return error.response.data
    }
  },

  createSignatario: async function({body}) {
    try {
      return await api.post(`/signers?access_token=${access_token}`, {
        ...body
      })
    } catch (error) {
      return error.response.data
    }
  },

  adcSignersDocuments: async function ({body}) {
    try {
      return await api.post(`/lists?access_token=${access_token}`, {
        ...body
      })
    } catch (error) {
      return error.response.data
    }
  }
}