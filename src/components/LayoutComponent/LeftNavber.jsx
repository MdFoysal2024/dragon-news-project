import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const LeftNavber = () => {

    const [categories, setCategories] = useState([]);

    // ----json data from public folder---->

    // useEffect(() => {
    //     fetch("categories.json")
    //         .then((res) => res.json())
    //         .then((data) => setCategories(data))
    // }, [])
    // console.log(categories);


    // json data from api url  
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category))
    }, [])
    console.log(categories);




    return (
        <div className='pb-2'>
            <h3 className='font-semibold pb-6'>All Caterogy({categories.length})</h3>
            <div className='flex  flex-col gap-1 '>

                {
                    categories.map(category => <NavLink 
                        to={`/category/${category.category_id}`}
                        key={category.category_id}
                        className='btn text-gray-500'
                    >{category.category_name}</NavLink>)
                }
            </div>
        </div>
    )
}

export default LeftNavber
