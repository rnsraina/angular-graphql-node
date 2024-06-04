import {gql} from 'apollo-angular'

const GET_USERS = gql`
  query {
    users {
      _id
      name
      age
      email
    }
  }
`

const GET_USER = gql`
  query user($_id: String!) {
    user(_id: $_id) {
      _id
      name
      age
      email
    }
  }
`

const ADD_USER = gql`
  mutation addUser($name: String!, $age: Int!, $email: String!) {
    addUser(name: $name, age: $age, email: $email) {
      name, age, email
    }
  }
`

const UPDATE_USER = gql`
  mutation updateUser($_id: String!, $name: String!, $age: Int!, $email: String!) {
    updateUser(_id: $_id, name: $name, age: $age, email: $email) {
      _id, name, age, email
    }
  }
`

const DELETE_USER = gql`
  mutation deleteUser($_id: String!) {
    deleteUser(_id: $_id) {
      name
    }
  }
  `

export {GET_USER, GET_USERS, ADD_USER, UPDATE_USER, DELETE_USER}
