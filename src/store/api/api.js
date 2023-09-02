import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const API_URL = 'http://localhost:4300/recipes'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({//базовый запрос выше
        baseUrl : API_URL
    }),
    endpoints: builder => ({//получение рецептов, первый эдпоинт на GET
        getRecipes: builder.query({
            query: () => '/?_sort=id&_order=desc',
            providesTags: () => [{
                type : 'Recipe'
            }]
        })
    })
})

export const {useGetRecipesQuery} = api//хук useGetRecipesQuery для вытаскивания isLoading и data - отсюда берём данные и парсим их