import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Species () {
    const [species, setSpecies] = useState([]);

    useEffect(() =>{
        axios.get("https://swapi.dev/api/species/")
        .then( response => {
            console.log(response.data.results);
            setSpecies(response.data.results);
        })
    },[])

    return(
        <>
        <h2>Species</h2>
        <ul>
            {species.map((specy, index) =>(
                <li key={index}>
                    <Link to={`/species/${index+1}`} >{specy.name}</Link>
                </li>
            ))}
        </ul>
        </>
    )

}



export default Species;