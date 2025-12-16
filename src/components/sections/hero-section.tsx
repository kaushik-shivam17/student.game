"use client";

import { Upload, Link2, Mic, ArrowUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center mb-12 mt-12 sm:mb-24 sm:mt-20 sm:gap-3 px-6 sm:px-10 lg:px-24">
      <div className="mb-3 flex flex-col items-center gap-2">
        <h2 className="text-center text-xl font-normal sm:text-3xl xl:text-4xl text-neutral-800">
          What do you want to learn?
        </h2>
      </div>

      <div className="z-30 flex flex-col text-center w-full md:max-w-[512px] xl:max-w-[672px]">
        <div className="grid w-full grid-cols-1 gap-3 sm:flex sm:items-center sm:justify-center">
          
          <div className="w-full flex-1 sm:w-1/3">
            <div className="border border-neutral-200 text-neutral-800 group relative cursor-pointer rounded-3xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:bg-neutral-50/50">
              <div className="absolute right-2 top-2 z-20 rounded-md border border-[#3CB371]/50 bg-[#3CB371]/10 px-2 py-0.5 text-xs font-medium text-[#3CB371]">
                Popular
              </div>
              <div className="flex flex-col items-start justify-center gap-y-1 p-4 px-5 sm:h-[112px] sm:flex-col">
                <div className="flex items-center gap-x-3 space-y-2 sm:block w-full">
                  <Upload className="h-6 w-6 flex-shrink-0 text-primary/70 transition-colors group-hover:text-primary sm:mb-2" />
                  <div className="flex flex-col justify-center sm:items-start">
                    <div className="flex items-center gap-x-1">
                      <h3 className="text-left text-sm font-medium text-primary/70 transition-colors group-hover:text-primary sm:text-base">
                        Upload
                      </h3>
                    </div>
                    <p className="text-left text-xs text-primary/50 transition-colors group-hover:text-primary/80 sm:text-sm">
                      File, audio, video
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex-1 sm:w-1/3">
            <div className="border border-neutral-200 text-neutral-800 group relative cursor-pointer rounded-3xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:bg-neutral-50/50">
              <div className="flex flex-col items-start justify-center gap-y-1 p-4 px-5 sm:h-[112px] sm:flex-col">
                <div className="flex items-center gap-x-3 space-y-2 sm:block w-full">
                  <Link2 className="h-6 w-6 flex-shrink-0 text-primary/70 transition-colors group-hover:text-primary sm:mb-2" />
                  <div className="flex flex-col justify-center sm:items-start">
                    <div className="flex items-center gap-x-1">
                      <h3 className="text-left text-sm font-medium text-primary/70 transition-colors group-hover:text-primary sm:text-base">
                        Paste
                      </h3>
                    </div>
                    <p className="text-left text-xs text-primary/50 transition-colors group-hover:text-primary/80 sm:text-sm">
                      YouTube, website, text
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex-1 sm:w-1/3">
            <div className="border border-neutral-200 text-neutral-800 group relative cursor-pointer rounded-3xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.02)] transition-all duration-200 hover:bg-neutral-50/50">
              <div className="flex flex-col items-start justify-center gap-y-1 p-4 px-5 sm:h-[112px] sm:flex-col">
                <div className="flex items-center gap-x-3 space-y-2 sm:block w-full">
                  <Mic className="h-6 w-6 flex-shrink-0 text-primary/70 transition-colors group-hover:text-primary sm:mb-2" />
                  <div className="flex flex-col justify-center sm:items-start">
                    <div className="flex items-center gap-x-1">
                      <h3 className="text-left text-sm font-medium text-primary/70 transition-colors group-hover:text-primary sm:text-base">
                        Record
                      </h3>
                    </div>
                    <p className="text-left text-xs text-primary/50 transition-colors group-hover:text-primary/80 sm:text-sm">
                      Record class, video call
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-6 w-full relative">
          <div className="relative flex items-center w-full h-12 rounded-full border border-neutral-200 bg-white px-2 shadow-[0_4px_10px_rgba(0,0,0,0.02)] focus-within:border-neutral-300 transition-colors">
            <input 
              type="text" 
              placeholder="Learn anything" 
              className="flex-1 bg-transparent px-4 text-base outline-none placeholder:text-primary/50 text-neutral-800"
            />
            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/40 text-white hover:bg-primary/50 transition-colors">
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
