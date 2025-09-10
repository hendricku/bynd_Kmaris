"use client";

import React from "react";
import Footer from "@/components/Footer/Footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <main>{children}</main>
      <Footer />
    </section>
  );
}