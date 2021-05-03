import React, { useState,useEffect } from 'react';
import axios from 'axios';

function PeopleDetails ( {match}) {
    const [people, setPeople] = useState({});

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/people/${match.params.id}`)
        .then( response => {
            console.log(response.data);
            setPeople(response.data);
        })
    },[match])

    return(
        <>
        <h1>{people.name}</h1>
        <label>Gender: {people.gender}</label><br/>
        <label>Height: {people.height}</label><br/>
        <label>Weight: {people.mass}</label><br/>
        <label>Skin Color: {people.skin_color}</label><br/>
        <label>Hair Color: {people.hair_color}</label><br/>
        <label>Eye Color: {people.eye_color}</label><br/>
        </>
    )

}



export default PeopleDetails;

/*

<h2>{film.title}</h2>
        <label>Director: {film.director}</label><br/>
        <label>Producer: {film.producer}</label><br/>
        <label>Created: {film.created}</label><br/>
        <label>Episode Number: {film.episode_id}</label><br/>
        <label>Release Date: {film.release_date}</label><br/>
        <p>{film.opening_crawl}</p>

*/