import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Starships () {
    const [ships, setShips] = useState([]);

    useEffect(() =>{
        axios.get("https://swapi.dev/api/starships/")
        .then( response => {
            console.log(response.data.results);
            setShips(response.data.results);
        })
    },[])

    return(
        <>
        <h2>Star Ships</h2>
        <ul>
            {ships.map((ship, index) =>(
                <li key={index}>
                    <Link to={`/starships/${index+1}`} >{ship.name}</Link>
                </li>
            ))}
        </ul>
        </>
    )

}



export default Starships;