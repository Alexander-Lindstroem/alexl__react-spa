import styles from './dictionaryentry.module.css'
import { dictionaryEntriesEN } from '../../utils/data'

const DictionaryEntry = ({dictionaryName}) => {
    const entry = dictionaryEntriesEN[dictionaryName]

    return (
        <div className={styles.dictionaryEntry}>
            <div className={styles.title}>{entry.title}</div>
            <div className={styles.text}>
                {entry.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
        </div>
    )
}

export default DictionaryEntry