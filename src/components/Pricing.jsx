import React from "react";
import { Check } from "lucide-react";
const tiers = [
  {
    name: "Hobby",
    price: 0,
    description: "Perfect for side projects and learning.",
    features: [
      "Basic code editor",
      "Command line interface",
      "Public repositories",
      "Community support",
    ],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Pro",
    price: 15,
    description: "For professional developers and small teams.",
    features: [
      "Advanced IDE features",
      "Database management",
      "API testing tools",
      "Git integration",
      "Priority support",
      "Team collaboration",
    ],
    cta: "Start Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: 49,
    description: "For large teams and organizations.",
    features: [
      "Custom deployment options",
      "Advanced security features",
      "Audit logs",
      "SSO integration",
      "24/7 phone support",
      "SLA guarantees",
      "Custom contracts",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];
export function Pricing() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-slate-500 dark:text-slate-400">
            Choose the plan that best fits your needs
          </p>
        </div>
        <div className="mt-20 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm flex flex-col ${
                tier.featured
                  ? "ring-2 ring-indigo-600 dark:ring-indigo-400"
                  : ""
              }`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {tier.name}
                </h3>
                {tier.featured && (
                  <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white">
                    Most Popular
                  </p>
                )}
                <p className="mt-4 flex items-baseline text-slate-900 dark:text-white">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-slate-500 dark:text-slate-400">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-5 h-5 text-emerald-500" />
                      <span className="ml-3 text-slate-500 dark:text-slate-400">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className={`mt-8 block w-full py-3 px-6 border rounded-md text-center text-sm font-medium ${
                  tier.featured
                    ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700"
                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
