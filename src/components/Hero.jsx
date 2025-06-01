import React from 'react'
import { Terminal, Code2, Database, Zap } from 'lucide-react'
export function Hero() {
  return (
    <div className="relative overflow-hidden pt-16 pb-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                Developer Toolkit Platform
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-slate-900 dark:text-white">
                  All Your Dev Tools
                </span>
                <span className="block text-indigo-600 dark:text-indigo-400">
                  In One Place
                </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-slate-500 dark:text-slate-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Streamline your development workflow with our comprehensive
              toolkit. Code, test, and deploy faster with integrated developer
              tools and real-time analytics.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:bg-slate-800 dark:text-indigo-400 dark:hover:bg-slate-700"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-slate-800 rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700 p-4 rounded-lg flex flex-col items-center justify-center">
                      <Terminal className="h-8 w-8 text-indigo-400 mb-2" />
                      <span className="text-sm text-slate-300">Terminal</span>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg flex flex-col items-center justify-center">
                      <Code2 className="h-8 w-8 text-emerald-400 mb-2" />
                      <span className="text-sm text-slate-300">Editor</span>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg flex flex-col items-center justify-center">
                      <Database className="h-8 w-8 text-amber-400 mb-2" />
                      <span className="text-sm text-slate-300">Database</span>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg flex flex-col items-center justify-center">
                      <Zap className="h-8 w-8 text-purple-400 mb-2" />
                      <span className="text-sm text-slate-300">API</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
