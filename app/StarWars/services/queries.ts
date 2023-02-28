import { gql } from '@apollo/client'

export const GET_CHARACTER = gql`
  query Query($filmId: ID) {
    film(id: $filmId) {
      characterConnection {
        characters {
          birthYear
          created
          edited
          eyeColor
          gender
          hairColor
          height
          id
          mass
          name
          skinColor
        }
        totalCount
      }
    }
  }
`
