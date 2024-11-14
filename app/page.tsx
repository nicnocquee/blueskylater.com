import { FeaturesWithIcons } from "@/components/blueskylater-features";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bluesky Later",
  description: "An open source project to schedule posts to Bluesky",
  openGraph: {
    title: "Bluesky Later",
    description: "An open source project to schedule posts to Bluesky",
  },
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col text-center gap-8 row-start-2 items-center">
        <h1 className="w-full text-7xl sm:text-9xl font-bold tracking-tight">
          Bluesky Later
        </h1>
        <p className="w-full text-muted-foreground text-2xl">
          An open source project to schedule posts to Bluesky
        </p>
        <a href="https://app.blueskylater.com">
          <Button>Get started</Button>
        </a>
        <FeaturesWithIcons />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/nicnocquee/bluesky-later"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Source code
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/nicnocquee/bluesky-later?tab=readme-ov-file#self-hosted-mode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          How to self host
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://bsky.app/profile/nico.fyi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Follow @nico.fyi →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.nico.fyi/blog/bluesky-later-schedule-bluesky-post-in-the-future"
          target="_blank"
          rel="noopener noreferrer"
        >
          Why Bluesky Later?
        </a>
      </footer>
    </div>
  );
}
