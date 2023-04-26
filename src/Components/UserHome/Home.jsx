import React from 'react'
import Search from './SearchPage/Search'
import AudioPlayer from './AudioPlayer/AudioPlayer'
import AudioTracks from './AudioTracksList/AudioTracks'

export default function Home() {
  return (
    <div>
        <AudioPlayer />
        <AudioTracks />
        <Search />
    </div>
  )
}
