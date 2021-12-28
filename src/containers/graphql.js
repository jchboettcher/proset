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

export const GET_RECENT = gql`
  query recentUsersBy1($game: String!, $level: Int!, $limit: Int!, $time: Int!) {
    recentUsersBy1(game: $game, level: $level, limit: $limit, time: $time) {
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

export const GET_TOP = gql`
  query topUsersBy1($game: String!, $level: Int!, $limit: Int!) {
    topUsersBy1(game: $game, level: $level, limit: $limit) {
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

export const GET_USER = gql`
  query userByName1($game: String!, $level: Int!, $name: String!) {
    userByName1(game: $game, level: $level, name: $name) {
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