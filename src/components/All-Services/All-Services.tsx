"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from 'next/navigation';

import { AllFormsProps, Form } from "./interface";
import formsData from "@/json/allforms.json";

import { PageWrapper, Container, Grid, TabsWrapper, Tabs, Tab, FormHeader, FormId, PackageText, FormContent, FormTitle } from "./elements";
import { Pill } from "../Pills/Pill";
import { AppButton } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { Footer } from "@/components/Footer/Footer";

const tabs = ["ALL SERVICES", "FAMILY PETITION", "ADJUSTMENT OF STATUS","OTHER SERVICES"];

export function AllForms({ items = [] }: AllFormsProps) {
  const [activeTab, setActiveTab] = useState("ALL SERVICES");
  const router = useRouter();

  const activeFormsFromJSON = useMemo(() => {
    return (formsData.forms as Form[]).filter((form: Form) => form.status === 'active');
  }, []);

  const formsToDisplay = items.length > 0 ? items.filter(form => form.status === 'active') : activeFormsFromJSON;

  const handleRequestForm = (formId: string) => {
    router.push(`https://kmaris-user-app.vercel.app/steps?formId=${formId}`);
  };

  const filteredForms = useMemo(() => {
    if (activeTab === "ALL SERVICES") {
      return formsToDisplay;
    }
    return formsToDisplay.filter((form) => {
      if (activeTab === "FAMILY PETITION") {
        return form.type === "FAMILY PETITION";
      }
      if (activeTab === "ADJUSTMENT OF STATUS") {
        return form.type === "ADJUSTMENT OF STATUS";
      }
      if (activeTab === "OTHER SERVICES") {
        return form.type === "OTHER SERVICES";
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
                  <Pill label={form.type} />
                  {form.package && <PackageText>{form.package}</PackageText>}
                </FormHeader>
                <FormContent>
                  <FormTitle>{form.subtitle}</FormTitle>
                  <AppButton
                    label={'Order to File Now'}
                    onClick={() => handleRequestForm(form.id)}
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