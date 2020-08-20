import React, { useState } from 'react';

const SearchFilter = (props) => {
    const [searchValue, setSearchValue] = useState(props.searchString);
    const debouncedHandler = () => {
        let debounced;
        return (e) => {
            const searchString = e.target.value;
            setSearchValue(searchString);
            clearTimeout(debounced);
            debounced = setTimeout(() => {
                props.handleInputSearch.apply(this, [searchString])
            }, 250)
        }
    }
    return (
        <div className="relative flex items-center p-2 rounded-lg bg-primary">
            <div className="absolute left-0 pl-4 text-gray-500">
                <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                </svg>
            </div>
            <input aria-label="Type country name for search" value={searchValue} onChange={debouncedHandler()} className="w-full max-w-xs ml-8 outline-none text-primary-text bg-primary" type="text" placeholder="Search for a country..." />
        </div>
    );
}

export default SearchFilter;