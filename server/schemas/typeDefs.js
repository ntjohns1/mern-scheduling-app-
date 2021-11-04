const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  password: String
  isTeacher: Boolean
  events: [Event]
  messages: [Message]
}

  type Auth {
    token: ID!
    user: User
  }

  type Message {
    _id: ID
    messageText: String
    messageAuthor: String
    createdAt: String
  }

  type Event {
    _id: ID
    student: ID
    time: String
    date: String
    description: String
  }

  input UpdateUserInput {
    _id: ID!
    username: String
    email: String
}

  input AddEventInput {
    student: ID
    date: String
    description: String
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    events(username: String): [Event]
    event(eventId: ID!): Event
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(
      _id: ID
      username: String
      email: String
    ): User
    deleteUser(_id: ID!): User
    login(email: String!, password: String!): Auth
    addEvent(input: AddEventInput): Event
    addMessage(_id: ID!, messageText: String): Message
    removeEvent(eventId: ID!): Event
    removeMessage(eventId: ID!, messageId: ID!): Event
  }
`;

module.exports = typeDefs;
