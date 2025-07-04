import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  icon?: React.ReactNode;
}

const StatCounter: React.FC<StatProps> = ({
  value,
  label,
  suffix = "",
  prefix = "",
  duration = 2000,
  icon,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Math.floor(value);
    const incrementTime = Math.abs(Math.floor(duration / end));
    let timer: NodeJS.Timeout;

    if (start === end) return;

    const run = () => {
      timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);
    };

    // Start counter when the component is in view
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        run();
        observer.disconnect();
      }
    });

    observer.observe(
      document.getElementById(
        `stat-${label.replace(/\s+/g, "-").toLowerCase()}`
      ) as Element
    );

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, label]);

  return (
    <motion.div
      id={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className="relative p-4 md:p-8 bg-zinc-800/70 rounded-none border-t-4 border-primary shadow-lg transition-transform duration-300 hover:-translate-y-2 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Background pulse effect */}
      <motion.div
        className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      {icon && (
        <motion.div
          className="absolute top-4 right-4 text-primary opacity-50 group-hover:scale-110 transition-transform duration-300"
          initial={{ rotate: -10, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {icon}
        </motion.div>
      )}

      <div className="text-3xl md:text-5xl font-extrabold text-white mb-3 flex items-end relative">
        <motion.span
          className="text-primary mr-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {prefix}
        </motion.span>
        <motion.span
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          {count}
        </motion.span>
        <motion.span
          className="text-accent ml-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          {suffix}
        </motion.span>
      </div>

      <motion.div
        className="text-gray-400 font-medium uppercase tracking-wider text-sm group-hover:text-white transition-colors duration-300 flex items-center"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <motion.span
          className="w-3 h-0.5 bg-primary mr-2 transition-all duration-300 group-hover:w-5"
          initial={{ width: 0 }}
          whileInView={{ width: 12 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        ></motion.span>
        {label}
      </motion.div>
    </motion.div>
  );
};

export default function Statistics() {
  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h5
            className="text-primary mb-3 text-sm md:text-base font-semibold uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            DŮKAZ KVALITY
          </motion.h5>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Výsledky, které <br className="block md:hidden" />
            <span className="text-primary">mluví za vše</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p
            className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Čísla, která dokazují efektivitu mých metod a odhodlání mých klientů
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <StatCounter
            value={500}
            label="Spokojených klientů"
            suffix="+"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
          />

          <StatCounter
            value={99}
            label="Úspěšnost"
            suffix="%"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />

          <StatCounter
            value={10}
            label="Let zkušeností"
            suffix="+"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            }
          />

          <StatCounter
            value={5000}
            label="Hodin tréninků"
            suffix="+"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#kontakt"
            className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/80 text-white font-bold uppercase tracking-wider transition duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span>Začněte svou proměnu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
