import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_WORKORDER = gql`
  query queryWorkorders {  
    WorkOrders{
    _id
    category
    problem
    reply
    statusOpen
    handledBy
    workerComments
    }
  } 
  `;

export const QUERY_CATEGORY = gql`
  query getCategory{
    getCategory{
      name
    }
}
`;
export const QUERY_RENT_PAYMENTS = gql`
  query getRentPayments{
    getRentPayments{
      _id
      payment
    }
}
`;
