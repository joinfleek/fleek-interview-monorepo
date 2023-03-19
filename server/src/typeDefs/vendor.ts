import { gql } from 'apollo-server'

export const vendor = gql`
  type Vendor {
    id: ID!
    name: String!
    email: String!
    products: [Product!]!
  }
`
