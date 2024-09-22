import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';

const DoctorList: React.FC = () => {

    const handleSearch = () => {

    }

    const handleFilter = () => {

    }
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <Filters onFilter={handleFilter} />
            <div></div>
        </div>
    );

}

export default DoctorList;