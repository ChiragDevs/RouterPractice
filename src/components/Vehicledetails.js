import React, { useState,useEffect } from 'react';
import axios from 'axios';

function VehicleDetails ( {match}) {
    const [vehicle, setVehicle] = useState({});

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/vehicles/${match.params.id}`)
        .then( response => {
            console.log(response.data);
            setVehicle(response.data);
        })
    },[match])

    return(
        <>
            <h1>{vehicle.name}</h1>
            <label>Model: {vehicle.model}</label><br/>
            <label>Class: {vehicle.vehicle_class}</label><br/>
            <label>Length: {vehicle.length}</label><br/>
            <label>Manufacturer: {vehicle.manufacturer}</label><br/>
            <label>Speed: {vehicle.max_atmosphering_speed}</label><br/>
            <label>Passengers: {vehicle.passengers}</label><br/>
            <label>Crew: {vehicle.crew}</label><br/>
            <label>Capacity: {vehicle.cargo_capacity}</label><br/>
            <label>Food Availability: {vehicle.consumables}</label><br/>
            <label>Cost: {vehicle.cost_in_credits}</label><br/>
       
        </>
    )

}



export default VehicleDetails;


/*

<label>Rotation Period: {planet.rotation_period}</label><br/>
            <label>Orbital Period: {planet.orbital_period}</label><br/>
            <label>Diameter: {planet.diameter}</label><br/>
            <label>Climate: {planet.climate}</label><br/>
            <label>Population: {planet.population}</label><br/>
            <label>Gravity: {planet.gravity}</label><br/>
            <label>Terrain: {planet.terrain}</label><br/>
          
*/            