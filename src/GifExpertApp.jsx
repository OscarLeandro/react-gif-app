import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {
    //console.log(newCategory)

    const lowerCategory = newCategory.toLowerCase();
    if (categories.includes(lowerCategory)) return;

    //return setCategories([newCategory, ...categories])
    return setCategories([newCategory])

  }

  console.log(categories);

  return (
    <>
    {/* titulo */}
    <h1>GifExpertApp V1</h1>

    {/* Input */}
    {/* <AddCategory setCategories={setCategories} /> */}
    <AddCategory
    /* Opcion 1 */
    // setCategories={setCategories} 
    /* Opcion 2 */
      onNewCategory = { onAddCategory }
    />

    {/* Listado de Items */}
    {/* <button onClick={ onAddCategory }>Agregar</button> */}

    
    { categories.map(category => (
        <GifGrid 
          key={category} 
          category= { category } 
        />
      )) 
    }
      

    
    
      {/* Gif Item */}
    
    </>
  )
}
