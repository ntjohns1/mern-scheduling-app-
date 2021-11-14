import { gql } from '@apollo/client';

export const GET_ME = gql`
query {
    me {
        _id
        username
        email
        }
    }
`;

export const GET_STUDENT = gql`
  query user($_id: ID!) {
    user(_id: $_id) {
      username
      email
      messages {
        _id
        messageText
        messageAuthor
        createdAt
      }
    }
  }
`;

export const GET_STUDENTS = gql `
query {
    users {
      _id
      username
      email
    }
  }
`;

export const EVENTS_BY_DATE = gql `
query($dayRef: String) {
  eventsByDate(dayRef: $dayRef) {
    _id
    studentId
    studentName
  	time
  	dayRef
    description
  }
}
`;


