import React, { useReducer } from 'react';
import { useSelector } from "react-redux";

export default function SongCard() {
    const song = useSelector((state) => state.song.value);
    return (
        <div className="songcard">
            <p>album art if i can fake it?</p>
            <h1>song title</h1>
            <p>time {song.duration}</p>
            <p>number of musicians?</p>
            <p>date recorded</p>
        </div>
    )
}