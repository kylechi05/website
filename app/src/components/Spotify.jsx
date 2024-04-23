import React, { useEffect, useState } from 'react'

let access_token

function Spotify() {

    const [listeningStatus, setListeningStatus] = useState('')
    const [songData, setSongData] = useState({ song: '', artists: '' })

    useEffect(() => {
        refreshToken()

        const tokenInterval = setInterval(refreshToken, 2700000)
        const songInterval = setInterval(currentSong, 1000)
    
        return () => {
            clearInterval(tokenInterval)
            clearInterval(songInterval)
        }
    }, [])

    const refreshToken = async () => {
        const result = await fetch('http://localhost:3000/api/get-access-token')
        const newToken = await result.json()
        const newAccessToken = newToken.access_token
        access_token = newAccessToken
    }

    const currentSong = async () => {
        const result = await fetch(`http://localhost:3000/api/currently-playing/${access_token}`)
        const currSongData = await result.json()
        let item
        if (currSongData[0] === "currently-playing") {
            item = currSongData[1].item
            setListeningStatus('currently-playing')
        } else {
            item = currSongData[1].items[0].track
            setListeningStatus('recently-played')
        }

        const songName = item.name
        const songArtists = item.artists.map(artist => artist.name)

        if (songName != songData.name) {
            setSongData({
                song: songName,
                artists: songArtists.join(', ')
            })
        }
    }

    return (
        <div
            className='flex flex-row rounded-full'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.45)'}}
        >
            <div className='w-[45px] md:w-[60px] m-[22.5px] md:m-[30px]'>
                <img src='Spotify_Icon_RGB_Black.png' alt='spotify black icon' />
            </div>
            <div className='flex flex-col justify-center'>
                {listeningStatus == 'currently-playing'
                    ? <div className='font-bold'>Currently Listening To:</div>
                    : <div className='font-bold'>Recently Listened To: </div>
                }
                <div>{songData.song}</div>
                <div className='opacity-75'>{songData.artists}</div>
            </div>
        </div>
    )
}

export default Spotify