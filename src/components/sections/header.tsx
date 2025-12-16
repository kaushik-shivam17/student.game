"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown } from "lucide-react";
import { useAuth } from '@/contexts/auth-context';

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 left-0 md:left-2 right-0 z-40 bg-background transition-all duration-300">
      <div className="mx-auto px-2 lg:px-4">
        <div className="py-2 lg:hidden">
          <div className="flex items-center justify-between gap-2">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-full border-none hover:bg-secondary/80 h-10 w-10"
              aria-label="Open navigation menu"
            >
              <Menu width={20} height={20} />
            </button>
            <div className="ml-auto">
              <div className="flex min-h-10 flex-row items-center space-x-2">
                <button
                  role="combobox"
                  className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-fit [&>span]:line-clamp-1"
                  aria-label="common.currentLanguage"
                >
                  <span className="flex items-center">
                    <span className="mr-2 text-xl">🇺🇸 🇬🇧</span>
                    <span className="sr-only">english</span>
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </button>
                {user ? (
                  <div className="flex items-center gap-2">
                    {user.user_metadata?.avatar_url && (
                      <img
                        src={user.user_metadata.avatar_url}
                        alt={user.user_metadata?.full_name || 'User'}
                        className="h-8 w-8 rounded-full border border-neutral-200"
                      />
                    )}
                    <button
                      onClick={signOut}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 bg-primary text-secondary hover:bg-primary/90 hover:text-secondary/90"
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <Link href="/signin">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 bg-primary text-secondary hover:bg-primary/90 hover:text-secondary/90">
                      Sign in
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden py-2 lg:flex lg:flex-col">
          <div className="relative flex items-center justify-between">
            <div className="flex min-w-0 flex-1 items-center space-x-0">
              <div className="my-auto hidden items-center justify-center space-x-4 lg:flex mr-3">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-md border-none">
                  <Menu className="h-5 w-5" />
                </button>
                <Link className="w-fit" href="/">
                  <Image
                    alt="youlearn-logo"
                    width={30}
                    height={30}
                    className="dark:hidden"
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/icons/youlearn-1.png"
                  />
                  <Image
                    alt="youlearn-logo"
                    width={30}
                    height={30}
                    className="hidden dark:block"
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/795fd314-64cd-40c3-a9bb-ad14e39c3346-app-youlearn-ai/assets/icons/youlearn-dark-2.png"
                  />
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="flex min-h-10 flex-row items-center space-x-2">
                <button
                  role="combobox"
                  className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-fit [&>span]:line-clamp-1"
                  aria-label="common.currentLanguage"
                >
                  <span className="flex items-center">
                    <span className="mr-2 text-xl">🇺🇸 🇬🇧</span>
                    <span className="sr-only">english</span>
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </button>
                {user ? (
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      {user.user_metadata?.avatar_url && (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt={user.user_metadata?.full_name || 'User'}
                          className="h-8 w-8 rounded-full border border-neutral-200"
                        />
                      )}
                      <span className="text-sm font-medium text-neutral-700">
                        {user.user_metadata?.full_name || user.email}
                      </span>
                    </div>
                    <button
                      onClick={signOut}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 bg-primary text-secondary hover:bg-primary/90 hover:text-secondary/90"
                    >
                      Sign out
                    </button>
                  </div>
                ) : (
                  <Link href="/signin">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border border-input h-10 px-4 py-2 bg-primary text-secondary hover:bg-primary/90 hover:text-secondary/90">
                      Sign in
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
