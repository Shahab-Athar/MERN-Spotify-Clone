const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        client_id: '87e36d3660eb418aac721be68f4de517',
        clientSecret: '4cb11132da65414581e05f8117586510'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expires_in: data.body.expires_in
        }).catch(() => {
            res.sendStatus(400)
        })
    })
})