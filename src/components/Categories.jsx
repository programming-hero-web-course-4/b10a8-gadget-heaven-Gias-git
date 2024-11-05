import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div className='flex lg:flex-col gap-4'>
            {
                categories.map(category =>


                    <NavLink className={({ isActive }) =>
                        isActive ? 'bg-gray-700 text-white rounded-xl '
                            : 'bg-white'
                    } to={`/category/${category.categoryName}`} key={category.categoryId}> <button className={'  py-3  lg:w-full mt-2'}> {category.categoryName} </button> </NavLink>



                )
            }
        </div>
    );
};

export default Categories;