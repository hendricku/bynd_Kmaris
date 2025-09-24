"use client";

import { Steps } from '@/components/Steps/Steps';
import { Suspense } from 'react';

export default function StepsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Steps />
    </Suspense>
  );
}