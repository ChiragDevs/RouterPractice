import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function People () {
    const [peoples, setPeoples] = useState([]);

    useEffect(() =>{
        axios.get("https://swapi.dev/api/people/")
        .then( response => {
            console.log(response.data.results);
            setPeoples(response.data.results);
        })
    },[])

    return(
        <>
        <h2>Peoples</h2>
        <ul>
            {peoples.map((people, index) =>(
                <li key={index}>
                    <Link to={`/people/${index+1}`} >{people.name}</Link>
                </li>
            ))}
        </ul>
        </>
    )

}



export default People;