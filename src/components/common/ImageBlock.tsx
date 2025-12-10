"use client";

import Image from "next/image";

type ImageTextBlockProps = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  lines: string[];
  reverse?: boolean;
  className?: string;
};

export default function ImageBlock({
  imageSrc,
  imageAlt = "",
  title,
  lines,
  reverse = false,
  className = "",
}: ImageTextBlockProps) {
  const imageOrder = reverse ? "md:order-2" : "md:order-1";
  const textOrder = reverse ? "md:order-1" : "md:order-2";

  return (
    <section className={`w-full bg-white py-10 sm:py-16 ${className}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 md:grid md:grid-cols-2 md:items-center">
        <div className={`flex justify-center ${imageOrder}`}>
          <div className="relative w-full max-w-md overflow-hidden rounded-[32px]">
            <div className="relative aspect-square w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className={`text-center md:text-left text-[#111827] ${textOrder}`}>
          <h2 className="text-base font-extrabold sm:text-lg">{title}</h2>

          <div className="mt-2 h-px w-24 bg-[#111827] md:mx-0 mx-auto" />

          <div className="mt-4 space-y-2 text-base leading-relaxed sm:text-lg">
            {lines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
