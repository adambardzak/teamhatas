import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="rezervace"
      className="py-20 relative bg-zinc-900 overflow-hidden"
    >

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-primary mb-3 text-sm font-semibold uppercase tracking-wider">
            REZERVACE
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Začněte <span className="text-primary">svou transformaci</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            První krok k lepšímu já je jen pár kliknutí daleko. Vyplňte formulář
            a začněme pracovat na vašich cílech.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* How it works section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-zinc-800/80 backdrop-blur-sm p-8 border-t-4 border-primary">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                <span className="w-10 h-10 inline-flex items-center justify-center bg-primary text-white mr-3 text-sm font-bold">
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </span>
                Jak to funguje
              </h3>

              <div className="space-y-8">
                <div className="flex relative">
                  <div className="w-14 h-14 rounded-none bg-primary flex items-center justify-center text-white font-bold text-xl mr-5 flex-shrink-0 z-10 border border-white/20">
                    1
                  </div>
                  <div className="absolute left-7 top-14 w-0.5 h-24 bg-zinc-700 z-0"></div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                      Vyplňte formulář
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      Vyplňte krátký formulář s vašimi základními údaji,
                      aktuální situací a fitness cíli, kterých chcete dosáhnout.
                      Pomůže mi lépe pochopit vaše potřeby a efektivně připravit
                      první konzultaci.
                    </p>
                  </div>
                </div>

                <div className="flex relative">
                  <div className="w-14 h-14 rounded-none bg-primary flex items-center justify-center text-white font-bold text-xl mr-5 flex-shrink-0 z-10 border border-white/20">
                    2
                  </div>
                  <div className="absolute left-7 top-14 w-0.5 h-24 bg-zinc-700 z-0"></div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                      Úvodní konzultace
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      Na základě vašich údajů proběhne detailní konzultace, kde
                      důkladně probereme vaše cíle, současný stav a sestavíme
                      strategii spolupráce. Odpovím na všechny vaše otázky a
                      vysvětlím celý proces.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="w-14 h-14 rounded-none bg-primary flex items-center justify-center text-white font-bold text-xl mr-5 flex-shrink-0 border border-white/20">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                      Začneme transformaci
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      Připravím pro vás personalizovaný tréninkový a stravovací
                      plán. Společně budeme pracovat na vašich cílech s
                      pravidelnými kontrolami a úpravami plánu podle vašeho
                      pokroku a zpětné vazby.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-zinc-900/80 border-l-4 border-primary">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-primary mt-1 mr-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-white mb-2">
                      Co získáte v mém coachingu?
                    </h5>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">→</span>
                        <span>
                          Personalizovaný tréninkový plán připravený přímo pro
                          vaše cíle
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">→</span>
                        <span>
                          10+ chutných variant pro každé jídlo ve vašem
                          jídelníčku
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">→</span>
                        <span>
                          Kontroly pokroku 2x týdně s úpravami dle vašich potřeb
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">→</span>
                        <span>
                          Neustálá podpora přes WhatsApp pro vaše otázky
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-zinc-800/80 backdrop-blur-sm border-t-4 border-primary">
              <div className="flex items-center">
                <div className="bg-primary p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl">
                    První konzultace je ZDARMA
                  </h4>
                  <p className="text-gray-400">
                    Začněte bez závazků a zjistěte, jak vám mohu pomoci
                    dosáhnout vašich cílů
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-zinc-800/80 backdrop-blur-sm shadow-2xl overflow-hidden border-t-4 border-primary">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-white flex items-center">
                  <span className="w-10 h-10 inline-flex items-center justify-center bg-primary text-white mr-3 text-sm font-bold">
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
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      ></path>
                    </svg>
                  </span>
                  Vyplňte formulář a začněme
                </h3>
                <p className="text-gray-400 mb-8 pl-14">
                  Začněte svou cestu ke zdravějšímu a silnějšímu tělu
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Jméno a příjmení*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="w-full pl-10 pr-4 py-3 rounded-none border-0 bg-zinc-700 focus:ring-2 focus:ring-primary focus:bg-zinc-600 text-white"
                          placeholder="Jan Novák"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        E-mail*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-500"
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
                        <input
                          type="email"
                          id="email"
                          className="w-full pl-10 pr-4 py-3 rounded-none border-0 bg-zinc-700 focus:ring-2 focus:ring-primary focus:bg-zinc-600 text-white"
                          placeholder="jan@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Telefon
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-500"
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
                        <input
                          type="tel"
                          id="phone"
                          className="w-full pl-10 pr-4 py-3 rounded-none border-0 bg-zinc-700 focus:ring-2 focus:ring-primary focus:bg-zinc-600 text-white"
                          placeholder="+420 123 456 789"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Vybraná služba*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-500"
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
                        <select
                          id="service"
                          className="w-full pl-10 pr-4 py-3 rounded-none border-0 bg-zinc-700 focus:ring-2 focus:ring-primary focus:bg-zinc-600 text-white appearance-none"
                          required
                        >
                          <option value="">Vyberte službu</option>
                          <option value="coaching-plus">
                            Coaching+ (osobní tréninky)
                          </option>
                          <option value="coaching-classic">
                            Coaching Classic
                          </option>
                          <option value="coaching-student">
                            Coaching Student
                          </option>
                          <option value="poradenstvi">
                            Jednorázové poradenství
                          </option>
                          <option value="jidelnicek">Jídelníček na míru</option>
                          <option value="treninkovy-plan">
                            Tréninkový plán
                          </option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Vaše současná situace a zkušenosti*
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex items-center">
                        <input
                          id="experience-beginner"
                          type="radio"
                          name="experience"
                          className="w-4 h-4 text-primary focus:ring-primary"
                          required
                        />
                        <label
                          htmlFor="experience-beginner"
                          className="ml-2 text-sm text-gray-300"
                        >
                          Začátečník
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="experience-intermediate"
                          type="radio"
                          name="experience"
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <label
                          htmlFor="experience-intermediate"
                          className="ml-2 text-sm text-gray-300"
                        >
                          Pokročilý
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="experience-advanced"
                          type="radio"
                          name="experience"
                          className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <label
                          htmlFor="experience-advanced"
                          className="ml-2 text-sm text-gray-300"
                        >
                          Zkušený
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="goals"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Vaše hlavní cíle*
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <input
                          id="goal-weight-loss"
                          type="checkbox"
                          className="w-4 h-4 text-primary focus:ring-primary rounded-none"
                        />
                        <label
                          htmlFor="goal-weight-loss"
                          className="ml-2 text-sm text-gray-300"
                        >
                          Zhubnutí/redukce tuku
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="goal-muscle"
                          type="checkbox"
                          className="w-4 h-4 text-primary focus:ring-primary rounded-none"
                        />
                        <label
                          htmlFor="goal-muscle"
                          className="ml-2 text-sm text-gray-300"
                        >
                          Nárůst svalové hmoty
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="goal-health"
                          type="checkbox"
                          className="w-4 h-4 text-primary focus:ring-primary rounded-none"
                        />
                        <label
                          htmlFor="goal-health"
                          className="ml-2 text-sm text-gray-300"
                        >
                          Zlepšení zdraví
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="goal-strength"
                          type="checkbox"
                          className="w-4 h-4 text-primary focus:ring-primary rounded-none"
                        />
                        <label
                          htmlFor="goal-strength"
                          className="ml-2 text-sm text-gray-300"
                        >
                          Zvýšení síly
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Detailněji o vašich cílech a očekáváních*
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-none border-0 bg-zinc-700 focus:ring-2 focus:ring-primary focus:bg-zinc-600 text-white"
                        placeholder="Popište vaše cíle, současný stav a představu o spolupráci..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="privacy"
                      type="checkbox"
                      className="w-4 h-4 text-primary focus:ring-primary rounded-none"
                      required
                    />
                    <label
                      htmlFor="privacy"
                      className="ml-2 text-sm text-gray-300"
                    >
                      Souhlasím se{" "}
                      <Link
                        href="/obchodni-podminky"
                        className="text-primary hover:underline"
                      >
                        zpracováním osobních údajů
                      </Link>{" "}
                      dle GDPR
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary hover:bg-primary/80 text-white font-bold text-lg uppercase tracking-wider transition duration-300 flex items-center justify-center"
                  >
                    <svg
                      className="mr-2 h-5 w-5"
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
                    <span>Odeslat žádost</span>
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Povinné údaje
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
