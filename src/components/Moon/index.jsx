import moonImg from '../../assets/moon.png'
import styles from './moon.module.css'

const Moon = () => {
    return (
        <img className={styles.moon} src={moonImg} alt="moon" />
    )
}

export default Moon