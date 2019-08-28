    // src/graphql/mutations.js

    export const CREATE_MEETUP_MUTATION = gql`
      mutation CreateMeetupMutation(
        $title: String!
        $location: String!
        $date: DateTime!
        $description: String!
      ) {
        createMeetup(
          title: $title
          location: $location
          date: $date
          description: $description
        ) {
          id
          title
          date
          location
          organizer {
            name
          }
          attendees {
            id
          }
        }
      }
    `