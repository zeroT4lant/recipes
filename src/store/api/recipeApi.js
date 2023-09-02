import { api } from "./api";

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        createRecipe: builder.mutation({//мутация на добавление рецепта
            query: (recipe) => ({
                body: recipe,
                url: '/',
                method: 'POST'
            }),
            invalidatesTags: () => [{
                type : 'Recipe',
            }]
        })
    })
})

export const {useCreateRecipeMutation} = recipeApi//
