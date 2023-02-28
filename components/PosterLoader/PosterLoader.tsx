import React from 'react';
import styles from './PosterLoader.module.scss';

interface PosterLoaderProps {
  count: number
}

export default function PosterLoader(props: PosterLoaderProps) {
  const { count = 1 } = props

  return (
    <div className={styles.posterLoaderContainer}>
      <div className={styles.posterLoaderRow}>
        {Array.from(new Array(count)).map((item, index) => {
          return (
            <div key={index} className={styles.posterLoaderCol}>
              <div className={styles.posterLoaderImage}></div>
              <div className={styles.posterLoaderText}>
                <div className={styles.posterLoaderTitle}></div>
                <div className={styles.posterLoaderDescription}></div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
