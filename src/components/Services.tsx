import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Data služeb
const serviceData = [
  {
    id: 1,
    title: "COACHING+",
    price: "2500,-",
    period: "/ 1 měsíc",
    description:
      "Prémiový koučink s osobním tréninkem, kompletním jídelníčkem a maximální podporou.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 service-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    accentClass: "from-primary to-accent",
    features: [
      "1 společný trénink měsíčně",
      "Jídelníček",
      "Tréninkový plán na míru",
      "Video vysvětlivky cviků",
      "2x týdně kontroly",
      "WhatsApp chat",
    ],
  },
  {
    id: 2,
    title: "COACHING CLASSIC",
    price: "2000,-",
    period: "/ 1 měsíc",
    description:
      "Kompletní koučink s jídelníčkem a tréninkovým plánem šitým na míru vašim potřebám.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 service-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    accentClass: "from-accent to-primary",
    features: [
      "Jídelníček",
      "Tréninkový plán na míru",
      "Video vysvětlivky cviků",
      "2x týdně kontroly",
      "WhatsApp chat",
    ],
  },
  {
    id: 3,
    title: "COACHING STUDENT",
    price: "2000,-",
    period: "/ 1. měsíc, dále 1500,-",
    description:
      "Speciální nabídka pro studenty - kompletní koučink za zvýhodněnou cenu.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 service-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    accentClass: "from-primary to-primary",
    features: [
      "Jídelníček",
      "Tréninkový plán na míru",
      "Video vysvětlivky cviků",
      "2x týdně kontroly",
      "WhatsApp chat",
    ],
  },
  {
    id: 4,
    title: "PORADENSTVÍ",
    price: "2500,-",
    period: "/ 1 měsíc",
    description:
      "Specializované poradenství zaměřené na suplementaci, zdraví a optimalizaci vašeho těla.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 service-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    accentClass: "from-accent to-accent",
    features: ["Suplementace", "Optimalizace zdraví", "Odběry"],
  },
  {
    id: 5,
    title: "JÍDELNÍČEK",
    price: "1500,-",
    period: "/ 1 měsíc",
    description:
      "Individualizovaný jídelníček vytvořený na základě vašich preferencí a cílů.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 service-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    accentClass: "from-primary to-accent",
    features: [
      "12 variant pro každé jídlo",
      "Náročnost přípravy dle chuti",
      "Jídla na míru chutím",
      "2x týdně kontroly",
      "WhatsApp chat",
    ],
  },
  {
    id: 6,
    title: "TRÉNINKOVÝ PLÁN",
    price: "2000,-",
    period: "",
    description:
      "Profesionální tréninkový plán sestavený přesně podle vašich cílů a možností.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 service-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    accentClass: "from-accent to-primary",
    features: [
      "Jednorázový",
      "Na míru dle stanovených cílů",
      "Na míru dle vybavení",
      "Na míru dle časových možností",
    ],
  },
];

