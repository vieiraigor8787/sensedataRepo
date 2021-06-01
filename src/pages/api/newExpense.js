import axiosInstance from '../../services/axios'
const axios = axiosInstance('backend')

export default async function products(req, res) {
  const data = req.body
  const response = await axios
    .post('/expenses', data)
    .then(resp => resp.data)

  console.log({ response, data })
  return res.status(200).send(response)
}
