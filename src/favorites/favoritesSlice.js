import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorites: (state, action) => {
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


