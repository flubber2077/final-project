import React from "react";
import { useSelector } from "react-redux";
import MusicianInfo from "./MusicianInfo";

export default function MusicianContainer() {

    let arrOfMusicians = [];

    const song = useSelector((state) => state.song.value);
    const musicians = song[0].musicians
    console.log(musicians)

    if (musicians !== undefined) {
        arrOfMusicians = musicians.map(musician => < MusicianInfo key={musician.id} musician={musician} />);
    }
    return (
        <div>
            {arrOfMusicians}
        </div>
    )
}