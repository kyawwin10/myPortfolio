"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  gradientClass: string;
  githubUrl?: string;
  githubUrls?: string[];
  demoUrl?: string;
  demoImages?: string[];
};

export default function ProjectCard({
  title,
  description,
  tech,
  gradientClass,
  githubUrl,
  githubUrls,
  demoUrl,
  demoImages,
}: ProjectCardProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const demoNavigation = ["Home", "Body & Bath", "Men", "Hair", "Makeup", "SkinCare"];

  const repositoryLinks = githubUrls?.length
    ? githubUrls.map((url, index) => ({
        label: githubUrls.length > 1 ? `GitHub ${index + 1}` : "GitHub",
        url,
      }))
    : githubUrl
      ? [{ label: "GitHub", url: githubUrl }]
      : [];

  const hasDemoGallery = demoUrl === "#" && Boolean(demoImages?.length);
  const hasExternalDemo = demoUrl && demoUrl !== "#";

  const openGallery = () => {
    setActiveImage(0);
    setIsGalleryOpen(true);
  };

  const showPreviousImage = () => {
    if (!demoImages?.length) {
      return;
    }

    setActiveImage((currentIndex) =>
      currentIndex === 0 ? demoImages.length - 1 : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    if (!demoImages?.length) {
      return;
    }

    setActiveImage((currentIndex) =>
      currentIndex === demoImages.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <>
      <div className="group flex flex-col overflow-hidden rounded-2xl border border-grey-blue-leaf/30 bg-purple-shadow transition-all hover:-translate-y-1 hover:border-grey-blue-leaf/60">
        <div className={`h-1.5 w-full ${gradientClass}`} />

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-[#67d9f0]">
            {title}
          </h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-[#a0b4cc]">
            {description}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-grey-blue-leaf/30 bg-blue-popsicle px-2.5 py-1 text-xs font-medium text-[#c8d4e8]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {repositoryLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-grey-blue-leaf transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.43 11.43 0 013 .4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
                {link.label}
              </a>
            ))}

            {hasExternalDemo && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-grey-blue-leaf transition-colors hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            )}

            {hasDemoGallery && (
              <button
                type="button"
                onClick={openGallery}
                className="flex items-center gap-1.5 rounded-full border border-slate-300 bg-[#ffff00] px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.55-2.27A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.89L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Live Demo
              </button>
            )}
          </div>
        </div>
      </div>

      {isGalleryOpen && demoImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/55 p-3 backdrop-blur-sm sm:p-4"
          onClick={() => setIsGalleryOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-slate-200 bg-[#c9c9c9] shadow-[0_24px_80px_rgba(15,23,42,0.18)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsGalleryOpen(false)}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 sm:right-4 sm:top-4"
              aria-label="Close live demo"
            >
              ×
            </button>
            <div className="bg-white px-4 py-4 sm:px-6 sm:py-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4f5f76]">
                      Ecommerce and POS System
                    </p>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                    {activeImage + 1} / {demoImages.length}
                  </div>
                </div>

                <div className="relative mx-auto flex w-full max-w-5xl items-center justify-center">
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl text-slate-700 shadow-sm transition-colors hover:bg-slate-100 sm:left-3"
                    aria-label="Show previous demo image"
                  >
                    ‹
                  </button>

                  <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white sm:h-72 md:h-96 lg:h-128">
                    <Image
                      src={demoImages[activeImage]}
                      alt={`${title} demo ${activeImage + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 900px"
                      className="object-contain"
                      priority
                    />
                  </div>

                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl text-slate-700 shadow-sm transition-colors hover:bg-slate-100 sm:right-3"
                    aria-label="Show next demo image"
                  >
                    ›
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                  {demoImages.map((image, index) => (
                    <button
                      key={`${image}-dot`}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeImage === index
                          ? "w-7 bg-slate-900"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Show demo image ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {demoImages.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`overflow-hidden rounded-2xl border bg-white text-left transition-all ${
                        activeImage === index
                          ? "border-slate-900 shadow-sm"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-50">
                        <Image
                          src={image}
                          alt={`${title} thumbnail ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 220px"
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="px-3 py-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                          Screen {index + 1}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}