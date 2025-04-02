import styles from './characterprofile.module.css'
import { characterProfileEN } from '../../utils/data'
import { getImageURL } from '../../utils/functions'

const CharacterProfile = ({characterName}) => {
    const character = characterProfileEN[characterName]

    console.log(characterProfileEN)

    return (
        <div className={styles.characterProfileContainer}>
            <div className={styles.characterProfile}>
                <div className={styles.information}>
                    <div className={styles.attributeAndSpriteContainer}>
                        <div className={styles.attributeContainer}>
                            <div className={styles.name}>{character.name}</div>
                            <div className={styles.attributes}>
                                <div className={styles.attribute}><span className={styles.attributeTitle}>Gender</span>{character.gender}</div>
                                <div className={styles.attribute}><span className={styles.attributeTitle}>Age</span>{character.age}</div>
                                <div className={styles.attribute}><span className={styles.attributeTitle}>Blood Type</span>{character.bloodType}</div>
                                <div className={styles.attribute}><span className={styles.attributeTitle}>Height</span>{character.height}</div>
                                <div className={styles.attribute}><span className={styles.attributeTitle}>Weight</span>{character.weight}</div>
                                <div className={styles.attribute}><span className={styles.attributeTitle}>Birthday</span>{character.birthday}</div>
                                <div className={styles.attribute}><span className={styles.attributeTitle}>Alignment</span>{character.alignment}</div>
                                <div className={styles.attribute}><span className={styles.attributeTitle}>Likes</span>{character.likes}</div>
                                <div className={styles.attribute}><span className={styles.attributeTitle}>Dislikes</span>{character.dislikes}</div>
                                <div className={styles.attribute}><span className={styles.attributeTitle}>Weaknesses</span>{character.weaknesses}</div>
                            </div>
                        </div>
                        <div className={styles.spriteMobile}>
                            <img className={styles.spriteIMG} src={getImageURL(character.spritePathName)}/>
                        </div>
                    </div>
                    <div className={styles.voiceActor}>Voice Actor: {character.voiceActor}</div>
                    {character.description && 
                    <div className={styles.description}>
                        <div className={styles.descriptionTitle}><span className={styles.specialE}>E</span>xplanation</div>
                        <div className={styles.descriptionText}>{character.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
                    </div>}
                    {character.introImage && 
                    <div className={styles.description}>
                        <img src={getImageURL(character.introImage)}/>
                    </div>}
                    <div className={styles.staffComment}>
                        <div className={styles.staffCommentTitle}>COMMENT from STAFF</div>
                        <div className={styles.staffCommentText}>{character.staffComment}</div>
                    </div>
                </div>
                <div className={styles.spriteDesktop}>
                    <img className={styles.spriteIMG} src={getImageURL(character.spritePathName)}/>
                </div>
            </div>
            <div className={styles.images}></div>
        </div>
    )
}

export default CharacterProfile