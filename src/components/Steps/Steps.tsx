"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { Box, Typography, RadioGroup, Radio, Checkbox, MenuItem } from "@mui/material";
import { FormData, ServiceOption, ValidationErrors } from "./interface";
import { Stepper } from "./Stepper";
import {
  FormWrapper,
  FormCard,
  FormTitle,
  FormSubtitle,
  StepTitle,
  StepContainer,
  GridContainer,
  FullWidthContainer,
  FieldsetContainer,
  FieldsetLegend,
  StyledTextField,
  StyledSelect,
  OptionsContainer,
  ChipOption,
  ActionsContainer,
  PrimaryButton,
  SecondaryButton,
  SummaryContainer,
  SummaryItem,
  ErrorBanner,
  GroupTitle,
  HintText,
  CustomAlert
} from "./elements";

const SERVICE_OPTIONS: ServiceOption[] = [

  { value: 'i130', label: 'I-130 · Petition for Relative', category: 'family' },
  { value: 'i129f', label: 'I-129F · Petition for Fiancé(e)', category: 'family' },

  { value: 'i485_package', label: 'I-485 · Adjustment of Status Package', category: 'adjustment' },
  { value: 'i360_i485', label: 'I-360 / I-485 · VAWA Adjustment Package', category: 'adjustment' },

  { value: 'i751', label: 'I-751 · Removal of Conditions on Residence', category: 'other' },
  { value: 'i539', label: 'I-539 · Extend/Change Nonimmigrant Status', category: 'other' },
  { value: 'i589_i765', label: 'I-589 / I-765 · Asylum Package', category: 'other' },
  { value: 'i765_renewal', label: 'I-765 · Renewal of Work Authorization', category: 'other' },
  { value: 'i918', label: 'I-918 · U Visa Nonimmigrant Status', category: 'other' },
  { value: 'n400_n600', label: 'N-400 · Naturalization / N-600 · Citizenship', category: 'other' },
];

const ADJUSTMENT_OPTIONS = [
  { value: 'i130_approved', label: 'With an Approved I-130' },
  { value: 'i140_approved', label: 'With an Approved I-140' },
  { value: 'asylum_approved', label: 'With an Approved Asylum case' },
  // This covers the 'i130-i485-single' and 'i130-i485-two' packages
  { value: 'none', label: 'Filing concurrently (no approved petition yet)' },
];
const VAWA_OPTIONS = [
  { value: 'principal_only', label: 'Principal Applicant Only' },
  { value: 'principal_child', label: 'Principal Applicant + Child' },
];

const getInitialFormData = (formId: string | null | undefined): Partial<FormData> => {
  if (!formId) return {};

  switch (formId) {
    case 'i130-single':
      return { service: 'i130', party_count: 1 };
    case 'i130-two':
      return { service: 'i130', party_count: 2 };
    case 'i130-three':
      return { service: 'i130', party_count: 3 };
    case 'i129f':
      return { service: 'i129f', party_count: 1 };
    case 'i130-i485-single':
      return { service: 'i485_package', party_count: 1 };
    case 'i130-i485-two':
      return { service: 'i485_package', party_count: 2 };
    case 'i485-approved-i130':
      return { service: 'i485_package', adjustment_type: 'i130_approved', party_count: 1 };
    case 'i485-approved-i140':
      return { service: 'i485_package', adjustment_type: 'i140_approved', party_count: 1 };
    case 'i485-approved-asylum':
      return { service: 'i485_package', adjustment_type: 'asylum_approved', party_count: 1 };
    case 'i360-i485-vawa':
      return { service: 'i360_i485', vawa_party: 'principal_only', party_count: 1 };
    case 'i360-i485-vawa-child':
      return { service: 'i360_i485', vawa_party: 'principal_child', party_count: 2 };
    case 'i539':
      return { service: 'i539', party_count: 1 };
    case 'i589-i765-asylum':
      return { service: 'i589_i765', party_count: 1 };
    case 'i751':
      return { service: 'i751', party_count: 1 };
    case 'i765-renewal':
      return { service: 'i765_renewal', party_count: 1 };
    case 'i918':
      return { service: 'i918', party_count: 1 };
    case 'n400-naturalization':
      return { service: 'n400_n600', party_count: 1 };
    default:
      return {};
  }
};

