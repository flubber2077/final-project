import SongCard from "./SongCard.js"
import React from 'react';
import { useSelector } from "react-redux";

export default function HighlightContainer() {
    let arrOfSongs = [];

    const songs = useSelector((state) => state.song.value);
    console.log(songs);
    if (songs !== undefined) {
        arrOfSongs = songs.map(song => <SongCard key = {song.id} song={song}/>)
    }

    return (
        <div className="songscontainer">
        {arrOfSongs}
        </div>
    )
}