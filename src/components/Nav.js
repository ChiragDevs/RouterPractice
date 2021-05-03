import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


function Nav () {

    return(
        <nav>
            <ul>
                <Link to='/films'><li >Films</li></Link>
                <Link to='/people' ><li >Peoples</li></Link>
                <Link to='/planets' ><li >Planets</li></Link>
                <Link to='/species' ><li >Species</li></Link>
                <Link to='/starships' ><li >Starships</li></Link>
                <Link to='/vehicles' ><li >Vehicles</li></Link>
            </ul>
        </nav>
    );

}

export default Nav;