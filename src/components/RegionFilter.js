import React, { useState } from 'react';

const RegionFilter = (props) => {
    const [isOpen, toggle] = useState(false);
    const [slectedRegion, changeSelectedRegion] = useState(props.regionFilter);
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar', 'All']
    const selectRegion = (region) => {
        changeSelectedRegion(region);
        props.handleRegionFilter(region);
    }
    return (
        <div className="w-32">
            <div className="relative min-w-full mt-4 text-sm">
                <button className="flex items-center min-w-full px-4 py-2 rounded-lg shadow-sm bg-primary" onClick={() => toggle(!isOpen)}>{(slectedRegion === null ? 'Filter by Region' : slectedRegion)}
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="ml-auto text-primary-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                </button>
                <div className={"min-w-full absolute " + (isOpen ? 'block' : 'hidden')}>
                    <ul className="px-4 py-2 mt-2 rounded-lg shadow-lg bg-primary">
                        {regions.map(region => (<li key={region} className="cursor-pointer" onClick={() => { selectRegion(region); toggle(!isOpen) }}>{region}</li>))}
                    </ul>
                </div>
            </div >
        </div>
    );
}

export default RegionFilter;