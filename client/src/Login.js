import React from 'react'

import { Container,  } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=87e36d3660eb418aac721be68f4de517&response_type=code&redirect_url=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return (
        <Container>
            <a href={AUTH_URL} className="btn btn-success btn-lg">Login With Spotify</a>
        </Container>
    )
}
