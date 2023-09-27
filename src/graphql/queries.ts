/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getParcel = /* GraphQL */ `
  query GetParcel($id: ID!) {
    getParcel(id: $id) {
      id
      parcel_key
      package_type
      package_other
      resident_room
      resident_name
      received_at
      received_by
      picked_up_at
      picked_up_by
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listParcels = /* GraphQL */ `
  query ListParcels(
    $filter: ModelParcelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParcels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        parcel_key
        package_type
        package_other
        resident_room
        resident_name
        received_at
        received_by
        picked_up_at
        picked_up_by
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSecret = /* GraphQL */ `
  query GetSecret($id: ID!) {
    getSecret(id: $id) {
      id
      name
      secret
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSecrets = /* GraphQL */ `
  query ListSecrets(
    $filter: ModelSecretFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSecrets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        secret
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
