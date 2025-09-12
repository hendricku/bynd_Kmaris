import React from "react";
import { PillProps } from "./interface";
import { PillRoot } from "./elements";

export const Pill: React.FC<PillProps> = ({ label }) => {
  return <PillRoot>{label}</PillRoot>;
};

export default Pill;
