import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center bg-zinc-800 overflow-hidden">
      {/* Dynamic background elements */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <motion.h1
              className="text-5xl md:text-7xl xl:text-8xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              Přetvoř své tělo.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
                Překonej své limity.
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 border-l-4 border-primary pl-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
              }}
            >
              Osobní tréninky, jídelníčky na míru a profesionální online
              coaching pro všechny, kteří jsou připraveni na skutečnou{" "}
              <strong>transformaci</strong>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
                ease: "easeOut",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#rezervace"
                  className="btn btn-primary flex items-center"
                >
                  <span>Začni hned</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-fit"
              >
                <Link href="#sluzby" className="btn btn-outline w-full">
                  Prozkoumat služby
                </Link>
              </motion.div>
            </motion.div>

            {/* Testimonial snippet */}
            <motion.div
              className="mt-12 bg-zinc-900/50 p-4 border-l-4 border-accent max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center">
                <motion.div
                  className="mr-3 text-accent"
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{
                    duration: 2,
                    delay: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </motion.div>
                <p className="text-sm italic text-gray-300">
                  &quot;Díky Víťovi jsem konečně našel cestu ke zdravému
                  životnímu stylu. Změnil mi život.&quot;
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero image with geometric decorations */}
          <motion.div
            className="hidden md:block relative mx-auto w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <div className="w-full h-full max-w-md mx-auto">
              {/* Main image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                {/* Hlavní obrázek trenéra - používáme JPG formát místo AVIF pro lepší podporu */}
                <div className="relative w-full h-full -z-10">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-800 z-10" />
                  <Image
                    src="/coach-image.jpg"
                    alt="Fitness trenér Víťa Hatas"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    quality={90}
                  />
                </div>
              </div>

              {/* Stats cards */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-zinc-900 border-t-4 border-primary px-6 py-4 shadow-lg"
                // initial={{ opacity: 0, x: -30 }}
                // animate={{ opacity: 1, x: 0 }}
                // transition={{
                //   duration: 0.5,
                //   delay: 1.0,
                //   ease: "easeOut"
                // }}
                // whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-primary">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <motion.p
                      className="font-bold text-white text-xl z-50"
                      // initial={{ opacity: 0 }}
                      // animate={{ opacity: 1 }}
                      // transition={{
                      //   duration: 0.8,
                      //   delay: 1.3,
                      //   ease: "easeOut"
                      // }}
                    >
                      <motion.span
                      // initial={{ opacity: 0 }}
                      // animate={{ opacity: 1 }}
                      // transition={{
                      //   duration: 2,
                      //   delay: 1.4,
                      //   ease: "easeInOut"
                      // }}
                      >
                        99<span className="text-accent">%</span>
                      </motion.span>
                    </motion.p>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">
                      úspěšnost
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                className="absolute -top-6 right-24 bg-zinc-900 border-t-4 border-accent px-6 py-4 shadow-lg"
                // initial={{ opacity: 0, x: 30 }}
                // animate={{ opacity: 1, x: 0 }}
                // transition={{
                //   duration: 0.5,
                //   delay: 1.0,
                //   ease: "easeOut"
                // }}
                // whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
              >
                <motion.p
                  className="font-bold text-white text-xl"
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{
                  //   duration: 0.8,
                  //   delay: 1.3,
                  //   ease: "easeOut"
                  // }}
                >
                  <motion.span
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{
                  //   duration: 2,
                  //   delay: 1.4,
                  //   ease: "easeInOut"
                  // }}
                  >
                    10<span className="text-accent">+</span>
                  </motion.span>
                </motion.p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  let zkušeností
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
