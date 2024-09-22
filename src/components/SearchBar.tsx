import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleChange = () => {

    }
    return (
        <input type="text" placeholder='Search by doctor name...'
            value={''}
            onChange={handleChange} />
    );
}

export default SearchBar;