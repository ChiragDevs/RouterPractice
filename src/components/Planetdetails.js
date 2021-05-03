import React, { useState,useEffect } from 'react';
import axios from 'axios';

function PlanetDetails ( {match}) {
    const [planet, setPlanet] = useState({});

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/planets/${match.params.id}`)
        .then( response => {
            console.log(response.data);
            setPlanet(response.data);
        })
    },[match])

    return(
        <>
            <h1>{planet.name}</h1>
            <label>Rotation Period: {planet.rotation_period}</label><br/>
            <label>Orbital Period: {planet.orbital_period}</label><br/>
            <label>Diameter: {planet.diameter}</label><br/>
            <label>Climate: {planet.climate}</label><br/>
            <label>Population: {planet.population}</label><br/>
            <label>Gravity: {planet.gravity}</label><br/>
            <label>Terrain: {planet.terrain}</label><br/>

       
        </>
    )

}



export default PlanetDetails;

/*

 <label>Gender: {people.gender}</label><br/>
        <label>Height: {people.height}</label><br/>
        <label>Weight: {people.mass}</label><br/>
        <label>Skin Color: {people.skin_color}</label><br/>
        <label>Hair Color: {people.hair_color}</label><br/>
        <label>Eye Color: {people.eye_color}</label><br/>


*/