import gql from 'graphql-tag'

export const GET_RANKINGS = gql`
  query usersBy1($game: String!, $level: Int!, $limit: Int!) {
    usersBy1(game: $game, level: $level, limit: $limit) {
      id
      name
      game
      level
      score1
      score2
      createdAt
    }
  }
`

export const ADD_USER = gql`
  mutation addUser($input: AddUser!) {
    addUser(input: $input) {
      id
      name
      game
      level
      score1
      score2
      createdAt
    }
  }
`