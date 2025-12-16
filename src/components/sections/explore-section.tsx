"use client";

import React from 'react';
import Image from 'next/image';
import { RotateCw, ChevronDown, Play, AlignLeft } from 'lucide-react';

const CATEGORIES = [
  "For You",
  "Education",
  "Arts, Design & Media",
  "Languages & Literature",
  "History & Archaeology",
  "Philosophy & Ethics",
  "Social & Behavioural Sciences",
  "Journalism & Information",
  "Business Administration",
  "Law"
];

const EXPLORE_ITEMS = [
  {
    title: "Corporations and Human Rights: A Theory of Legal Responsibility",
    timestamp: "9 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/images/images_1.png",
    type: "doc"
  },
  {
    title: "Introduction to Cell Biology",
    timestamp: "9 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/images/images_2.png",
    type: "doc"
  },
  {
    title: "Let's build GPT: from scratch, in code, spelled out.",
    timestamp: "9 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/images/images_3.png",
    type: "video"
  },
  {
    title: "Introduction To Galani Nelson's Lecture On Advanced Algorithms",
    timestamp: "9 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/images/images_4.png",
    type: "video"
  },
  {
    title: "Cognitive Psychology: An Introduction",
    timestamp: "9 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/images/images_5.png",
    type: "doc"
  },
  {
    title: "Think Fast, Talk Smart: Communication Techniques",
    timestamp: "9 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/images/images_6.png",
    type: "video"
  },
  {
    title: "How To Find The Range of a Function",
    timestamp: "9 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/images/akZGL924As3rGPy-7.png",
    type: "video"
  },
  {
    title: "Teaching CS50 with AI",
    timestamp: "9 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/images/0fg7R7eERm8VUn3-8.png",
    type: "doc"
  },
  {
    title: "The British Empire",
    timestamp: "7 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/images/maxresdefault-9.webp",
    type: "doc"
  },
  {
    title: "But what is a neural network? | Deep learning chapter 1",
    timestamp: "9 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/images/hqdefault-10.jpg",
    type: "video"
  }
];

export default function ExploreSection() {
  return (
    <section className="w-full bg-background pb-12 pt-8 sm:pb-24">
      <div className="container mx-auto px-6 md:px-4 lg:px-24">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-medium text-neutral-800">Explore</h2>
            <button className="text-neutral-400 hover:text-neutral-600 transition-colors">
              <RotateCw className="h-4 w-4" />
            </button>
          </div>
          <a href="#" className="text-sm font-medium text-neutral-500 hover:text-neutral-800 transition-colors">
            View all
          </a>
        </div>

        <div className="mb-8 flex w-full space-x-2 overflow-x-auto pb-2 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none]">
          {CATEGORIES.map((category, index) => (
            <button
              key={category}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-colors duration-200 ${
                index === 0
                  ? "bg-neutral-900 text-white"
                  : "border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {EXPLORE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:shadow-md cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                
                {item.type === 'video' && (
                   <div className="absolute inset-0 z-10 hidden items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 sm:flex">
                     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                       <Play className="h-5 w-5 fill-white text-white" />
                     </div>
                   </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0 text-neutral-400">
                    {item.type === 'video' ? (
                      <Play className="h-4 w-4" />
                    ) : (
                      <AlignLeft className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="line-clamp-2 text-sm font-medium leading-snug text-neutral-700 transition-colors group-hover:text-black">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {item.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex w-full justify-center">
          <button className="flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-800 transition-colors">
            Show More
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
