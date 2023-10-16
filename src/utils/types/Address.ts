export enum AddressLevel {
  Region = "Region",
  AdministrativeArea = "AdministrativeArea",
  MunicipalArea = "MunicipalArea",
  RuralUrbanSettlement = "RuralUrbanSettlement",
  City = "City",
  Locality = "Locality",
  ElementOfPlanningStructure = "ElementOfPlanningStructure",
  ElementOfRoadNetwork = "ElementOfRoadNetwork",
  Land = "Land",
  Room = "Room",
  RoomInRooms = "RoomInRooms",
  AutonomousRegionLevel = "AutonomousRegionLevel",
  IntracityLevel = "IntracityLevel",
  AdditionalTerritoriesLevel = "AdditionalTerritoriesLevel",
  LevelOfObjectsInAdditionalTerritories = "LevelOfObjectsInAdditionalTerritories",
  CarPlace = "CarPlace",
  Building = "Building",
}

export interface Address {
  objectId: number;
  objectGuid: string;
  text: string;
  objectLevel: AddressLevel;
  objectLevelText: string;
}

export type AvailableAddress = Record<AddressLevel, Address[]>;
