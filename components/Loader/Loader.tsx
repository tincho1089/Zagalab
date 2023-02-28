import React, { FC } from 'react'
import styles from './Loader.module.scss'

const Loader: FC = () => (
  <div className={styles.loaderContainer}>
    <div className={styles.pokeballLoader}>
      <div className={styles.pokeballTop} />
      <div className={styles.pokeballBottom} />
      <div className={styles.pokeballCenter} />
    </div>
  </div>
)

export default Loader
