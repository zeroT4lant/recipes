import { useTypedSelector } from "./useTypedSelector";

export const useFavorites = () => {
    const {favorites} = useTypedSelector((state) => state);//вытаскиваем данные из стейта
    //супер типизированный хук

    return {favorites}//возвращаем
}

//или

// export const useFavorites = () => useSelector((state) => state);
//вытаскиваем потом отсюда {favorites}