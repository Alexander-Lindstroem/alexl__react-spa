
import { useState } from 'react'
import styles from './contentpage.module.css'
import MobileNavigationBar from '../MobileNavigationBar'
import Content from '../Content'
import DesktopNavigationBar from '../DesktopNavigationBar'

const ContentPage = ({category, setPageFunction}) => {
    const [currentSubCategory, setCurrentSubCategory] = useState(null)
    if (currentSubCategory === null) {
        setCurrentSubCategory(category.subCategories[0])
    }

    return (
        <div className={styles.contentPage}>
            <MobileNavigationBar 
                displayedSubCategories={category.name}
                navigationPageFunction={setPageFunction} 
                navigationSubCategoryFunction={setCurrentSubCategory}
                currentContent={currentSubCategory}
            />
            <DesktopNavigationBar 
                displayedSubCategories={category.name}
                navigationPageFunction={setPageFunction} 
                navigationSubCategoryFunction={setCurrentSubCategory}
                currentContent={currentSubCategory}
            />
            <Content 
                type={category.name} 
                currentContent={currentSubCategory} 
                changeContentFunction={setCurrentSubCategory}
            />
        </div>
    )
}

export default ContentPage