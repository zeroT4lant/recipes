import { useSelector } from "react-redux";

export const useFavorites = () => {
    const {favorites} =useSelector((state) => state);

    return {favorites}
}

//или

//export const useFavorites = () => useSelector((state) => state);