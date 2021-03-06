
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = ( { defaultCategory = []}) => {


    const [categories, setCategories] = useState( defaultCategory );

    return (
    <>
        <h2>Gift Expert App</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />



        <ol>
            { 
                categories.map( (category ) => (
                   <GifGrid 
                        key={ category }
                        category={ category } 
                   />
                ))
            }
        </ol>

            
    </>
  )
}
