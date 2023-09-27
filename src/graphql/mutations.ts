/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createParcel = /* GraphQL */ `
  mutation CreateParcel(
    $input: CreateParcelInput!
    $condition: ModelParcelConditionInput
  ) {
    createParcel(input: $input, condition: $condition) {
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
export const updateParcel = /* GraphQL */ `
  mutation UpdateParcel(
    $input: UpdateParcelInput!
    $condition: ModelParcelConditionInput
  ) {
    updateParcel(input: $input, condition: $condition) {
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
export const deleteParcel = /* GraphQL */ `
  mutation DeleteParcel(
    $input: DeleteParcelInput!
    $condition: ModelParcelConditionInput
  ) {
    deleteParcel(input: $input, condition: $condition) {
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
export const createSecret = /* GraphQL */ `
  mutation CreateSecret(
    $input: CreateSecretInput!
    $condition: ModelSecretConditionInput
  ) {
    createSecret(input: $input, condition: $condition) {
      id
      name
      secret
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSecret = /* GraphQL */ `
  mutation UpdateSecret(
    $input: UpdateSecretInput!
    $condition: ModelSecretConditionInput
  ) {
    updateSecret(input: $input, condition: $condition) {
      id
      name
      secret
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSecret = /* GraphQL */ `
  mutation DeleteSecret(
    $input: DeleteSecretInput!
    $condition: ModelSecretConditionInput
  ) {
    deleteSecret(input: $input, condition: $condition) {
      id
      name
      secret
      createdAt
      updatedAt
      __typename
    }
  }
`;
