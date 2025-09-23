"use client";

import React from "react";
import { StepperProps } from "./interface";
import { StepperContainer, StepperDot } from "./elements";

export function Stepper({ currentStep, flow }: StepperProps) {
  const visibleSteps = flow.length;
  
  return (
    <StepperContainer>
      {Array.from({ length: visibleSteps }).map((_, index) => (
        <StepperDot
          key={index}
          $active={index <= currentStep}
        />
      ))}
    </StepperContainer>
  );
}