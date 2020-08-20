import React from 'react';
import { Link } from 'react-router-dom';
import Country from './Country';

const Countries = (props) => {
    return (
        <>
            {
                props.countries.map((country) => {
                    return (<Link key={country.alpha3Code} className="block m-auto" to={'/detail/' + country.alpha3Code}>
                        <Country country={country} />
                    </Link>)
                }
                )
            }
        </>
    );
}

export default Countries;