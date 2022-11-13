import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(userEmail: $email, userPassword: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(userName: $username, userEmail: $email, userPassword: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;