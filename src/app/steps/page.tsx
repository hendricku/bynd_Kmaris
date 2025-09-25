// --- START OF FILE: app/get-started/page.tsx ---
"use client";

import React, { Suspense } from "react";
import { PageWrapper, Container } from "../../components/Steps/elements";
import { StepsImagePanel } from "../../components/Steps/StepsImagePanel";
import { StepsForm } from "../../components/Steps/StepsForm";

// A wrapper component is needed for useSearchParams
function GetStartedForm() {
  return (
    <PageWrapper>
      <Container>
        <StepsImagePanel />
        <StepsForm />
      </Container>
    </PageWrapper>
  );
}

// Export the page with Suspense
export default function GetStartedPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GetStartedForm />
    </Suspense>
  );
}