import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IRecipe } from '../../types/recipe.types'

const API_URL = 'http://localhost:4300/recipes'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({//базовый запрос выше
        baseUrl : API_URL
    }),
    endpoints: builder => ({//получение рецептов, первый эдпоинт на GET
        getRecipes: builder.query<IRecipe[],string>({
            query: (queryTerm) => `/?_sort=id&_order=desc&q=${queryTerm}`,
            providesTags: (_result, _error, queryTerm) => [{
                type : 'Recipe',
                id: queryTerm
            }]
        })
    })
})

export const {useGetRecipesQuery} = api//хук useGetRecipesQuery для вытаскивания isLoading и data - отсюда берём данные и парсим их