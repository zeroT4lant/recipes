import { useSelector } from "react-redux";

export const useFavorites = () => {
    const {favorites} = useSelector((state) => state);//вытаскиваем данные из стейта

    return {favorites}//возвращаем
}

//или

// export const useFavorites = () => useSelector((state) => state);
//вытаскиваем потом отсюда {favorites}