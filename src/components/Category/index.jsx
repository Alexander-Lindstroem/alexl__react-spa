import styles from './category.module.css'

const Category = ({name, clickFunction, className, disabled}) => {
    const handleClick = () => {
        clickFunction(name)
    }
    
    return (
        disabled === false
        ? <p className={`${className} ${styles.notDisabled}`} onClick={handleClick}>{name}</p>
        : <p className={`${className} ${styles.disabled}`}>{name}</p>
    )
}

export default Category