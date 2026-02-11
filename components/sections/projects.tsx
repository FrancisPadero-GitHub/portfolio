"use client";

import {
  BarChart3,
  CreditCard,
  FileText,
  Bell,
  MessageSquare,
  BookOpen,
  Film,
  Upload,
  Plane,
  Brain,
  DollarSign,
  PieChart,
} from "lucide-react";

// components
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectCard } from "@/components/projects/ProjectCard";

/* ------------------------------------------------------------------ */
/*  Projects Section                                                   */
/* ------------------------------------------------------------------ */

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A collection of projects I&apos;ve built — from client work to
            personal experiments, each one a learning journey.
          </p>
        </div>

        {/* Featured: DigiTEC */}
        <div className="mb-12">
          <FeaturedProject />
        </div>

        {/* Other projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* WealthWise */}
          <ProjectCard
            title="WealthWise"
            subtitle="Personal Budget Monitoring App"
            description="A full-featured personal finance app that helps users track daily spending, manage budgets with overspending warnings, and visualize spending patterns through charts and analytics."
            demo_link="https://vite-wealthwise.vercel.app/"
            github_link="https://github.com/FrancisPadero-GitHub/vite-wealthwise-final"
            images={["/wealthwise.png", "/wealthwise_1.png"]}
            badge="Fintech"
            features={[
              { icon: DollarSign, label: "Balance Tracking" },
              { icon: PieChart, label: "Visual Analytics" },
              { icon: Bell, label: "Bill Reminders" },
              { icon: CreditCard, label: "Transactions" },
            ]}
            tech={[
              "React 19",
              "Vite",
              "Supabase",
              "MUI",
              "TanStack Query",
              "Vercel",
            ]}
          />

          {/* APSP */}
          <ProjectCard
            title="APSP"
            subtitle="Airline Passenger Satisfaction Prediction"
            description="A Machine Learning project that predicts passenger satisfaction using a Random Forest Classifier. Features a Flask API backend and Streamlit UI for batch CSV predictions."
            github_link="https://github.com/FrancisPadero-GitHub/Airline_Passenger_Satisfaction_Prediction"
            images={["/APSP.png", "/APSP_1.png", "/APSP_2png.png"]}
            badge="ML / Data Science"
            features={[
              { icon: Brain, label: "Random Forest" },
              { icon: Plane, label: "Flight Analysis" },
              { icon: BarChart3, label: "Data Pipeline" },
              { icon: FileText, label: "Batch Predict" },
            ]}
            tech={[
              "Python",
              "Scikit-learn",
              "Flask",
              "Streamlit",
              "Pandas",
              "StandardScaler",
            ]}
          />

          {/* BrewScholar */}
          <ProjectCard
            title="BrewScholar"
            subtitle="Student Hub for Filipino Students"
            description="An all-in-one platform for Filipino students featuring scholarship discovery, budget tracking, entertainment browsing, file hosting, and real-time chat — empowering student life."
            demo_link="https://brewscholar.vercel.app/"
            github_link="https://github.com/FrancisPadero-GitHub/brewscholar"
            images={["/brewscholar.png"]}
            badge="Hobby Project (Development in Progress)"
            features={[
              { icon: BookOpen, label: "Scholarships" },
              { icon: DollarSign, label: "Budget Tracker" },
              { icon: Film, label: "Entertainment" },
              { icon: MessageSquare, label: "Live Chat" },
              { icon: Upload, label: "File Hosting" },
              { icon: Brain, label: "AI Assistant" },
            ]}
            tech={[
              "React 19",
              "Vite",
              "Supabase",
              "Redux Toolkit",
              "TanStack Query",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
