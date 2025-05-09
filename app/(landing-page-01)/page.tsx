"use client"

import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen h-screen flex flex-col items-center justify-center ">
      {/* 外层大圆角容器 */}
      <div
        className="relative w-full h-full flex flex-col items-center justify-center bg-[#977854]"
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <div
          className="mx-auto my-auto w-[95vw] h-[95vh] flex flex-col bg-[#7B3F00] shadow-2xl"
          style={{
            borderRadius: "2.5rem",
            overflow: "hidden",
            position: "relative",
            maxWidth: "1600px",
            maxHeight: "900px",
          }}
        >
          <header className="sticky top-0 z-40 w-full">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between py-4">
              <div className="flex items-center">
                <a href="/" className="text-white font-bold text-xl">
                  Baldy
                </a>
              </div>
              <div className="flex items-center">
                <Link href="/video" className="text-white">
                  Video
                </Link>
              </div>
              <div className="flex items-center">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF0000] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </header>
          <div
            className="absolute top-16 left-1/2 transform -translate-x-1/2 text-white font-black text-[16rem] tracking-wider select-none pointer-events-none"
            style={{
              fontFamily: 'var(--font-geist-mono)',
              fontWeight: 900,
              textShadow: '6px 6px 12px rgba(0,0,0,0.2)',
              WebkitTextStroke: '0px white',
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              fontStretch: 'condensed',
              zIndex: 1,
              userSelect: "none",
              opacity: 0.15,
              whiteSpace: "nowrap",
            }}
          >
            BALDY
          </div>
          <Image
            src="/baldy.png"
            width={550}
            height={550}
            alt="Old Baldy"
            className="relative -top-8 z-50 transition-transform duration-500 mx-auto"
          />
        </div>
      </div>
    </div>
  )
}
