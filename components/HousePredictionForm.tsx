// File location: src/components/HousePredictionForm.tsx
"use client";

import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import PredictButton from "./PredictButton";
import PredictionResult from "./PredictionResult";
import { HouseFormData, initialHouseFormData } from "@/types/house";

const CONSTRUCTION_MATERIALS = ["Concrete", "Brick", "Mud&Wood"];
const HOUSING_TYPOLOGIES = ["Detached", "Semi-detached", "Condominium"];
const LAND_VALUE_GRADINGS = ["Low", "Medium", "High"];
const ROAD_TYPES = ["Asphalt", "Gravel"];

export default function HousePredictionForm() {
  const [formData, setFormData] = useState<HouseFormData>(initialHouseFormData);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePredict = async () => {
    setLoading(true);
    setError(null);
    setPrice(null);

    try {
      // const response = await fetch("http://localhost:8000/predict",
      const response = await fetch("https://house-price-prediction-backend-2.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Prediction request failed. Please try again.");
      }

      const data = await response.json();
      setPrice(data.predicted_price ?? data.price);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-8">
      <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
        House Price Prediction
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Enter the property details below to estimate its price.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <InputField
          label="Number of Rooms"
          name="rooms"
          value={formData.rooms}
          onChange={handleChange}
        />
        <InputField
          label="Site Area (sqm)"
          name="siteArea"
          value={formData.siteArea}
          onChange={handleChange}
        />
        <InputField
          label="Built Area (sqm)"
          name="builtArea"
          value={formData.builtArea}
          onChange={handleChange}
        />
        <InputField
          label="Property Years"
          name="propertyYears"
          value={formData.propertyYears}
          onChange={handleChange}
        />
        <SelectField
          label="Construction Material"
          name="constructionMaterial"
          value={formData.constructionMaterial}
          options={CONSTRUCTION_MATERIALS}
          onChange={handleChange}
        />
        <SelectField
          label="Housing Typology"
          name="housingTypology"
          value={formData.housingTypology}
          options={HOUSING_TYPOLOGIES}
          onChange={handleChange}
        />
        <SelectField
          label="Land Value Grading"
          name="landValueGrading"
          value={formData.landValueGrading}
          options={LAND_VALUE_GRADINGS}
          onChange={handleChange}
        />
        <InputField
          label="Proximity to CBD (km)"
          name="proximityCBD"
          value={formData.proximityCBD}
          onChange={handleChange}
        />
        <InputField
          label="Proximity to Bus Station (km)"
          name="proximityBusStation"
          value={formData.proximityBusStation}
          onChange={handleChange}
        />
        <SelectField
          label="Type of Nearest Road"
          name="nearestRoadType"
          value={formData.nearestRoadType}
          options={ROAD_TYPES}
          onChange={handleChange}
        />
        <InputField
          label="Proximity to Schools (km)"
          name="proximitySchools"
          value={formData.proximitySchools}
          onChange={handleChange}
        />
      </div>

      <PredictButton loading={loading} onClick={handlePredict} />
      <PredictionResult price={price} error={error} />
    </div>
  );
}