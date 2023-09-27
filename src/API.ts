/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateParcelInput = {
  id?: string | null,
  parcel_key: string,
  package_type: PackageType,
  package_other?: string | null,
  resident_room: string,
  resident_name: string,
  received_at: string,
  received_by: string,
  picked_up_at?: string | null,
  picked_up_by?: string | null,
};

export enum PackageType {
  BOX = "BOX",
  ENVELOPE = "ENVELOPE",
  OTHER = "OTHER",
}


export type ModelParcelConditionInput = {
  parcel_key?: ModelStringInput | null,
  package_type?: ModelPackageTypeInput | null,
  package_other?: ModelStringInput | null,
  resident_room?: ModelStringInput | null,
  resident_name?: ModelStringInput | null,
  received_at?: ModelStringInput | null,
  received_by?: ModelStringInput | null,
  picked_up_at?: ModelStringInput | null,
  picked_up_by?: ModelStringInput | null,
  and?: Array< ModelParcelConditionInput | null > | null,
  or?: Array< ModelParcelConditionInput | null > | null,
  not?: ModelParcelConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelPackageTypeInput = {
  eq?: PackageType | null,
  ne?: PackageType | null,
};

export type Parcel = {
  __typename: "Parcel",
  id: string,
  parcel_key: string,
  package_type: PackageType,
  package_other?: string | null,
  resident_room: string,
  resident_name: string,
  received_at: string,
  received_by: string,
  picked_up_at?: string | null,
  picked_up_by?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateParcelInput = {
  id: string,
  parcel_key?: string | null,
  package_type?: PackageType | null,
  package_other?: string | null,
  resident_room?: string | null,
  resident_name?: string | null,
  received_at?: string | null,
  received_by?: string | null,
  picked_up_at?: string | null,
  picked_up_by?: string | null,
};

export type DeleteParcelInput = {
  id: string,
};

export type CreateSecretInput = {
  id?: string | null,
  name: string,
  secret: string,
};

export type ModelSecretConditionInput = {
  name?: ModelStringInput | null,
  secret?: ModelStringInput | null,
  and?: Array< ModelSecretConditionInput | null > | null,
  or?: Array< ModelSecretConditionInput | null > | null,
  not?: ModelSecretConditionInput | null,
};

export type Secret = {
  __typename: "Secret",
  id: string,
  name: string,
  secret: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSecretInput = {
  id: string,
  name?: string | null,
  secret?: string | null,
};

export type DeleteSecretInput = {
  id: string,
};

export type ModelParcelFilterInput = {
  id?: ModelIDInput | null,
  parcel_key?: ModelStringInput | null,
  package_type?: ModelPackageTypeInput | null,
  package_other?: ModelStringInput | null,
  resident_room?: ModelStringInput | null,
  resident_name?: ModelStringInput | null,
  received_at?: ModelStringInput | null,
  received_by?: ModelStringInput | null,
  picked_up_at?: ModelStringInput | null,
  picked_up_by?: ModelStringInput | null,
  and?: Array< ModelParcelFilterInput | null > | null,
  or?: Array< ModelParcelFilterInput | null > | null,
  not?: ModelParcelFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelParcelConnection = {
  __typename: "ModelParcelConnection",
  items:  Array<Parcel | null >,
  nextToken?: string | null,
};

export type ModelSecretFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  secret?: ModelStringInput | null,
  and?: Array< ModelSecretFilterInput | null > | null,
  or?: Array< ModelSecretFilterInput | null > | null,
  not?: ModelSecretFilterInput | null,
};

export type ModelSecretConnection = {
  __typename: "ModelSecretConnection",
  items:  Array<Secret | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionParcelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  parcel_key?: ModelSubscriptionStringInput | null,
  package_type?: ModelSubscriptionStringInput | null,
  package_other?: ModelSubscriptionStringInput | null,
  resident_room?: ModelSubscriptionStringInput | null,
  resident_name?: ModelSubscriptionStringInput | null,
  received_at?: ModelSubscriptionStringInput | null,
  received_by?: ModelSubscriptionStringInput | null,
  picked_up_at?: ModelSubscriptionStringInput | null,
  picked_up_by?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionParcelFilterInput | null > | null,
  or?: Array< ModelSubscriptionParcelFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSecretFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  secret?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSecretFilterInput | null > | null,
  or?: Array< ModelSubscriptionSecretFilterInput | null > | null,
};

export type CreateParcelMutationVariables = {
  input: CreateParcelInput,
  condition?: ModelParcelConditionInput | null,
};

export type CreateParcelMutation = {
  createParcel?:  {
    __typename: "Parcel",
    id: string,
    parcel_key: string,
    package_type: PackageType,
    package_other?: string | null,
    resident_room: string,
    resident_name: string,
    received_at: string,
    received_by: string,
    picked_up_at?: string | null,
    picked_up_by?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateParcelMutationVariables = {
  input: UpdateParcelInput,
  condition?: ModelParcelConditionInput | null,
};

export type UpdateParcelMutation = {
  updateParcel?:  {
    __typename: "Parcel",
    id: string,
    parcel_key: string,
    package_type: PackageType,
    package_other?: string | null,
    resident_room: string,
    resident_name: string,
    received_at: string,
    received_by: string,
    picked_up_at?: string | null,
    picked_up_by?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteParcelMutationVariables = {
  input: DeleteParcelInput,
  condition?: ModelParcelConditionInput | null,
};

export type DeleteParcelMutation = {
  deleteParcel?:  {
    __typename: "Parcel",
    id: string,
    parcel_key: string,
    package_type: PackageType,
    package_other?: string | null,
    resident_room: string,
    resident_name: string,
    received_at: string,
    received_by: string,
    picked_up_at?: string | null,
    picked_up_by?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSecretMutationVariables = {
  input: CreateSecretInput,
  condition?: ModelSecretConditionInput | null,
};

export type CreateSecretMutation = {
  createSecret?:  {
    __typename: "Secret",
    id: string,
    name: string,
    secret: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSecretMutationVariables = {
  input: UpdateSecretInput,
  condition?: ModelSecretConditionInput | null,
};

export type UpdateSecretMutation = {
  updateSecret?:  {
    __typename: "Secret",
    id: string,
    name: string,
    secret: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSecretMutationVariables = {
  input: DeleteSecretInput,
  condition?: ModelSecretConditionInput | null,
};

export type DeleteSecretMutation = {
  deleteSecret?:  {
    __typename: "Secret",
    id: string,
    name: string,
    secret: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetParcelQueryVariables = {
  id: string,
};

export type GetParcelQuery = {
  getParcel?:  {
    __typename: "Parcel",
    id: string,
    parcel_key: string,
    package_type: PackageType,
    package_other?: string | null,
    resident_room: string,
    resident_name: string,
    received_at: string,
    received_by: string,
    picked_up_at?: string | null,
    picked_up_by?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListParcelsQueryVariables = {
  filter?: ModelParcelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParcelsQuery = {
  listParcels?:  {
    __typename: "ModelParcelConnection",
    items:  Array< {
      __typename: "Parcel",
      id: string,
      parcel_key: string,
      package_type: PackageType,
      package_other?: string | null,
      resident_room: string,
      resident_name: string,
      received_at: string,
      received_by: string,
      picked_up_at?: string | null,
      picked_up_by?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSecretQueryVariables = {
  id: string,
};

export type GetSecretQuery = {
  getSecret?:  {
    __typename: "Secret",
    id: string,
    name: string,
    secret: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSecretsQueryVariables = {
  filter?: ModelSecretFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSecretsQuery = {
  listSecrets?:  {
    __typename: "ModelSecretConnection",
    items:  Array< {
      __typename: "Secret",
      id: string,
      name: string,
      secret: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateParcelSubscriptionVariables = {
  filter?: ModelSubscriptionParcelFilterInput | null,
};

export type OnCreateParcelSubscription = {
  onCreateParcel?:  {
    __typename: "Parcel",
    id: string,
    parcel_key: string,
    package_type: PackageType,
    package_other?: string | null,
    resident_room: string,
    resident_name: string,
    received_at: string,
    received_by: string,
    picked_up_at?: string | null,
    picked_up_by?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateParcelSubscriptionVariables = {
  filter?: ModelSubscriptionParcelFilterInput | null,
};

export type OnUpdateParcelSubscription = {
  onUpdateParcel?:  {
    __typename: "Parcel",
    id: string,
    parcel_key: string,
    package_type: PackageType,
    package_other?: string | null,
    resident_room: string,
    resident_name: string,
    received_at: string,
    received_by: string,
    picked_up_at?: string | null,
    picked_up_by?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteParcelSubscriptionVariables = {
  filter?: ModelSubscriptionParcelFilterInput | null,
};

export type OnDeleteParcelSubscription = {
  onDeleteParcel?:  {
    __typename: "Parcel",
    id: string,
    parcel_key: string,
    package_type: PackageType,
    package_other?: string | null,
    resident_room: string,
    resident_name: string,
    received_at: string,
    received_by: string,
    picked_up_at?: string | null,
    picked_up_by?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSecretSubscriptionVariables = {
  filter?: ModelSubscriptionSecretFilterInput | null,
};

export type OnCreateSecretSubscription = {
  onCreateSecret?:  {
    __typename: "Secret",
    id: string,
    name: string,
    secret: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSecretSubscriptionVariables = {
  filter?: ModelSubscriptionSecretFilterInput | null,
};

export type OnUpdateSecretSubscription = {
  onUpdateSecret?:  {
    __typename: "Secret",
    id: string,
    name: string,
    secret: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSecretSubscriptionVariables = {
  filter?: ModelSubscriptionSecretFilterInput | null,
};

export type OnDeleteSecretSubscription = {
  onDeleteSecret?:  {
    __typename: "Secret",
    id: string,
    name: string,
    secret: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
