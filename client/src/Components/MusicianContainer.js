import React from "react";
import { useSelector } from "react-redux";
import MusicianInfo from "./MusicianInfo";

export default function MusicianContainer(){

    let arrOfMusicians = [];

    const songID = useSelector((state) => state.currentID.value)
    const song = useSelector((state) => state.song.value);
    console.log(songID)

    if (song !== undefined) {
        const musicians = song[songID-1].musicians
        arrOfMusicians = musicians.map(musician => < MusicianInfo key={musician.id} musician={musician} />);
    }
    return (
        <div>
            {arrOfMusicians}
        </div>
    )
}