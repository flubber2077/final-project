import React from 'react';
import { changeCurrentID } from "../features/currentID.js"
import { useDispatch } from 'react-redux';

export default function SongCard({ song }) {
    const dispatch = useDispatch();
    let s = song.duration;
    let time = (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s

    return (
        <div className="card">
            <img src={song.coverart} onClick={() => dispatch(changeCurrentID(song.id-1))} />
            <div>
                <h1>Title: {song.name}</h1>
                <p>Length: {time}</p>
                <p>Number of Musicians: {song.musicians.length}</p>
            </div>
        </div>
    )
}