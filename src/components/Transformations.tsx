"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TransformationCardProps {
  name: string;
  service: string;
  duration: string;
  stats?: {
    weightLoss?: string;
    muscleGain?: string;
    bodyFat?: string;
  };
  index: number;
  beforeImage: string;
  afterImage: string;
}

const TransformationCard: React.FC<TransformationCardProps> = ({
  name,
  service,
  duration,
  stats,
  beforeImage,
  afterImage,
  index,
}) => {
  const isOdd = index % 2 !== 0;

  return (
    <div className="bg-zinc-800 rounded-none shadow-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 border-t-4 border-primary">
      <div className="flex flex-col md:flex-row">
        {/* Before/After Images Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-96 overflow-hidden">
            <div className="absolute inset-0 flex">
              {/* Left side - Before */}
              <div className="w-1/2 h-full bg-gray-700 flex flex-col items-center justify-center relative">
                <span className="absolute top-4 left-4 bg-zinc-900 text-white text-xs px-3 py-1 uppercase tracking-wider font-bold z-20">
                  PŘED
                </span>
                <Image
                  src={beforeImage}
                  alt="Before transformation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right side - After */}
              <div className="w-1/2 h-full bg-zinc-800 flex flex-col items-center justify-center relative">
                <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 uppercase tracking-wider font-bold z-20">
                  PO
                </span>
                <Image
                  src={afterImage}
                  alt="Before transformation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Dividing Line */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent via-primary to-accent z-10"></div>

            {/* Timeline bar */}
            <div className="absolute bottom-6 left-0 right-0 px-6 z-20">
              <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-gray-400 uppercase tracking-wide text-xs font-semibold">
                  Den 1
                </span>
                <span className="text-accent uppercase tracking-wide text-xs font-semibold">
                  {duration}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`w-full md:w-1/2 p-8 ${
            isOdd ? "bg-zinc-900" : "bg-zinc-800"
          }`}
        >
          <div className="flex items-center mb-6 border-b pb-4 border-gray-700">
            <div
              className={`w-14 h-14 rounded-none ${
                isOdd ? "bg-primary" : "bg-accent"
              } flex items-center justify-center text-white font-bold text-xl relative overflow-hidden`}
            >
              <span className="relative z-10">{name.charAt(0)}</span>
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-2xl text-white">{name}</h4>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                {service}
              </p>
            </div>
          </div>

          {/* Stats */}
          {stats && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.weightLoss && (
                <div className="text-center p-3 bg-zinc-900 border-l-2 border-primary relative">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Úbytek váhy
                  </p>
                  <p className="font-bold text-xl text-primary">
                    {stats.weightLoss}
                  </p>
                </div>
              )}
              {stats.muscleGain && (
                <div className="text-center p-3 bg-zinc-900 border-l-2 border-accent relative">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Nárůst svalů
                  </p>
                  <p className="font-bold text-xl text-accent">
                    {stats.muscleGain}
                  </p>
                </div>
              )}
              {stats.bodyFat && (
                <div className="text-center p-3 bg-zinc-900 border-l-2 border-red-500 relative">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                    Těl. tuk
                  </p>
                  <p className="font-bold text-xl text-red-500">
                    {stats.bodyFat}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Timeline */}
          <div className="flex items-center mt-6 bg-zinc-900 p-3">
            <div className="mr-3 text-accent">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm text-gray-300 uppercase tracking-wide font-semibold">
              {duration} transformace
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Petr K.",
    service: "Online Coaching Classic",
    duration: "3 měsíce",
    quote:
      "Díky Víťovi jsem konečně pochopil, jak správně jíst a cvičit. Výsledky přišly mnohem rychleji, než jsem očekával.",
    stats: {
      weightLoss: "-12kg",
      bodyFat: "-8%",
    },
    beforeImage: "/transformations/1b.avif",
    afterImage: "/transformations/1a.avif",
  },
  {
    name: "Josef M.",
    service: "Jídelníček + Tréninkový plán",
    duration: "6 měsíců",
    quote:
      "Po třech dětech jsem si myslela, že se už nikdy nedostanu do formy. Mýlila jsem se! Díky odbornému vedení jsem zhubla 15 kg.",
    stats: {
      weightLoss: "-15kg",
      bodyFat: "-12%",
    },
    beforeImage: "/transformations/4b.avif",
    afterImage: "/transformations/4a.avif",
  },
  {
    name: "Tomáš B.",
    service: "Coaching+",
    duration: "4 měsíce",
    quote:
      "Společné tréninky byly přesně to, co jsem potřeboval. Víťa mě naučil správnou techniku a konečně jsem se zbavil bolestí zad.",
    stats: {
      muscleGain: "+5kg",
      bodyFat: "-6%",
    },
    beforeImage: "/transformations/2b.avif",
    afterImage: "/transformations/2a.avif",
  },
  {
    name: "Adam V.",
    service: "Coaching Student",
    duration: "9 měsíců",
    quote:
      "Jako studentka jsem ocenila cenově dostupný coaching, který mi pomohl nejen s postavou, ale i se sebevědomím.",
    stats: {
      weightLoss: "-8kg",
      muscleGain: "+3kg",
    },
    beforeImage: "/transformations/3b.avif",
    afterImage: "/transformations/3a.avif",
  },
];

export default function Transformations() {
  const [activeTab, setActiveTab] = useState<"all" | "men" | "women">("all");

  return (
    <section
      id="promeny"
      className="py-20 bg-zinc-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-primary mb-3 text-sm font-semibold uppercase tracking-wider">
            VÝSLEDKY KLIENTŮ
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Skutečné proměny
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Podívejte se na příběhy klientů, jejichž disciplína a odhodlání
            společně s mým vedením přineslo výjimečné výsledky
          </p>

          {/* Filter tabs */}
          <div className="flex justify-center mt-10 mb-12">
            <div className="inline-flex p-1 bg-zinc-800 rounded-none border border-zinc-700">
              <button
                className={`px-6 py-3 transition-all uppercase tracking-wider text-sm font-bold ${
                  activeTab === "all"
                    ? "bg-primary text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("all")}
              >
                Všechny
              </button>
              <button
                className={`px-6 py-3 transition-all uppercase tracking-wider text-sm font-bold ${
                  activeTab === "men"
                    ? "bg-primary text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("men")}
              >
                Muži
              </button>
              <button
                className={`px-6 py-3 transition-all uppercase tracking-wider text-sm font-bold ${
                  activeTab === "women"
                    ? "bg-primary text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("women")}
              >
                Ženy
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <TransformationCard key={index} index={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-zinc-800 border-t-4 border-primary rounded-none shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold border-2 bg-zinc-800">
                  T
                </div>
                <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-white font-bold">
                  M
                </div>
              </div>
              <div className="ml-5 text-left">
                <p className="font-bold text-xl text-white">
                  Chceš být další úspěšný příběh?
                </p>
                <p className="text-gray-400 tracking-wide">
                  Připoj se k více než 500 spokojeným klientům
                </p>
              </div>
            </div>
            <a href="#rezervace" className="btn btn-primary px-10">
              ZAČNI TRANSFORMACI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
