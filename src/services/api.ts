import axios from 'axios'

import md5 from 'md5'

const PublicKey = '5d2400d537422981f63710dacf1ed397';
const PrivateKey = 'e960979bcbf3f9e41ca2371b25f0c734ff43ff27';
const time = Number(new Date());
const hash = md5(time + PrivateKey + PublicKey)

const api = axios.create({
  baseURL: `http://gateway.marvel.com/v1/public/`,
  params: {
  "apikey": PublicKey,
  "ts": time,
  "hash": hash
  }
})

export default api