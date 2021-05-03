import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Films () {
    const [films, setFilms] = useState([]);

    useEffect(() =>{
        axios.get("https://swapi.dev/api/films/")
        .then( response => {
            console.log(response.data.results);
            setFilms(response.data.results);
        })
    },[])

    return(
        <>
        <h2>Films</h2>
        <ul>
            {films.map((film, index) =>(
                <li key={index}>
                    <Link to={`/films/${index+1}`} >{film.title}</Link>
                </li>
            ))}
        </ul>
        </>
    )

}



export default Films;