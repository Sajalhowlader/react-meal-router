import React, { useEffect, useState } from 'react';
import MealCategory from '../components/MealCategory/MealCategory';

const Home = () => {
    const [meals, showMeals] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => showMeals(data.categories))

    }, [])
    return (
        <div>
            {
                meals.map(meal => <MealCategory key={meal.idCategory} category={meal} />)
            }
        </div>
    );
};

export default Home;