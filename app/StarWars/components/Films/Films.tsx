import { gql } from '@apollo/client'
import client from 'app/StarWars/utilities/apolloClient'
import { Loader, PosterLoader } from 'components'
import { Film } from 'models'
import { useQuery } from 'react-query'
import { Poster } from '../Poster'
import styles from './Films.module.scss'

const GET_FILMS = gql`
query {
  allFilms {
    films {
      director
      releaseDate
      id
      episodeID
      title
    }
  }
}
`
export default function Films() {
  const { isLoading, data } =  useQuery<Film[]>({
    queryKey: 'films',
    queryFn: () =>
      client
        .query<{ allFilms: { films: Film[] } }>({
          query: GET_FILMS,
        })
        .then((response) => response.data.allFilms.films),
    staleTime: 1000 * 60 * 60, // cache data for 1 hour
  })

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={styles.filmsContainer}>
      {data ? data?.map((film: Film, i: number) => <Poster film={film} key={i} />) : <PosterLoader count={20} />}
    </div>
  )
}
