import { Code, Globe, Computer, ImageIcon, Brain } from "lucide-react";
import { Feature, FeaturesSection } from "@/components/features";

const FEATURES_DATA: Feature[] = [
  {
    title: "Browser Mode",
    description:
      "Everything runs in your browser. No need to install anything.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Self Hosted Mode",
    description:
      "Run your own instance of Bluesky Later easily using a single docker-compose file.",
    icon: <Computer className="w-6 h-6" />,
  },
  {
    title: "Post image",
    description: "Attach images to your posts.",
    icon: <ImageIcon className="w-6 h-6" />,
  },
  {
    title: "Website Social Card",
    description:
      "Automatically detects links and mentions in your posts and generates a social card for them.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Generate Alt Text for Images with AI",
    description:
      "Bring your own Open AI API key to generate alt text for your images.",
    icon: <Brain className="w-6 h-6" />,
  },
];

export function FeaturesWithIcons() {
  return (
    <FeaturesSection
      title="Features"
      description="More goodies are coming"
      features={FEATURES_DATA}
      className="bg-background"
    />
  );
}
