import React from 'react';
import { useSelector } from "react-redux";

export default function SongCard({song}) {
    console.log(song);
        return (
            <div className="songcard">
                <img src={song.coverart} />
                <h1>Title: {song.name}</h1>
                <p>Lenght: {song.duration}</p>
                <p>number of musicians?</p>
                <p>date recorded</p>
            </div>
        )
}