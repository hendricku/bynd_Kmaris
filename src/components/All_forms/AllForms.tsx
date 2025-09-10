"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import { AllFormsProps, Form } from "./interface";
import formsData from "@/json/allforms.json";

import { PageWrapper, Container, Grid, TabsWrapper, Tabs, Tab, FormHeader, FormId, StatusBadge, StatusText, PackageText, FormContent, FormTitle } from "./elements";
import { AppButton } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { Footer } from "@/components/Footer/Footer";

const tabs = ["ALL FORMS", "FILING SERVICES", "FORM I130", "FORM N400", "ALL EBOOK"];

export function AllForms({ items = [] }: AllFormsProps) {
  const [activeTab, setActiveTab] = useState("ALL FORMS");
  const [requesting, setRequesting] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  const activeFormsFromJSON = useMemo(() => {
    return (formsData.forms as Form[]).filter((form: Form) => form.status === 'active');
  }, []);

  const formsToDisplay = items.length > 0 ? items.filter(form => form.status === 'active') : activeFormsFromJSON;

  const handleRequestForm = async (form: Form) => {
    // ... your existing handleRequestForm logic remains the same ...
  };

  const filteredForms = useMemo(() => {
    if (activeTab === "ALL FORMS") {
      return formsToDisplay;
    }
    return formsToDisplay.filter((form) => {
      if (activeTab === "FILING SERVICES") {
        return form.type === "filing-service";
      }
      if (activeTab === "FORM I130") {
        return form.title.includes("I-130");
      }
      if (activeTab === "FORM N400") {
        return form.title.includes("N-400");
      }
      if (activeTab === "ALL EBOOK") {
        return form.type === "ebook";
      }
      return false;
    });
  }, [activeTab, formsToDisplay]);

  return (
    <>
      <PageWrapper>
        <Container>
          <TabsWrapper>
            <Tabs>
              {tabs.map((tab) => (
                <Tab key={tab} $active={tab === activeTab} onClick={() => setActiveTab(tab)}>
                  {tab}
                </Tab>
              ))}
            </Tabs>
          </TabsWrapper>
          <Grid>
            {filteredForms.map((form) => (
              <Card key={form.id} padding={0} clickable={false} elevation="sm">
                <FormHeader>
                  <FormId>{form.title}</FormId>
                  <StatusBadge>
                    <StatusText>{form.type}</StatusText>
                  </StatusBadge>
                  {form.package && <PackageText>{form.package}</PackageText>}
                </FormHeader>
                <FormContent>
                  <FormTitle>{form.subtitle}</FormTitle>
                  <AppButton
                    label={requesting[form.id] ? 'Requesting...' : 'Request Form'}
                    onClick={() => handleRequestForm(form)}
                    disabled={requesting[form.id]}
                    size="medium"
                    long
                  />
                </FormContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </PageWrapper>
      <Footer />
    </>
  );
}