type Service = {
  title: string;
  price: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  accentClass: string;
  features: string[];
};

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  // Stav pro zobrazení detailů na mobilních zařízeních
  const [isHovered, setIsHovered] = useState(false);

  // Animované tečky v pozadí
  const generateDots = () => {
    const dots = [];
    // Snížený počet teček
    for (let i = 0; i < 6; i++) {
      const size = 3;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 5;

      dots.push(
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: size,
            height: size,
            left: `${x}%`,
            top: `${y}%`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      );
    }
    return dots;
  };

  return (
    <motion.div
      className="group relative flex flex-col bg-zinc-900 rounded-none shadow-lg overflow-hidden h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: 0.2 + index * 0.1,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      // Menší posun při najetí myši
      whileHover={{ y: -5 }}
    >
      {/* Hlavní část karty s gradientem */}
      <div className="relative h-full p-5 overflow-hidden flex flex-col">
        {/* Animovaný gradient na pozadí */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-10"
          animate={{
            opacity: isHovered ? 0.2 : 0.1,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.7 }}
        />

        {/* Animované tečky v pozadí */}
        {generateDots()}

        {/* Horní zvýraznění */}
        <motion.div
          className="absolute inset-x-0 top-0 h-1 bg-primary"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Ikona a název služby v jednom řádku */}
        <div className="flex items-center mb-3">
          <motion.div
            className="mr-3"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          >
            {/* Zmenšená ikona */}
            <div className="p-2 bg-primary/10 rounded-none w-10 h-10 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: isHovered ? [0, 5, -5, 0] : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="text-primary"
              >
                {service.icon}
              </motion.div>
            </div>
          </motion.div>

          {/* Název služby (zarovnání vlevo) */}
          <motion.h3
            // Zmenšená velikost písma
            className="text-2xl font-bold text-white mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
          >
            {service.title}
          </motion.h3>
        </div>

        {/* Cena služby (zarovnání vlevo) */}
        <motion.div
          // Zmenšený odstup
          className="mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 + index * 0.1, duration: 0.5 }}
        >
          {/* Zmenšená velikost písma */}
          <div className="text-2xl font-bold text-white">{service.price}</div>
          <div className="text-xs text-gray-400">{service.period}</div>
        </motion.div>

        {/* Popis služby */}
        <motion.p
          // Zmenšený odstup a text
          className="text-gray-300 mb-3 text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
        >
          {service.description}
        </motion.p>

        {/* Tenká dělicí čára */}
        <motion.div
          // Tenčí čára s menším odstupem
          className="w-full h-px bg-primary my-3"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
        />

        {/* Seznam výhod - kompaktnější */}
        <ul className="space-y-1 mb-4 flex-grow text-base">
          {service.features.map((feature: string, idx: number) => (
            <motion.li
              key={idx}
              className="flex items-center text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7 + index * 0.05 + idx * 0.1,
                duration: 0.5,
              }}
              // Menší posun při najetí
              whileHover={{ x: 3 }}
            >
              <motion.div
                // Zmenšená ikona
                className="flex-shrink-0 w-4 h-4 mr-2 flex items-center justify-center text-primary"
                // Menší zvětšení při najetí
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  // Zmenšená ikona
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </motion.div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Tlačítko pro akci */}
      <div className="mt-auto">
        <Link href="#rezervace" className="block w-full">
          <motion.div
            // Zmenšená výška a text
            className="flex items-center justify-center py-4 bg-primary text-white font-semibold uppercase tracking-wider text-sm"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="mr-2">MÁM ZÁJEM</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              // Zmenšená ikona
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: isHovered ? [0, 5, 0] : 0 }}
              transition={{ repeat: isHovered ? Infinity : 0, duration: 1 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </motion.svg>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="sluzby" className="py-20 bg-zinc-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1.2, 0.8, 1.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      ></motion.div>

      {/* Dodatečné animované pozadí */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animovaná mřížka */}
        <svg className="absolute w-full h-full opacity-[0.02]">
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            ></path>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        {/* Pohyblivé částice */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20 w-2 h-2 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.2, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animovaný nadpis sekce */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h5
            className="text-primary mb-3 text-sm font-semibold uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            MOJE SLUŽBY
          </motion.h5>
          <motion.div className="inline-block">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Co pro tebe{" "}
              <span className="relative inline-block">
                <span className="text-primary">mohu udělat?</span>
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="relative w-24 h-1 bg-primary mx-auto mb-6 overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 bg-primary"
              // animate={{
              //   x: ["-100%", "100%"],
              // }}
              // transition={{
              //   duration: 1.5,
              //   repeat: Infinity,
              //   ease: "easeInOut",
              // }}
            />
          </motion.div>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Nabízím komplexní služby v oblasti fitness a výživy, které ti
            pomohou dosáhnout tvých cílů efektivně a bezpečně.
          </motion.p>
        </motion.div>

        {/* Mřížka služeb */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-zinc-900 p-12 relative">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
              <motion.div
                className="mb-8 md:mb-0 text-center md:text-left max-w-xl"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.h3
                  className="text-3xl font-bold mb-4 text-white relative inline-block"
                  whileInView={{ scale: [1, 1.03, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  Nevíš, jaká služba je pro tebe ta pravá?
                </motion.h3>
                <p className="text-gray-300 text-lg mb-0">
                  Objednej se na nezávaznou konzultaci a společně najdeme
                  řešení, které ti bude vyhovovat nejvíce.
                </p>
              </motion.div>
              <motion.div
                className="w-full md:w-auto"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#rezervace"
                    className="btn bg-primary hover:opacity-90 text-white py-3 px-6 rounded-none flex items-center w-full md:w-auto"
                  >
                    <motion.span
                      className="mr-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: -5 }}
                    >
                      Rezervovat konzultaci
                    </motion.span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </motion.svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative element */}
            <motion.div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-white opacity-30"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
