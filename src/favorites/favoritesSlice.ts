import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IRecipe } from "../types/recipe.types"

const initialState : IRecipe[] = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, action : PayloadAction<IRecipe>) => {
            const isExist = state.some(r => r.id === action.payload.id)
            
            if(isExist){
                const index = state.findIndex(item => item.id !== action.payload.id)
                if (index !== -1) {
                    state.splice(index,1)
                }
            }
            else state.push(action.payload)
        },
    }
})

// функция например addToFavorites - передаём "1"
//addToFavorites(1), теперь '1' лежит в action.payload
//action.payload === 1

export const {actions, reducer} = favoritesSlice


