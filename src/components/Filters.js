import React, {useContext, useState, useEffect} from 'react';
import {Context} from '../Context';
import * as priceFiltersData from '../priceFilers.json';

function Filters() {

const {allWines, filterWines} = useContext(Context);

const [typeFilter, setTypeFilter] = useState("default");
const [countryFilter, setCountryFilter] = useState("default");
const [priceFilter, setPriceFilter] = useState("default");

const priceBoundaries = priceFiltersData.priceFilters;


// Build up the price options using the price bounadries. The first and last are created seperately and the rest using the for loop.
var priceOptions = [<option key={0} value={0}>Under £{priceBoundaries[1]}</option>];
for(var i=1; i < priceBoundaries.length - 1; i++) {
    priceOptions.push(<option key={i} value={i}>£{priceBoundaries[i]} to £{priceBoundaries[i+1]}</option>);
};
const last = priceBoundaries.length - 1;
priceOptions.push(<option key={last} value={last}>£{priceBoundaries[last]} and over</option>);


// Reusable method to find all the unique options for the dropdowns
const findUnique = property => {
    const allValues = allWines.map(wine => wine[property].toLowerCase());
    const uniqueValues = allValues.filter((value, index) => allValues.indexOf(value) === index);
    return uniqueValues;
}


const uniqueTypes = findUnique("type");
const uniqueCountires = findUnique("country");


const propertyOptions = options => (options.map((value, id) => {
    const words = value.split(" ");
    const capitalised = [];
    words.forEach(word => (capitalised.push(word[0].toUpperCase() + word.substr(1))));
    const displayValue = capitalised.join(" ");
    return (
        <option key={id} value={value}>{displayValue}</option>
    );
}));


const typeOptions = propertyOptions(uniqueTypes);
const countryOptions = propertyOptions(uniqueCountires);


const handleChange = (event, setFilter) => {
    setFilter(event.target.value);
}


const handleClick = () => {
    setTypeFilter("default");
    setCountryFilter("default");
    setPriceFilter("default");
}

// Rerender when any of the filters change
useEffect(() => {
    const minimum = priceFilter === "default" ? 0 : priceBoundaries[parseInt(priceFilter)];
    const maximum = priceFilter === "default" ? null : priceBoundaries[parseInt(priceFilter) + 1];
    filterWines(typeFilter, countryFilter, minimum, maximum);
}, [typeFilter, countryFilter, priceFilter]);

    return (
        <section className="filter-section container">
            <p className="filter__heading">Filter options</p>
            
            <div className="filter__filters">
                <select className="filter__dropdown" value={typeFilter} onChange={event => handleChange(event, setTypeFilter)} aria-label="Wine type filter">
                    <option value="default">Type</option>
                    {typeOptions}
                </select>

                <select className="filter__dropdown" value={countryFilter} onChange={event => handleChange(event, setCountryFilter)} aria-label="Wine country filter">
                    <option value="default">Country</option>
                    {countryOptions}
                </select>

                <select className="filter__dropdown" value={priceFilter} onChange={event => handleChange(event, setPriceFilter)} aria-label="Wine price filter">
                <option value="default">Price</option>
                    {priceOptions}
                </select>
            </div>

            <button className="filter__reset btn-secondary" onClick={handleClick}>Reset Filters</button>
        </section>
    );
};

export default Filters;