export function Steps() {
  const searchParams = useSearchParams();

  const formId = searchParams?.get('formId');

  
  const [formData, setFormData] = useState<FormData>(() => {
    const defaultState: FormData = { party_count: 1 };
    const initialStateFromUrl = getInitialFormData(formId);
    return { ...defaultState, ...initialStateFromUrl };
  });
  
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [errorBanner, setErrorBanner] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const defaultState: FormData = { party_count: 1 };
    const initialData = getInitialFormData(formId);
    setFormData({ ...defaultState, ...initialData });
  }, [formId]);


  const otherServices = new Set(['i129f', 'i751', 'i539', 'i589_i765', 'i765_renewal', 'i918', 'n400_n600']);
  const isOtherService = otherServices.has(formData.service || '');
  const flow = isOtherService ? [0, 2, 3] : [0, 1, 2, 3];

  const updateFormData = useCallback((data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setErrors({});
    setErrorBanner('');
  }, []);

  const validateStep = (stepIndex: number): boolean => {
    const newErrors: ValidationErrors = {};
    const stepData = flow[stepIndex];

    switch (stepData) {
      case 0: 
        if (!formData.service) {
          newErrors.service = 'Please select a service';
        }
        break;
      case 1: // Details
        if (formData.service === 'i485_package' && !formData.adjustment_type) {
          newErrors.adjustment_type = 'Please select an approved petition type';
        }
        if (formData.service === 'i360_i485' && !formData.vawa_party) {
          newErrors.vawa_party = 'Please select who is included';
        }
        if (!formData.party_count || formData.party_count < 1) {
          newErrors.party_count = 'Party count is required';
        }
        break;
      case 2: // Contact info
        if (!formData.full_name) newErrors.full_name = 'Full name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (formData.email && !formData.email.includes('@')) newErrors.email = 'Enter a valid email';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.contact_method) newErrors.contact_method = 'Contact method is required';
        if (!formData.consent) newErrors.consent = 'You must agree to terms and conditions';
        break;
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrorBanner('Please complete the highlighted fields.');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < flow.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setErrors({});
      setErrorBanner('');
    }
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      setShowAlert(true);
      setFormData({ party_count: 1 });
      setCurrentStep(0);
      setErrors({});
      setErrorBanner('');
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const getPartyConstraints = () => {
    switch (formData.service) {
      case 'i130':
        return { min: 1, max: 3, label: 'How many beneficiaries are included for this I-130?', hint: 'Usually 1. If filing for multiple beneficiaries, set the count (max 3).' };
      case 'i485_package':
        return { min: 1, max: 2, label: 'How many applicants are included in this Adjustment package?', hint: 'Commonly 1 or 2 (e.g., principal + spouse).' };
      default:
        return { min: 1, max: 1, label: 'How many applicants are included for this service?', hint: 'Most services are single-applicant. Set to 1 unless otherwise needed.' };
    }
  };

  const renderServiceStep = () => (
    <StepContainer>
      <StepTitle>Step 1 · Choose your service</StepTitle>
      {errorBanner && <ErrorBanner>{errorBanner}</ErrorBanner>}
      
      <FieldsetContainer>
        <FieldsetLegend>Select one</FieldsetLegend>
        <GridContainer>
          <RadioGroup
            value={formData.service || ''}
            onChange={(e) => updateFormData({ service: e.target.value })}
            sx={{ gridColumn: '1 / -1' }}
          >
            <FullWidthContainer>
              <GroupTitle>Family Petition</GroupTitle>
            </FullWidthContainer>
            <OptionsContainer>
              {SERVICE_OPTIONS.filter(opt => opt.category === 'family').map((option) => (
                <ChipOption
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                  checked={formData.service === option.value}
                />
              ))}
            </OptionsContainer>

            <FullWidthContainer sx={{ marginTop: 1 }}>
              <GroupTitle>Adjustment of Status</GroupTitle>
            </FullWidthContainer>
            <OptionsContainer>
              {SERVICE_OPTIONS.filter(opt => opt.category === 'adjustment').map((option) => (
                <ChipOption
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                  checked={formData.service === option.value}
                />
              ))}
            </OptionsContainer>

            <FullWidthContainer sx={{ marginTop: 1 }}>
              <GroupTitle>Other Services</GroupTitle>
            </FullWidthContainer>
            <OptionsContainer>
              {SERVICE_OPTIONS.filter(opt => opt.category === 'other').map((option) => (
                <ChipOption
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                  checked={formData.service === option.value}
                />
              ))}
            </OptionsContainer>
          </RadioGroup>
        </GridContainer>
      </FieldsetContainer>

      <ActionsContainer>
        <Box />
        <PrimaryButton onClick={handleNext}>Next</PrimaryButton>
      </ActionsContainer>
    </StepContainer>
  );

  const renderDetailsStep = () => {
    const partyConstraints = getPartyConstraints();
    
    return (
      <StepContainer>
        <StepTitle>Step 2 · Details</StepTitle>
        {errorBanner && <ErrorBanner>{errorBanner}</ErrorBanner>}

        {formData.service === 'i485_package' && (
          <Box sx={{ marginBottom: 1.5 }}>
            <Typography variant="body1" fontWeight={600} sx={{ marginBottom: 0.75 }}>
              Which petition is approved (if any)?
            </Typography>
            <RadioGroup
              value={formData.adjustment_type || ''}
              onChange={(e) => updateFormData({ adjustment_type: e.target.value })}
            >
              <OptionsContainer>
                {ADJUSTMENT_OPTIONS.map((option) => (
                  <ChipOption
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </OptionsContainer>
            </RadioGroup>
          </Box>
        )}

        {formData.service === 'i360_i485' && (
          <Box sx={{ marginBottom: 1.5 }}>
            <Typography variant="body1" fontWeight={600} sx={{ marginBottom: 0.75 }}>
              Who is included in this VAWA Adjustment?
            </Typography>
            <RadioGroup
              value={formData.vawa_party || ''}
              onChange={(e) => {
                const value = e.target.value;
                updateFormData({ 
                  vawa_party: value,
                  party_count: value === 'principal_child' ? 2 : 1
                });
              }}
            >
              <OptionsContainer>
                {VAWA_OPTIONS.map((option) => (
                  <ChipOption
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </OptionsContainer>
            </RadioGroup>
          </Box>
        )}

        {formData.service !== 'i360_i485' && (
          <Box>
            <Typography variant="body1" fontWeight={600} sx={{ marginBottom: 0.75 }}>
              {partyConstraints.label}
            </Typography>
            <StyledTextField
              type="number"
              value={formData.party_count}
              onChange={(e) => updateFormData({ party_count: parseInt(e.target.value) || 1 })}
              inputProps={{ min: partyConstraints.min, max: partyConstraints.max }}
              error={!!errors.party_count}
              helperText={errors.party_count}
              fullWidth
            />
            <HintText>{partyConstraints.hint}</HintText>
          </Box>
        )}

        <ActionsContainer>
          <SecondaryButton onClick={handleBack}>Back</SecondaryButton>
          <PrimaryButton onClick={handleNext}>Next</PrimaryButton>
        </ActionsContainer>
      </StepContainer>
    );
  };

  const renderContactStep = () => (
    <StepContainer>
      <StepTitle>{isOtherService ? 'Step 2' : 'Step 3'} · Your contact details</StepTitle>
      {errorBanner && <ErrorBanner>{errorBanner}</ErrorBanner>}
      
      <GridContainer>
        <StyledTextField
          label="Full name"
          value={formData.full_name || ''}
          onChange={(e) => updateFormData({ full_name: e.target.value })}
          error={!!errors.full_name}
          helperText={errors.full_name}
        />
        <StyledTextField
          label="Email"
          type="email"
          value={formData.email || ''}
          onChange={(e) => updateFormData({ email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
        />
        <StyledTextField
          label="Phone"
          type="tel"
          value={formData.phone || ''}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <StyledSelect
          value={formData.contact_method || 'Email'}
          onChange={(e) => updateFormData({ contact_method: e.target.value as string })}
          error={!!errors.contact_method}
          displayEmpty
        >
          <MenuItem value="Email">Email</MenuItem>
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="WhatsApp">WhatsApp</MenuItem>
        </StyledSelect>
      </GridContainer>
      
      <Box sx={{ marginTop: 2 }}>
        <ChipOption
          control={
            <Checkbox
              checked={formData.consent || false}
              onChange={(e) => updateFormData({ consent: e.target.checked })}
            />
          }
          label="I confirm that I've read and agree to the terms and conditions."
        />
      </Box>

      <ActionsContainer>
        <SecondaryButton onClick={handleBack}>Back</SecondaryButton>
        <PrimaryButton onClick={handleNext}>Review</PrimaryButton>
      </ActionsContainer>
    </StepContainer>
  );

  const renderSummary = () => {
    const serviceLabel = SERVICE_OPTIONS.find(opt => opt.value === formData.service)?.label || '-';
    const adjustmentLabel = ADJUSTMENT_OPTIONS.find(opt => opt.value === formData.adjustment_type)?.label;
    const vawaLabel = VAWA_OPTIONS.find(opt => opt.value === formData.vawa_party)?.label;

    return (
      <StepContainer>
        <StepTitle>{isOtherService ? 'Step 3' : 'Step 4'} · Review</StepTitle>
        
        <SummaryContainer>
          <SummaryItem>
            <strong>Service:</strong> {serviceLabel}
          </SummaryItem>
          {formData.service === 'i485_package' && adjustmentLabel && (
            <SummaryItem>
              <strong>Approved Petition:</strong> {adjustmentLabel}
            </SummaryItem>
          )}
          {formData.service === 'i360_i485' && vawaLabel && (
            <SummaryItem>
              <strong>Includes:</strong> {vawaLabel}
            </SummaryItem>
          )}
          <SummaryItem>
            <strong>People:</strong> Party size: {formData.party_count}
          </SummaryItem>
          <SummaryItem>
            <strong>Contact:</strong> {formData.full_name} · {formData.email} · {formData.phone}
          </SummaryItem>
        </SummaryContainer>

        <ActionsContainer>
          <SecondaryButton onClick={handleBack}>Back</SecondaryButton>
          <PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
        </ActionsContainer>
      </StepContainer>
    );
  };

  const renderCurrentStep = () => {
    const stepIndex = flow[currentStep];
    switch (stepIndex) {
      case 0: return renderServiceStep();
      case 1: return renderDetailsStep();
      case 2: return renderContactStep();
      case 3: return renderSummary();
      default: return null;
    }
  };

  return (
    <>
      <FormWrapper>
        <FormCard>
          <FormTitle>Get Started</FormTitle>
          <FormSubtitle>
            Answer a few questions so we can set up the right immigration support for you.
          </FormSubtitle>

          {/* FIX: Call to stepper no longer needs totalSteps prop */}
          <Stepper
            currentStep={currentStep}
            flow={flow}
          />

          {renderCurrentStep()}
        </FormCard>
      </FormWrapper>

      {showAlert && (
        <CustomAlert onClick={handleCloseAlert}>
          <div className="alert-content">
            <div className="alert-title">Success!</div>
            <div className="alert-message">Form submitted successfully!</div>
            <div className="alert-buttons">
              <PrimaryButton onClick={handleCloseAlert}>OK</PrimaryButton>
            </div>
          </div>
        </CustomAlert>
      )}
    </>
  );
}