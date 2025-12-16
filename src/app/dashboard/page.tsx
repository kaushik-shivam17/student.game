'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="border-b border-zinc-800 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              YouLearn
            </h1>
            <div className="flex items-center gap-4">
              <button className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:border-zinc-600">
                Settings
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Tabs */}
        <div className="mb-8 flex gap-2 border-b border-zinc-800">
          {['overview', 'courses', 'progress'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-3 text-sm font-medium capitalize transition ${
                activeTab === tab
                  ? 'text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Stats Cards */}
            {[
              { label: 'Total Courses', value: '12' },
              { label: 'Hours Learned', value: '48' },
              { label: 'Achievements', value: '23' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-700"
              >
                <div className="relative">
                  <p className="text-sm text-zinc-400">{stat.label}</p>
                  <p className="mt-2 text-4xl font-bold text-white">{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((course) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: course * 0.05 }}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-700"
              >
                <div className="mb-4 h-32 rounded-lg bg-zinc-900" />
                <h3 className="text-lg font-semibold text-white">Course {course}</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Learn advanced concepts with AI-powered tutoring
                </p>
                <button className="mt-4 w-full rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200">
                  Continue Learning
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
            <h2 className="mb-6 text-2xl font-bold text-white">Your Learning Progress</h2>
            <div className="space-y-6">
              {[
                { subject: 'Mathematics', progress: 75 },
                { subject: 'Physics', progress: 60 },
                { subject: 'Chemistry', progress: 45 },
                { subject: 'Biology', progress: 90 },
              ].map((item) => (
                <div key={item.subject}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-zinc-300">{item.subject}</span>
                    <span className="text-white">{item.progress}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
