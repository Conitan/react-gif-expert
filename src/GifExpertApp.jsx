import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {

        if (categories.includes(newCategory)) return;

        // Agregar a un Array
        //
        // setCategories( add => [...add, 'Valorant']);
        // setCategories([...categories, 'Valorant']);
        // setCategories([ 'Valorant',...categories ]);
        setCategories([ newCategory,...categories ]);

        //
        // setCategories( add => [...add, `${1 + 1}`]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ value => onAddCategory(value) }
            />

            {/* Boton que ejecuta un metodo: */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}

            { 
                categories.map( (category) => (
                    // <li key={ category }>{category}</li>
                    <GifGrid 
                        key={ category } 
                        category={category} 
                    />
                )) 
            }
        </>
    )
}

