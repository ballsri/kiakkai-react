/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateParcel = /* GraphQL */ `
  subscription OnCreateParcel($filter: ModelSubscriptionParcelFilterInput) {
    onCreateParcel(filter: $filter) {
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
export const onUpdateParcel = /* GraphQL */ `
  subscription OnUpdateParcel($filter: ModelSubscriptionParcelFilterInput) {
    onUpdateParcel(filter: $filter) {
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
export const onDeleteParcel = /* GraphQL */ `
  subscription OnDeleteParcel($filter: ModelSubscriptionParcelFilterInput) {
    onDeleteParcel(filter: $filter) {
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
export const onCreateSecret = /* GraphQL */ `
  subscription OnCreateSecret($filter: ModelSubscriptionSecretFilterInput) {
    onCreateSecret(filter: $filter) {
      id
      name
      secret
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSecret = /* GraphQL */ `
  subscription OnUpdateSecret($filter: ModelSubscriptionSecretFilterInput) {
    onUpdateSecret(filter: $filter) {
      id
      name
      secret
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSecret = /* GraphQL */ `
  subscription OnDeleteSecret($filter: ModelSubscriptionSecretFilterInput) {
    onDeleteSecret(filter: $filter) {
      id
      name
      secret
      createdAt
      updatedAt
      __typename
    }
  }
`;
