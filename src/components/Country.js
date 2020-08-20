import React from 'react';

const Country = (props) => {
    return (<div>
        <div className="h-full max-w-xs overflow-hidden rounded shadow-sm bg-primary">
            <div className="h-48">
                <img className="object-fill w-full h-full " src={props.country.flag} alt={(props.country) + "flag"} />
            </div>
            <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{props.country.name}</div>
                <ul>
                    <li><span className="font-bold">Population: </span> {props.country.population}</li>
                    <li><span className="font-bold">Region: </span> {props.country.region}</li>
                    <li><span className="font-bold">Capital: </span> {props.country.capital}</li>

                </ul>
            </div>
        </div>
    </div >);
}

export default Country;