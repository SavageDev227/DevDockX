import React from 'react'
export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-4 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400">
        <div className="mb-2 md:mb-0">
          © {new Date().getFullYear()} Emerson Tomko. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:text-slate-900 dark:hover:text-slate-100"
          >
            Documentation
          </a>
          <a
            href="#"
            className="hover:text-slate-900 dark:hover:text-slate-100"
          >
            Support
          </a>
          <a
            href="#"
            className="hover:text-slate-900 dark:hover:text-slate-100"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-slate-900 dark:hover:text-slate-100"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
