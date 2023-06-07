import React from "react";

export const CustomClamshell = {
  id: "Clamshell",
  details: require("../../assets/exercises/custom/details.json"),
  media: React.lazy(
    () => import("../../assets/exercises/custom/Clamshell.jpg")
  ),
};

export const CustomForearmMachine = {
  id: "ForearmMachine",
  details: require("../../assets/exercises/custom/details.json"),
  media: React.lazy(
    () => import("../../assets/exercises/custom/ForearmMachine.jpg")
  ),
};

export const CustomLyingObliqueReach = {
  id: "LyingObliqueReach",
  details: require("../../assets/exercises/custom/details.json"),
  media: React.lazy(
    () => import("../../assets/exercises/custom/LyingObliqueReach.gif")
  ),
};

export const CustomMcGillCurlUp = {
  id: "McGillCurlUp",
  details: require("../../assets/exercises/custom/details.json"),
  media: React.lazy(
    () => import("../../assets/exercises/custom/McGillCurlUp.mp4")
  ),
};

export const CustomQuadrupedThoracicRotation = {
  id: "QuadrupedThoracicRotation",
  details: require("../../assets/exercises/custom/details.json"),
  media: React.lazy(
    () => import("../../assets/exercises/custom/QuadrupedThoracicRotation.gif")
  ),
};

export const CustomResistanceBandDorsiflexion = {
  id: "ResistanceBandDorsiflexion",
  details: require("../../assets/exercises/custom/details.json"),
  media: React.lazy(
    () => import("../../assets/exercises/custom/ResistanceBandDorsiflexion.jpg")
  ),
};

export const CustomScarecrow = {
  id: "Scarecrow",
  details: require("../../assets/exercises/custom/details.json"),
  media: React.lazy(
    () => import("../../assets/exercises/custom/Scarecrow.jpg")
  ),
};

export const CustomStandAndReach = {
  id: "StandAndReach",
  details: require("../../assets/exercises/custom/details.json"),
  media: React.lazy(
    () => import("../../assets/exercises/custom/StandAndReach.jpg")
  ),
};
