import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand/Logo Section */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold text-white flex items-center mb-6"
            >
              <span className="w-10 h-10 bg-primary flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span className="uppercase tracking-wider">VÍŤA HATAS</span>
            </Link>
            <p className="text-gray-400 mb-6 pl-2 border-l-4 border-primary/30 py-2">
              Profesionální fitness kouč a výživový poradce s více než 5 lety
              zkušeností. Specialista na trénink a výživové poradenství.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://instagram.com" ariaLabel="Instagram">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </SocialIcon>
              <SocialIcon href="https://tiktok.com" ariaLabel="TikTok">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" ariaLabel="YouTube">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </SocialIcon>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white border-b border-zinc-700 pb-2 flex items-center">
              <span className="w-1.5 h-6 bg-primary block mr-2"></span>
              Navigace
            </h3>
            <ul className="space-y-2">
              <FooterLink href="#sluzby">Služby</FooterLink>
              <FooterLink href="#promeny">Proměny klientů</FooterLink>
              <FooterLink href="#rezervace">Rezervace konzultace</FooterLink>
              <FooterLink href="#o-mne">O mně</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white border-b border-zinc-700 pb-2 flex items-center">
              <span className="w-1.5 h-6 bg-primary block mr-2"></span>
              Služby
            </h3>
            <ul className="space-y-2">
              <FooterLink href="#coaching-plus">Coaching+</FooterLink>
              <FooterLink href="#coaching-classic">Coaching Classic</FooterLink>
              <FooterLink href="#coaching-student">Coaching Student</FooterLink>
              <FooterLink href="#poradenstvi">Poradenství</FooterLink>
              <FooterLink href="#jidelnicek">Jídelníček</FooterLink>
              <FooterLink href="#treninkovy-plan">Tréninkový plán</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white border-b border-zinc-700 pb-2 flex items-center">
              <span className="w-1.5 h-6 bg-primary block mr-2"></span>
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="text-primary mr-3 mt-1 p-1 bg-zinc-800">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <a
                  href="mailto:info@vitahatas.cz"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  info@vitahatas.cz
                </a>
              </li>
              <li className="flex items-start">
                <div className="text-primary mr-3 mt-1 p-1 bg-zinc-800">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <a
                  href="tel:+420123456789"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  +420 123 456 789
                </a>
              </li>
              <li className="flex items-start">
                <div className="text-primary mr-3 mt-1 p-1 bg-zinc-800">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <address className="text-gray-400 not-italic">
                  Praha, Česká republika
                </address>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="#rezervace"
                className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/80 text-white font-bold uppercase tracking-wider transition duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>Sjednat konzultaci</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-zinc-800 pt-8 pb-6 mb-4">
          <div className="max-w-xl mx-auto bg-zinc-800/50 p-6 border-t-4 border-primary">
            <h3 className="text-lg font-bold mb-2 text-white text-center uppercase tracking-wider">
              Odebírejte novinky
            </h3>
            <p className="text-gray-400 text-center mb-4">
              Zůstaňte v obraze a dostávejte tipy na cvičení a výživu
            </p>

            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Váš email"
                className="px-4 py-3 rounded-none bg-zinc-700 border-0 text-white focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary/80 text-white font-bold uppercase tracking-wider transition duration-300 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                Odebírat
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} Víťa Hatas. Všechna práva vyhrazena.
          </div>

          <div className="flex space-x-6">
            <Link
              href="/obchodni-podminky"
              className="text-gray-500 hover:text-primary text-sm"
            >
              Obchodní podmínky
            </Link>
            <Link
              href="/ochrana-osobnich-udaju"
              className="text-gray-500 hover:text-primary text-sm"
            >
              Ochrana osobních údajů
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-primary text-sm"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="w-10 h-10 rounded-none bg-zinc-800 hover:bg-primary flex items-center justify-center transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
      >
        {children}
      </svg>
    </a>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-primary transition-colors flex items-center group"
      >
        <span className="w-2 h-0.5 bg-primary mr-2 transition-all duration-300 group-hover:w-3"></span>
        {children}
      </Link>
    </li>
  );
}
