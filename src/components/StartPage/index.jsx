import styles from './startpage.module.css'

const StartPage = ({setPageFunction}) => {
    const handleClick = () => {
        setPageFunction("home")
    }

    return (
        <div className={styles.startPage}>
            <button className={styles.enterButton} onClick={handleClick}>Enter</button>
        </div>
    )
}

export default StartPage