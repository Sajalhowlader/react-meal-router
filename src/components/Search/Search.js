import React, { useEffect, useState } from 'react';


const Search = () => {
    const [searchText, SetSearchText] = useState('')
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const searchFood = e => {
        SetSearchText(e.target.value)
    }
    console.log(meals)
    return (
        <div className='border my-8 w-2/5 mx-auto h-10 flex justify-between rounded-md overflow-hidden'>
            <input className='bg-indigo-400 w-full h-full outline-none pl-4 text-white' type="text" placeholder='Search Your Meal ' /> <button className='bg-fuchsia-700 px-6 text-white font-bold' onChange={searchFood}>Search</button> <br />

        </div>
    );
};

export default Search;