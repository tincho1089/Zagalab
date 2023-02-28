
import { Character, Film } from 'models'
import { QueryObserverResult, useQuery } from 'react-query'
import client from '../utilities/apolloClient'
import { GET_CHARACTER } from './queries'

export const getCharactersData = (id: string): QueryObserverResult<Character[], unknown> => {
  return useQuery<Character[]>({
    queryKey: 'characters',
    queryFn: () =>
      client
        .query<{ film: { characterConnection: { characters: Character[] } } }>({
          query: GET_CHARACTER,
          variables: { filmId: id },
        })
        .then((response) => response.data.film.characterConnection.characters),
    staleTime: 1000 * 60 * 60, // cache data for 1 hour
  })
}