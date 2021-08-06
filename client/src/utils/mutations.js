import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
  ) {
    token
    user {
      _id
    }
  }
}
`;

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email,
  password: $password
  ) {
    token
    user {
      _id
    }
  }
}
`;

export const ADD_WORK_ORDER = gql`
mutation addWorkOrder($category: String!, $problem: String!, $reply: Boolean $statusOpen: Boolean) 
{
  addWorkOrder(
    category: $category, 
    problem: $problem,
    reply: $reply, 
    statusOpen:$statusOpen
    ) 
    {    
    problem
    statusOpen
  }
}
`;
export const UPDATE_WORKORDER = gql`
mutation updateWorkOrder($_id:ID!, $handledBy: String!, $workerComments: String!) 
{
  updateWorkOrder(
  _id: $_id
    handledBy: $handledBy, 
    workerComments: $workerComments,
    ) 
    {    
      statusOpen
  }
}
`;

export const DELETE_WORK_ORDER = gql`
mutation removeWorkOrder($_id: ID!) 
{
  removeWorkOrder(
    _id: $_id,
    ) 
}
`;

// mutation updateWorkOrder{
//   updateWorkOrder(
//     _id: "610cae7043670a3a54c2ec14"
//     handledBy: "Tony the dickhead", 
//     workerComments: "Im a dick",
//     ) 
//     {    
//       statusOpen
//   }
// }

