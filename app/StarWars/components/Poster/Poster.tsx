import { getCharactersData } from 'app/StarWars/services'
import { MainWrapper, CustomButton, CustomModal } from 'components'
import { Film, Character } from 'models'
import React from 'react'
import styles from './Poster.module.scss'

interface PosterInterface {
  film: Film
  key: number
}

const Poster: React.FC<PosterInterface> = ({ film }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const imgUrl = '/images/movies/episode'
  const posterSrc = `${imgUrl}${film.episodeID}.jpg`

  const { isLoading, data } = getCharactersData(film.id)

  return (
    <MainWrapper className={styles.PosterWrapper}>
      <div className={styles.halfWidth}>
        <img src={posterSrc} className={styles.posterImage} />
      </div>
      <div className={styles.infoSpace}>
        <label className={styles.infoItemSpaceTitle}>{`${film.title} #${film.episodeID}`}</label>
        <hr className={styles.hrSolid} />
        <label className={styles.infoItemSpace}>{`By: ${film.director}`}</label>
        <label className={styles.infoItemSpace}>{`Release: ${film.releaseDate}`}</label>
        <div className={styles.customButtonWrapper}>
          <CustomButton className={styles.customButtonInfo} onClick={() => setIsOpen(!isOpen)}>Info</CustomButton>
        </div>
      </div>
      <CustomModal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        {!isLoading ? (
          <div>
            <h2>Characters</h2>
            {data?.map((character: Character, i: number) => (
              <div key={i}>
                <label className={styles.infoItemSpaceTitle}>{character.name}</label>
              </div>
            ))}
          </div>
        ) : null}
      </CustomModal>
    </MainWrapper>
  )
}

export default Poster
