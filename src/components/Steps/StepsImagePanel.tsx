// --- START OF FILE: [steps]/StepsImagePanel.tsx ---
"use client";

import React from "react";
import {
  Panel,
  BackgroundImage,
  Overlay,
  Content,
  PanelTitle,
  PanelText,
} from "./elements";

export function StepsImagePanel() {
  return (
    <Panel>
      <BackgroundImage src="/asylum.webp" alt="Background" fill priority />
      <Overlay />
      <Content>
        <PanelTitle>Secure & Simple Application</PanelTitle>
        <PanelText>
          Our guided process makes it easy to provide your information
          accurately and securely. Follow the steps to get started on your
          immigration journey with us.
        </PanelText>
      </Content>
    </Panel>
  );
}