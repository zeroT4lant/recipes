import React, { FormEvent, useState } from 'react'
import { useCreateRecipeMutation } from '../../store/api/recipeApi';
import { IRecipeData } from '../../types/recipe.types';

const defaultValue:IRecipeData = {
    name: '',
    image: '',
}

export default function CreateRecipe(){
    const [recipe,setRecipe] = useState(defaultValue)

    const [createRecept] = useCreateRecipeMutation()//для изменения рецепта первый аргумент в квадр скобках

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createRecept(recipe).then(() => {
            setRecipe(defaultValue)
        })
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
            <p>Create new recipe:</p>
            <label>
                <input
                type='text'
                value={recipe.name}
                placeholder='Name'
                onChange={(el) => (setRecipe({...recipe, name: el.target.value}))}
                />
            </label>
            <label>
                <input
                type='text'
                value={recipe.image}
                placeholder='Image'
                onChange={(el) => (setRecipe({...recipe, image: el.target.value}))}
                />
            </label>
            <button type='submit'>
                Create
            </button>
            </form>
        </div>
    )
}