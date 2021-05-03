import React, { useState,useEffect } from 'react';
import axios from 'axios';

function SpecyDetails ( {match}) {
    const [specy, setSpecy] = useState({});

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/species/${match.params.id}`)
        .then( response => {
            console.log(response.data);
            setSpecy(response.data);
        })
    },[match])

    return(
        <>
            <h1>{specy.name}</h1>
            <label>Designation: {specy.designation}</label><br/>
            <label>Classification: {specy.classification}</label><br/>
            <label>Average Height: {specy.average_height}</label><br/>
            <label>Average Lifespan: {specy.average_lifespan}</label><br/>
            <label>Skin color: {specy.skin_color}</label><br/>
            <label>Hair color: {specy.hair_color}</label><br/>
            <label>Eye color: {specy.eye_color}</label><br/>
        </>
    )

}



export default SpecyDetails;

/*

 <label>Rotation Period: {planet.rotation_period}</label><br/>
            <label>Orbital Period: {planet.orbital_period}</label><br/>
            <label>Diameter: {planet.diameter}</label><br/>
            <label>Climate: {planet.climate}</label><br/>
            <label>Population: {planet.population}</label><br/>
            <label>Gravity: {planet.gravity}</label><br/>
            <label>Terrain: {planet.terrain}</label><br/>


*/