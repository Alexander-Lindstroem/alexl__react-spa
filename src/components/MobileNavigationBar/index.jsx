import { useEffect, useState } from 'react'
import styles from './mobilenavigationbar.module.css'
import { pageCategories } from '../../utils/data'
import Category from '../Category'
import { ArrowUUpLeft, List } from '@phosphor-icons/react'

const MobileNavigationBar = ({displayedSubCategories, currentContent, navigationPageFunction, navigationSubCategoryFunction}) => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => navigationPageFunction("home")
    const toggleMenu = () => setShowMenu(!showMenu)

    useEffect( () => {
        setShowMenu(false)
    },[currentContent])

    return (
        <div className={styles.navigationBar}>
            <div className={styles.topBar}>
                <div className={styles.hamburger} onClick={toggleMenu}><List size={22} color='white'/></div>
                <div className={styles.title}>{currentContent}</div>
                <div className={styles.home} onClick={handleClick}><ArrowUUpLeft size={22} color='white'/></div>
            </div>
            {showMenu &&
            <div className={styles.list}>
            {pageCategories.map((category, index) => (
                <div key={index}>
                    <Category 
                        name={category.name}
                        className={styles.mainMenuItem}
                        disabled={category.name === "character profiles" || category.name === "dictionary" ? false : true}
                        clickFunction={navigationPageFunction}
                    />
                    {category.name === displayedSubCategories
                    ? category.subCategories.map((subCategory, index) => (
                        <Category 
                            key={index}
                            name={subCategory}
                            className={styles.subMenuItem}
                            disabled={false}
                            clickFunction={navigationSubCategoryFunction}
                        />
                    ))
                    : ''}
                </div>
            ))}
            </div>}
        </div>
    )
}

export default MobileNavigationBar