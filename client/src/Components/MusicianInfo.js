import { useSelector } from "react-redux";

export default function MusicianInfo() {
    const song = useSelector((state) => state.song.value[0]);
    console.log(song)
    if (song != undefined) {
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
}