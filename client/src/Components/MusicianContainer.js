import React from "react";
import { useSelector } from "react-redux";
import MusicianInfo from "./MusicianInfo";

export default function MusicianContainer(){

    let arrOfMusicians = [];

    const song = useSelector((state) => state.song.value);

    if (song !== undefined) {
        const musicians = song[0].musicians
        arrOfMusicians = musicians.map(musician => < MusicianInfo key={musician.id} musician={musician} />);
    }
    return (
        <div className="MusicianList">
            {arrOfMusicians}
        </div>
    )
}