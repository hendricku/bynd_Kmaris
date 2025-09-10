import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { CardElevation } from "./interface";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    elevation: {
      control: "select",
      options: ["none", "sm", "md"] as CardElevation[],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Default Card Content",
    padding: 16,
    elevation: "md",
    clickable: true,
  },
};

export const WithoutPadding: Story = {
  args: {
    children: "Card without padding",
    padding: 0,
    elevation: "md",
    clickable: true,
  },
};

export const FormCard: Story = {
  args: {
    children: (
      <div style={{ backgroundColor: "#002542", color: "white", padding: "40px", textAlign: "center" }}>
        <h3 style={{ fontSize: "42px", margin: 0 }}>I-485</h3>
        <div style={{ backgroundColor: "white", padding: "4px 12px", margin: "8px 0" }}>
          <span style={{ color: "#FF3B30" }}>ADJUST STATUS</span>
        </div>
        <div>PACKAGE 1</div>
      </div>
    ),
    padding: 0,
    elevation: "md",
    clickable: false,
  },
};

export const NonClickable: Story = {
  args: {
    children: "Non-clickable Card",
    padding: 16,
    elevation: "md",
    clickable: false,
  },
};

export const HighElevation: Story = {
  args: {
    children: "Card with high elevation",
    padding: 16,
    elevation: "lg" as CardElevation,
    clickable: true,
  },
};