import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Planets () {
    const [planets, setPlanets] = useState([]);

    useEffect(() =>{
        axios.get("https://swapi.dev/api/planets/")
        .then( response => {
            console.log(response.data.results);
            setPlanets(response.data.results);
        })
    },[])

    return(
        <>
        <h2>Planets</h2>
        <ul>
            {planets.map((planet, index) =>(
                <li key={index}>
                    <Link to={`/planets/${index+1}`} >{planet.name}</Link>
                </li>
            ))}
        </ul>
        </>
    )

}



export default Planets;