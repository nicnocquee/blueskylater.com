import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface FeaturesSectionProps {
  title?: string;
  description?: string;
  features: Feature[];
  className?: string;
}

export function FeaturesSection({
  title = "Features",
  description = "Discover what makes us different",
  features,
  className,
}: FeaturesSectionProps) {
  return (
    <section className={cn("py-16 px-4 md:px-6 lg:px-8", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border bg-card hover:shadow-lg transition-shadow duration-200"
            >
              {feature.icon && (
                <div className="p-6 flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
