"use client";

import React, { useState } from 'react';
import { Youtube } from 'lucide-react';

export default function ExploreSection() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleYouTubeSelect = () => {
    window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://www.youtube.com" } }, "*");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (youtubeUrl.trim()) {
      const videoId = extractYouTubeVideoId(youtubeUrl);
      if (videoId) {
        setSelectedVideo(videoId);
      }
    }
  };

  const extractYouTubeVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  return (
    <section className="w-full bg-background pb-12 pt-8 sm:pb-24">
      <div className="container mx-auto px-6 md:px-4 lg:px-24">
        <div className="mb-8 flex flex-col items-center justify-center gap-6">
          <h2 className="text-2xl font-medium text-neutral-800">Select a YouTube Video</h2>
          
          <button
            onClick={handleYouTubeSelect}
            className="flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3 text-white shadow-lg transition-all duration-200 hover:bg-red-700 hover:shadow-xl"
          >
            <Youtube className="h-6 w-6" />
            <span className="font-medium">Browse YouTube</span>
          </button>

          <div className="w-full max-w-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  placeholder="Paste YouTube URL or Video ID here..."
                  className="flex-1 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 placeholder:text-neutral-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
                >
                  Load Video
                </button>
              </div>
            </form>
          </div>
        </div>

        {selectedVideo && (
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
