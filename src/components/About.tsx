import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="o-mne" className="py-20 relative overflow-hidden bg-zinc-800">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-primary mb-3 text-sm font-semibold uppercase tracking-wider">
            O MNĚ
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Poznej svého trenéra
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="md:text-xl text-gray-400 max-w-2xl mx-auto">
            Kdo jsem a jak ti mohu pomoci dosáhnout tvých fitness cílů
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-2/5">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10">
                <div className="overflow-hidden border-4 border-zinc-800 shadow-2xl group">
                  <div className="aspect-[3/4] bg-zinc-900 relative overflow-hidden">
                    <Image
                      className=" bg-zinc-900 relative object-cover overflow-hidden"
                      src="/about-new.jpg"
                      alt={"Vita Hatas - Osobní trenér & Online Coach"}
                      fill
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="flex items-center justify-center h-full">
                      <span className="text-lg text-gray-400">
                        Fotografie Víti
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Stats card */}
              <div className=" bg-zinc-900 p-4 shadow-xl z-20 transform hover:translate-y-1 transition-transform duration-300 border-t-2 border-primary">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                    V
                  </div>
                  <div>
                    <p className="font-bold text-white">Víťa Hatas</p>
                    <p className="text-sm text-gray-300">
                      Fitness kouč | Výživový poradce | Sexsymbol
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute hidden md:block -top-6 -left-6 bg-zinc-900 py-2 px-4 shadow-lg border-t-2 border-primary transform hover:translate-y-1 hover:translate-x-1 transition-all duration-300 z-10">
                <p className="text-primary font-bold">5+ let zkušeností</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/5">
            <div className="max-w-none">
              <div className="bg-zinc-900/80 backdrop-blur-sm p-6 border-t-4 border-primary shadow-xl">
                <p className="mb-4 leading-relaxed text-gray-300">
                  Ahoj, jmenuji se{" "}
                  <span className="font-bold text-primary">Víťa</span> a pomáhat
                  lidem v tomhle směru bylo mým snem už od mala. Zatím mám za
                  sebou přes{" "}
                  <span className="font-bold text-primary">500 klientů</span> z
                  čehož 99% bylo spokojených a tomu taky odpovídají jejich
                  celkové výsledky.
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Mým cílem nikdy nebylo závodění na nějaké vysoké úrovni nebo
                  různé powerlifterské soutěže, spíš šlo o to naučit se toho co
                  nejvíc jak o{" "}
                  <span className="font-semibold text-white">cvičení</span>,{" "}
                  <span className="font-semibold text-white">stravě</span> a{" "}
                  <span className="font-semibold text-white">suplementaci</span>{" "}
                  a tyhle informace potom dál předávat.
                </p>
                <p className="mb-4 leading-relaxed text-gray-300">
                  Rád pomůžu všem lidem, kteří chtějí posunout svoji postavu a
                  vzdělání ohledně fitness na další úroveň, ať už po fyzické,
                  tak po psychické stránce, jelikož vím, že cvičení není jen o
                  těle, ale i mysli a proto se snažím mým klientům co nejvíc
                  pomáhat i psychicky a plány sestavovat, tak aby byly
                  dlouhodobě udržitelné (rozhodně tedy nečekej kuřecí s rýží 6x
                  denně). Plány jsou dělané podle tvých chutí, protože na tom
                  záleží.
                </p>

                <div className="flex flex-col md:flex-row gap-4 mt-6">
                  <Link
                    href="#rezervace"
                    className="btn btn-primary flex-1 justify-center"
                  >
                    ZAČÍT SPOLUPRÁCI
                  </Link>
                  <a
                    href="#sluzby"
                    className="btn border-2 border-primary text-primary hover:bg-primary/10 flex-1 justify-center"
                  >
                    PROHLÉDNOUT SLUŽBY
                  </a>
                </div>
              </div>

              {/* Key features */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/80 backdrop-blur-sm p-5 border-l-4 border-primary shadow-lg transform hover:translate-x-1 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">
                        Individuální přístup
                      </h4>
                      <p className="text-sm text-gray-300">
                        Plány dle tvých potřeb a cílů
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Každý klient je jedinečný, proto pro tebe vytvořím plán šitý
                    na míru, který respektuje tvé preference, časové možnosti a
                    cíle.
                  </p>
                </div>

                <div className="bg-zinc-900/80 backdrop-blur-sm p-5 border-l-4 border-accent shadow-lg transform hover:translate-x-1 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-accent/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">
                        Nepřetržitá podpora
                      </h4>
                      <p className="text-sm text-gray-300">
                        Jsem tu pro tebe 24/7
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Pravidelné kontroly, WhatsApp konzultace a neustálá podpora.
                    Mým cílem je pomoci ti překonat překážky a dosáhnout
                    výsledků.
                  </p>
                </div>
              </div>

              {/* Collaboration */}
              <div className="mt-8 bg-gradient-to-r from-zinc-800 to-zinc-900 p-6 border-t-4 border-primary shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-primary/20 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">
                        Spolupracuj s námi
                      </h4>
                      <p className="text-sm text-gray-300">
                        Trenéři Víťa a Čenda
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <Image
                      className="w-16 h-16 bg-zinc-700 border-2 border-zinc-600 flex items-center justify-center text-gray-400"
                      src="/cenda.avif"
                      alt="Fitness trenér Víťa Hatas"
                      width={128}
                      height={128}
                    />
                    <div>
                      <p className="font-bold text-white">Čenda IFBB Pro</p>
                      <p className="text-sm text-gray-300">
                        Profesionální spolupráce pro maximální výsledky
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
