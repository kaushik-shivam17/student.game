'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              YouLearn
            </h1>
            <div className="flex items-center gap-4">
              <button className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white/5">
                Settings
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Tabs */}
        <div className="mb-8 flex gap-2 border-b border-white/10">
          {['overview', 'courses', 'progress'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-3 text-sm font-medium capitalize transition ${
                activeTab === tab
                  ? 'text-purple-400'
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
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
              { label: 'Total Courses', value: '12', color: 'from-purple-500 to-pink-500' },
              { label: 'Hours Learned', value: '48', color: 'from-blue-500 to-cyan-500' },
              { label: 'Achievements', value: '23', color: 'from-green-500 to-emerald-500' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition group-hover:opacity-10`} />
                <div className="relative">
                  <p className="text-sm text-white/60">{stat.label}</p>
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
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-purple-500/50"
              >
                <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                <h3 className="text-lg font-semibold text-white">Course {course}</h3>
                <p className="mt-2 text-sm text-white/60">
                  Learn advanced concepts with AI-powered tutoring
                </p>
                <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white transition hover:shadow-lg hover:shadow-purple-500/50">
                  Continue Learning
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
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
                    <span className="text-white/80">{item.subject}</span>
                    <span className="text-purple-400">{item.progress}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
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
