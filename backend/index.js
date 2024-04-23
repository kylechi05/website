const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

require('dotenv').config()
const refreshToken = process.env.REFRESH_TOKEN
const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

const encoded64 = new Buffer.from(clientID + ':' + clientSecret).toString('base64')

app.use(cors())

app.get('/api/currently-playing/:accessToken', async (req, res) => {
  const accessToken = req.params.accessToken
  const result = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
  })
  if (result.statusText == "OK") {
    const data = await result.json()
    res.send(['currently-playing' ,data])
  } else {
    const lastPlayedResult = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=1', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
    const data = await lastPlayedResult.json()
    res.send(['recently-played', data])
  }
})

app.get('/api/get-access-token', async (req, res) => {
  const url = "https://accounts.spotify.com/api/token"
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + encoded64
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  }
    const body = await fetch(url, payload)
    const response = await body.json()
    res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
