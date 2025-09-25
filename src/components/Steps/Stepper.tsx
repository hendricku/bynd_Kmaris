// --- START OF FILE: [steps]/Stepper.tsx ---
"use client";

import React from "react";
import { StepperContainer, StepperDot } from "./elements";

interface StepperProps {
  currentStep: number;
  flow: number[];
}

export function Stepper({ currentStep, flow }: StepperProps) {
  return (
    <StepperContainer>
      {flow.map((_, index) => (
        <StepperDot
          key={index}
          $active={index <= currentStep}
        />
      ))}
    </StepperContainer>
  );
}