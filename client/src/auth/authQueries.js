import client, { gql } from '../clientQuery';

const queries = {
  register(user) {
    return client.mutate({
      variables: {
        authToken: user.authToken
      },
      mutation: gql`
        mutation AddUser($authToken: String!) {
          addUser(authToken: $authToken) {
            id
            username
            email
            roleId
            token
          }
        }
      `
    });
  }
};

export default queries;
