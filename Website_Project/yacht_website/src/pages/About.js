import React from "react";
import '../App.css'
import SimpleMap from "../components/GoogleMapComponent";

// const x = fetch(`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)

function About() {
    return(
        <div className='about'>
            <h1>Kontakt</h1>
            <p>Jesteśmy zawsze do państwa dyspozycji. Numery telefonów, adresy i<br />
                godziny otwarcia naszych placówek znajdziecie państwo poniżej.
            </p>
            <ul className="about-list">
                <li>
                    ul. Starowiślana 3-2
                </li>
                <li>
                    80-555 Gdańsk
                </li>
                <li>
                    Telefon +48123456789
                </li>
                <li>
                    Email: ClickNSail@clicknsail.com
                </li>
            </ul>
            <SimpleMap />
        </div>
    );
}

export default About