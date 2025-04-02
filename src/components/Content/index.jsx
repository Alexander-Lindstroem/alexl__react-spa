import CharacterProfile from '../CharacterProfile'
import DictionaryEntry from '../DictionaryEntry'
import styles from './content.module.css'

const Content = ({type, currentContent, changeContentFunction}) => {
    console.log(currentContent)

    return (
        <div className={styles.content}>
            {type === "character profiles" && <CharacterProfile characterName={currentContent}/>}
            {type === "dictionary" && <DictionaryEntry dictionaryName={currentContent}/>}
        </div>
    )
}

export default Content