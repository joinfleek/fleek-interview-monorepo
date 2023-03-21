import { gql } from 'apollo-server'

export const product = gql`
  scalar DateTime
  type Product {
    id: ID!
    name: String!
    price: Float!
    currency: String!
    vendor: Vendor!
    quantity: Int!
    shipping_price: Float!
  }
`
