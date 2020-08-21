import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const filterCoutry = (countries, alpha3Code) => {
    return countries.filter((country) => country.alpha3Code === alpha3Code)[0];
}

const CountryDetail = (props) => {
    let { countryCode } = useParams();
    const [country, setCountry] = useState();
    const [countries] = useState(props.countries);

    useEffect(() => {
        setCountry(filterCoutry(props.countries, countryCode))
    }, [countryCode, props.countries]);

    return (
        (country ?
            <div className="px-12 py-4">
                <div className="max-w-xs mt-4">
                    <Link to="/" className="inline-flex items-center p-2 shadow-sm bg-primary" >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z" />
                            <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <span className="ml-4">Back</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-8 md:gap-32 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                        <img alt="" className="object-fill w-full h-full" src={country.flag} />
                    </div>
                    <div className="md:px-12">
                        <h3 className="text-2xl font-bold">{country.name}</h3>
                        <div className="flex flex-col justify-between mt-4 md:flex-row">
                            <div className="mb-4 md:mb-0">
                                <p><span className="font-bold">Native name:</span> {country.nativeName}</p>
                                <p><span className="font-bold">Population:</span> {country.population}</p>
                                <p><span className="font-bold">Region:</span> {country.region}</p>
                                <p><span className="font-bold">Sub Region:</span> {country.subregion}</p>
                                <p><span className="font-bold">Capital:</span> {country.capital}</p>
                            </div>
                            <div>
                                <p><span className="font-bold">Top Level Domain:</span> {country.topLevelDomain}</p>
                                <p><span className="font-bold">Currencies:</span> {country.currencies.map(currency => currency.name).join(', ')}</p>
                                <p><span className="font-bold">Languages:</span> {country.languages.map(language => language.name).join(', ')}</p>
                            </div>
                        </div>
                        <div className="mt-32">
                            <span className="font-bold">Border Countries: </span>
                            {country.borders.map(border => (<Link key={border} to={('/detail/' + border)} className="inline-flex p-2 m-2 shadow-sm bg-primary" >
                                {filterCoutry(countries, border).name}
                            </Link>))}
                        </div>
                    </div>
                </div>
            </div > : <div></div>
        )
    );
}

export default CountryDetail;