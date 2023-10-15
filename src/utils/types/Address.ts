export enum AddressLevel {
  Region,
  AdministrativeArea,
  MunicipalArea,
  RuralUrbanSettlement,
  City,
  Locality,
  ElementOfPlanningStructure,
  ElementOfRoadNetwork,
  Land,
  Building,
  Room,
  RoomInRooms,
  AutonomousRegionLevel,
  IntracityLevel,
  AdditionalTerritoriesLevel,
  LevelOfObjectsInAdditionalTerritories,
  CarPlace,
}

export interface Address {
  objectId: number;
  objectGuid: string;
  text: string;
  objectLevel: AddressLevel;
  objectLevelText: string;
}

export interface AvailableAddress {
  regions: Address[];
  cities: Address[];
  streets: Address[];
  houses: Address[];
}
