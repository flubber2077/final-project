import { useSelector } from "react-redux";

export default function MusicianInfo({musician}) {
    if (musician != undefined) {
        return (
            <div className="musicianinfo">
                <span><h4>Name: {musician.name}</h4><p>Instrument: {musician.music_instrument}</p></span>
                <span><p>Instrument: {musician.music_instrument}</p></span>
                <span><p>Rate: {musician.rate}</p></span>
            </div>
        )
    }
}