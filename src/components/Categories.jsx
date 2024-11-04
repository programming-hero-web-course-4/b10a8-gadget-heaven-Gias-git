import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div className='flex lg:flex-col'>
            {
                categories.map(category =>

                    <NavLink to={`/category/${category.categoryName}`} className={'flex bg-white  btn rounded-xl lg:w-full mt-2'} key={category.categoryId}> {category.categoryName} </NavLink>
                )
            }
        </div>
    );
};

export default Categories;