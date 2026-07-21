
// File location: src/types/house.ts
export interface HouseFormData {
  rooms: string;
  siteArea: string;
  builtArea: string;
  propertyYears: string;
  constructionMaterial: string;
  housingTypology: string;
  landValueGrading: string;
  proximityCBD: string;
  proximityBusStation: string;
  nearestRoadType: string;
  proximitySchools: string;
}

export const initialHouseFormData: HouseFormData = {
  rooms: "",
  siteArea: "",
  builtArea: "",
  propertyYears: "",
  constructionMaterial: "Concrete",
  housingTypology: "Detached",
  landValueGrading: "Low",
  proximityCBD: "",
  proximityBusStation: "",
  nearestRoadType: "Asphalt",
  proximitySchools: "",
};