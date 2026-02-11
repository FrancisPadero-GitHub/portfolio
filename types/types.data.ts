export interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  features: { icon: React.ElementType; label: string }[];
  tech: string[];
  badge?: string;
  badgeVariant?: "default" | "secondary" | "outline" | "destructive";
  github_link?: string; // makes the requirement optional
  demo_link?: string;
}
