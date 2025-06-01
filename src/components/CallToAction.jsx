import React from 'react'
import { ArrowRight } from 'lucide-react'
export function CallToAction() {
  return (
    <div className="bg-indigo-600 dark:bg-indigo-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to supercharge your development?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Join thousands of developers who are already using our toolkit to
              build faster and smarter. Get started for free today.
            </p>
            <div className="mt-8 flex space-x-4">
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700"
              >
                View Demo
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <dl className="space-y-10">
              {[
                {
                  stat: '10k+',
                  label: 'Active Developers',
                },
                {
                  stat: '1M+',
                  label: 'Projects Created',
                },
                {
                  stat: '99.9%',
                  label: 'Uptime',
                },
              ].map((item) => (
                <div key={item.label} className="flex">
                  <div>
                    <dt className="text-4xl font-bold text-white">
                      {item.stat}
                    </dt>
                    <dd className="mt-2 text-lg text-indigo-100">
                      {item.label}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
