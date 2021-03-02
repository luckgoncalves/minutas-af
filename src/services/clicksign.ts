import api from './api'
let access_token = 'b8ecb05c-2526-4b46-87a1-0909a95a82d2';

export const clicksign = {
  createDoc: async function ({body}) {
    let key_template = 'ae234677-5cdd-497e-8c8d-d63c9899a54c';

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
      // .then(res => console.log(res))
      // .catch()
    } catch (error) {
      // console.log(error)
    }
  }
}