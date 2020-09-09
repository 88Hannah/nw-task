import React, {useContext} from 'react';
import {Context} from '../Context';

function Filters() {

const {allWines} = useContext(Context);

const findUnique = property => {
    const allValues = allWines.map(wine => wine[property].toLowerCase());
    const uniqueValues = allValues.filter((value, index) => allValues.indexOf(value) === index);
    return uniqueValues;
}

const uniqueTypes = findUnique("type")
const uniqueCountires = findUnique("country")


const propertyOptions = options => (options.map((value, id) => {
    const words = value.split(" ");
    console.log(words);
    const capitalised = [];
    words.forEach(word => (capitalised.push(word[0].toUpperCase() + word.substr(1))));
    const displayValue = capitalised.join(" ");
    return (
        <option key={id} value={value}>{displayValue}</option>
    );
}));

const typeOptions = propertyOptions(uniqueTypes);
const countryOptions = propertyOptions(uniqueCountires);

    return (
        <div className="container">
            <select name="type">
                <option>Filter by type</option>
                {typeOptions}
            </select>

            <select name="country">
                <option>Filter by country</option>
                {countryOptions}
            </select>

            <select name="price">
            <option>Filter by price</option>
                <option>Under £6</option>
                <option>£6 to £10</option>
                <option>£10 to £15</option>
                <option>£15 and over</option>
            </select>
        </div>
    )
};

export default Filters;