import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams, useRouteMatch } from 'react-router';

function FilmDetails ( ) {
    const [film, setFilm] = useState({});

    const { path, url } = useRouteMatch();
    console.log('url', url);
    console.log('path', path);

    const { id } = useParams();
    console.log('filmid', id)

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/films/${id}`)
        .then( response => {
            console.log(response.data);
            setFilm(response.data);
        })
    },[])

    return(
        <>
        <h2>{film.title}</h2>
        <label>Director: {film.director}</label><br/>
        <label>Producer: {film.producer}</label><br/>
        <label>Created: {film.created}</label><br/>
        <label>Episode Number: {film.episode_id}</label><br/>
        <label>Release Date: {film.release_date}</label><br/>
        <p>{film.opening_crawl}</p>
        </>
    )

}



export default FilmDetails;

/*
{match}

${match.params.id}
match
*/