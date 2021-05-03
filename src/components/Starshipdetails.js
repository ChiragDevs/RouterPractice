import React, { useState,useEffect } from 'react';
import axios from 'axios';

function StarshipDetails ( {match}) {
    const [ship, setShip] = useState({});

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/starships/${match.params.id}`)
        .then( response => {
            console.log(response.data);
            setShip(response.data);
        })
    },[match])

    return(
        <>
            <h1>{ship.name}</h1>
            <label>Model: {ship.model}</label><br/>
            <label>Class: {ship.starship_class}</label><br/>
            <label>Manufacturer: {ship.manufacturer}</label><br/>
            <label>Passengers: {ship.passengers}</label><br/>
            <label>Speed: {ship.max_atmosphering_speed}</label><br/>
            <label>Length: {ship.length}</label><br/>
            <label>Rating: {ship.hyperdrive_rating}</label><br/>
            <label>Crew: {ship.crew}</label><br/>
            <label>Cost: {ship.cost_in_credits}</label><br/>
            <label>Capacity: {ship.cargo_capacity}</label><br/>
            <label>Food Availibilty: {ship.consumables}</label><br/>
        </>
    )

}



export default StarshipDetails;

/*

<label>Rotation Period: {planet.rotation_period}</label><br/>
            <label>Orbital Period: {planet.orbital_period}</label><br/>
            <label>Diameter: {planet.diameter}</label><br/>
            <label>Climate: {planet.climate}</label><br/>
            <label>Population: {planet.population}</label><br/>
            <label>Gravity: {planet.gravity}</label><br/>
            <label>Terrain: {planet.terrain}</label><br/>


*/