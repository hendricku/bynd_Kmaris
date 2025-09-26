// src/components/Steps/interface.ts

export interface FormData {
  service?: string;
  adjustment_type?: string;
  vawa_party?: string;
  party_count: number; // Must always be a number
  full_name?: string;
  email?: string;
  phone?: string;
  contact_method?: string;
  consent?: boolean;
  password?: string;
  confirmPassword?: string;
}

export interface ValidationErrors {
  [key: string]: string | undefined;
}

export interface ServiceOption {
  value: string;
  label: string;
  category: 'family' | 'adjustment' | 'other';
}

export interface StepperProps {
  currentStep: number;
  flow: number[];
  // totalSteps has been removed as it is redundant
}