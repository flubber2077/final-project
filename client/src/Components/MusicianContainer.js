import React from "react";
import { useSelector } from "react-redux";
import MusicianInfo from "./MusicianInfo";

export default function MusicianContainer() {

    const songID = useSelector((state) => state.currentID.value)
    const song = useSelector((state) => state.song.value);

    var musiciansTable = document.getElementById('mtable');
    var musicianTableBody = document.createElement("tbody");

    if (song !== undefined && songID !== undefined) {

        var tableBody = document.querySelector("tbody");
        
        console.log(tableBody)
        if (tableBody !== null) {
            tableBody.remove(); 
        }

        var musicians = song[songID].musicians;
        for (var i = 0; i < musicians.length; i++) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var name = document.createTextNode(musicians[i].name);
            var instrument = document.createTextNode(musicians[i].music_instrument);
            var rate = document.createTextNode(musicians[i].rate);
            td1.appendChild(name);
            td2.appendChild(instrument);
            td3.appendChild(rate);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            musicianTableBody.appendChild(tr);
            musiciansTable.appendChild(musicianTableBody);
        }
    }

    return (
        <>
            <h2>Credits</h2>
            <div id='tableContainer'>
                <table id="mtable" className="table">
                    <thead>
                    <tr>
                        <th>Musician</th>
                        <th>Instrument</th>
                        <th>Rate</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}