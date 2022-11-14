import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(userName: $username) {
            _userId
            userName
            UserEmail
        }
    }
`;

export const QUERY_ME = gql`
    query me{
        meUser{
          _userId
          userName
          UserEmail
        }
    }
`;