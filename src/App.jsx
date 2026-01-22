import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  // Apply dark mode class to <html>
  useEffect(() => {
    const html = document.documentElement
    if (darkMode) html.classList.add('dark')
    else html.classList.remove('dark')
  }, [darkMode])

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center p-8 transition-colors duration-300">
      
      {/* Dark Mode Toggle */}
      <div className="w-full flex justify-end mb-4">

      </div>

      {/* Header Logos */}
      <div className="flex space-x-6 mb-8">

      </div>

      {/* Hero Section */}
      <h1 className="text-5xl font-bold mb-4 text-center">My Portfolio</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl">
        Welcome! Here are some of my projects built with React, Vite, and Tailwind CSS.
      </p>

      {/* Projects Grid */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mb-12">
        {["Project 1", "Project 2", "Project 3"].map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-between"
          >
            <h2 className="text-2xl font-semibold mb-2">{project}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A brief description of {project} goes here.
            </p>
            <button className="mt-auto bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors">
              View Project
            </button>
          </div>
        ))}
      </section>

      {/* Optional Counter */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-green-500 dark:bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-600 dark:hover:bg-green-500 transition-colors"
        >
          Count is {count}
        </button>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 dark:text-gray-400 text-center">
        Click on the Vite and React logos to learn more
      </footer>
    </main>
  )
}

export default App
