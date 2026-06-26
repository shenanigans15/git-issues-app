import axios from 'axios'

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repositories/10270250',
  headers: {
    //Todo: Api key de Github
  },
})
