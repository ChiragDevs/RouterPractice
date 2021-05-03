import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Vehicles () {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() =>{
        axios.get("https://swapi.dev/api/vehicles/")
        .then( response => {
            console.log(response.data.results);
            setVehicles(response.data.results);
        })
    },[])

    return(
        <>
        <h2>Vehicles</h2>
        <ul>
            {vehicles.map((vehicle, index) =>(
                <li key={index}>
                    <Link to={`/vehicles/${index+1}`} >{vehicle.name}</Link>
                </li>
            ))}
        </ul>
        </>
    )

}



export default Vehicles;