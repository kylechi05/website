import React, { useEffect, useState } from 'react'

let access_token

function Spotify() {

    const [listeningStatus, setListeningStatus] = useState('')
    const [data, setData] = useState({ name: '', artists: '' })

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
        if (currSongData[0] === "currently-playing") { // checks if data is currently playing
            item = currSongData[1].item
            setListeningStatus('currently-playing')
        } else {
            item = currSongData[1].items[0].track
            setListeningStatus('recently-played')
        }

        const name = item.name // name of the track/episode
        const artists = item.type == 'track'
            ? item.artists.map(artist => artist.name).join(', ') // name of artists
            : item.show.name // name of podcast

        if (name != data.name) { // checks if the song/episode name is different from current name
            setData({
                name: name,
                artists: artists
            })
        }
    }

    return (
        <div
            className='flex flex-row rounded-full items-center'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.45)'}}
        >
            <img
                src='Spotify_Icon_RGB_Black.png'
                alt='spotify black icon'
                className='w-[45px] h-[45px] md:w-[60px] md:h-[60px] m-[22.5px] md:m-[30px]'
            />
            <div className='flex flex-col justify-center py-[10px] mr-[22.5px] md:mr-[30px]'>
                {listeningStatus == 'currently-playing'
                    ? <div className='font-bold'>Currently Listening To:</div>
                    : <div className='font-bold'>Recently Listened To: </div>
                }
                <div>{data.name}</div>
                <div className='opacity-75'>{data.artists}</div>
            </div>
        </div>
    )
}

export default Spotify