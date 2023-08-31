import React from 'react'
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import styles from './header.module.css'
import { useFavorites } from '../../favorites/hooks/useFavorites';

const Header = () => {
    const {favorites} = useFavorites()

  return (
    <header className={styles.header}>
        <BsFillBookmarkHeartFill />
        <span>{favorites.length}</span>
    </header>
  )
}

export default Header