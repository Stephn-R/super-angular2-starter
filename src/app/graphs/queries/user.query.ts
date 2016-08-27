'use strict';

/*===============================
=            MODULES            =
===============================*/

import gql from 'graphql-tag';

/*=====  End of MODULES  ======*/

export function getUser(token: String, userID?: Number) {
  return {
    query: gql`
    query GetUser($token: String!, $id: Int) {
      user(token: $token, id: $id) { id, email, token, firstName, lastName }
    }`,
    variables: { token: token, id: userID }
  };
}
