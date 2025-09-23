export interface FormData {
  service?: string;
  adjustment_type?: string;
  vawa_party?: string;
  party_count: number;
  full_name?: string;
  email?: string;
  phone?: string;
  contact_method?: string;
  consent?: boolean;
}

export interface ServiceOption {
  value: string;
  label: string;
  category: 'family' | 'adjustment' | 'other';
}

export interface StepperProps {
  currentStep: number;
  totalSteps: number;
  flow: number[];
}

export interface StepProps {
  formData: FormData;
  onDataChange: (data: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
  errors: Record<string, string>;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export interface ValidationErrors {
  [key: string]: string;
}