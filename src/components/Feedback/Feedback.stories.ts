import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Feedback } from "./Feedback";

const meta: Meta<typeof Feedback> = {
  title: "Components/Feedback",
  component: Feedback,
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof Feedback>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        name: "KUMAN TUNMAN",
        role: "LOREM IPSUM",
        avatarSrc: "/red.png",
        rating: 5,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      },
      {
        id: 2,
        name: "MADISON OLIVIA",
        role: "LOREM IPSUM",
        avatarSrc: "/blackk.png",
        rating: 5,
        text:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
        showIndicators: true,
      },
    ],
  },
};