import React, {useContext, useState, useEffect} from 'react';
import {Context} from '../Context';

function Filters() {

const {allWines, filterWines} = useContext(Context);

const [typeFilter, setTypeFilter] = useState("default");
const [countryFilter, setCountryFilter] = useState("default");
const [priceFilter, setPriceFilter] = useState("default");

const priceBoundaries = [0, 6, 10, 15];

var priceOptions = [<option key={0} value={0}>Under £{priceBoundaries[1]}</option>]
for(var i=1; i < priceBoundaries.length - 1; i++) {
    priceOptions.push(<option key={i} value={i}>£{priceBoundaries[i]} to £{priceBoundaries[i+1]}</option>)
}
const last = priceBoundaries.length - 1;
priceOptions.push(<option key={last} value={last}>£{priceBoundaries[last]} and over</option>)


const findUnique = property => {
    const allValues = allWines.map(wine => wine[property].toLowerCase());
    const uniqueValues = allValues.filter((value, index) => allValues.indexOf(value) === index);
    return uniqueValues;
}

const uniqueTypes = findUnique("type")
const uniqueCountires = findUnique("country")


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

useEffect(() => {
    const minimum = priceFilter === "default" ? 0 : priceBoundaries[parseInt(priceFilter)];
    const maximum = priceFilter === "default" ? null : priceBoundaries[parseInt(priceFilter) + 1]
    filterWines(typeFilter, countryFilter, minimum, maximum);
}, [typeFilter, countryFilter, priceFilter])

    return (
        <section className="filter-section container">
            <h3 className="filter__heading">Filter options</h3>
            
            <div className="filter__filters">
                <select className="filter__dropdown" value={typeFilter} onChange={event => handleChange(event, setTypeFilter)}>
                    <option value="default">Type</option>
                    {typeOptions}
                </select>

                <select className="filter__dropdown" value={countryFilter} onChange={event => handleChange(event, setCountryFilter)}>
                    <option value="default">Country</option>
                    {countryOptions}
                </select>

                <select className="filter__dropdown" value={priceFilter} onChange={event => handleChange(event, setPriceFilter)}>
                <option value="default">Price</option>
                    {priceOptions}
                </select>
            </div>

            <button className="filter__reset" onClick={handleClick}>Reset Filters</button>
        </section>
    )
};

export default Filters;