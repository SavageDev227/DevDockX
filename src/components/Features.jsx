import {
  Code2,
  Terminal,
  Database,
  Server,
  GitBranch,
  Gauge,
  Shield,
  Zap,
} from "lucide-react";
import React from "react";

const features = [
  {
    name: "Code Editor",
    description:
      "Advanced code editing with syntax highlighting and intelligent completetions.",
    icon: Code2,
    color: "text-indigo-500",
  },
  {
    name: "Integrated Terminal",
    description: "Full-featured command line interface right in your browser.",
    icon: Terminal,
    color: "text-emerald-500",
  },
  {
    name: "Database Management",
    description:
      "Connect and manage your databases with a powerful visual interface.",
    icon: Database,
    color: "text-amber-500",
  },
  {
    name: "API Testing",
    description:
      "Test and debug your APIs with advanced request building and monitoring.",
    icon: Server,
    color: "text-blue-500",
  },
  {
    name: "Git Integration",
    description:
      "Seamless version control with built-in Git commands and visualization.",
    icon: GitBranch,
    color: "text-purple-500",
  },
  {
    name: "Performance Metrics",
    description: "Real-time monitoring and insights for your applications.",
    icon: Gauge,
    color: "text-red-500",
  },
  {
    name: "Security Tools",
    description:
      "Built-in security scanning and vulnerability assessment tools.",
    icon: Shield,
    color: "text-teal-500",
  },
  {
    name: "Quick Deploy",
    description:
      "Deploy your applications with one click to major cloud providers.",
    icon: Zap,
    color: "text-orange-500",
  },
];

export function Features() {
  return (
    <div className="py-24 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Everything you need to build faster
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            A comprehensive suite of development tools designed to streamline
            your workflow and boost productivity.
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="h-full rounded-lg border border-slate-200 dark:border-slate-700 p-6 flex flex-col">
                  <div>
                    <span
                      className={`inline-flex p-3 rounded-md ${feature.color} bg-slate-100 dark:bg-slate-700`}
                    >
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-slate-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-slate-500 dark:text-slate-400 flex-grow">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
