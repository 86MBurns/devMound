import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation Mutation($email: String!, $password: String!) {
        login(userEmail: $email, userPassword: $password) {
            token
            user {
                _id
                _username
            }
        }
    }    
`;

export const ADD_USER = gql`
    mutation Mutation($email: String!, $password: String!) {
        addUser(userName: $username, userEmail: $email, userPassword: $password) {
            token
            user {
                _userId
                userName
            }
        }
    }
`;