import React from 'react';
import { useSelector } from "react-redux";

export default function SongCard({song}) {
        let s = song.duration;
        let time = (s-(s%=60))/60+(9<s?':':':0')+s
        return (
            <div className="songcard">
                <img src={song.coverart} />
                <h1>Title: {song.name}</h1>
                <p>Length: {time}</p>
                <p>Number of Musicians: {song.musicians.length}</p>
            </div>
        )
}