import styles from './homepage.module.css'
import { pageCategories } from '../../utils/data.js'
import Category from '../Category'
import Moon from '../Moon'

const HomePage = ({setPageFunction}) => {

    return (
        <div className={styles.home}>
            <Moon />
            <div className={styles.introduction}>This website is an attempt at digitalizing the content of the Tsukihime - Material of Blue Glass Moon artbook. I have yet to add all of its contents, but you may peruse the character profile and dictionary sections at your leisure.</div>
            <div className={styles.categoryGrid}>
            {pageCategories.map((category, index) => (
                <Category
                    key={index} 
                    name={category.name} 
                    className={styles.paragraph} 
                    clickFunction={setPageFunction} 
                    disabled={category.name === "character profiles" || category.name === "dictionary" ? false : true}
                />
            ))}
            </div>
        </div>
    )
}

export default HomePage