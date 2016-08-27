'use strict';

/*===============================
=            MODULES            =
===============================*/

import gql from 'graphql-tag';

/*=====  End of MODULES  ======*/

export function createUser(email: String, password: String) {
  return {
    query: gql`
    mutation CreateUser($email: String!, $password: String!) {
      user(email: $email, password: $password) { id, email, token, firstName, lastName }
    }`,
    variables: { email: email, password: password }
  };
}
