import { useSelector } from "react-redux";

export default function MusicianInfo({musician}) {
    if (musician != undefined) {
        return (
            <div className="musicianinfo">
                <p>Name: {musician.name}</p>
            </div>
        )
    }
}