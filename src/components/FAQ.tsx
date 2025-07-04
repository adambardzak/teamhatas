import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-700">
      <button
        className="flex justify-between items-center w-full py-6 px-4 text-left hover:bg-zinc-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-bold text-white flex items-center">
          <span
            className={`w-8 h-8 inline-flex items-center justify-center mr-3 ${
              isOpen ? "bg-primary" : "bg-zinc-700"
            } text-white`}
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          {question}
        </h3>
        <span
          className={`flex items-center justify-center w-8 h-8 ${
            isOpen ? "bg-primary text-white" : "bg-zinc-800 text-gray-400"
          } transition-colors`}
        >
          {isOpen ? (
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
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          ) : (
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
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-96 opacity-100 py-5 px-4 pl-16 bg-zinc-800"
            : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "Jak probíhá první konzultace?",
      answer:
        "První konzultace probíhá online nebo osobně, dle vašeho výběru. Společně probereme vaše cíle, současný životní styl, stravovací návyky a zkušenosti s cvičením. Na základě těchto informací navrhneme optimální plán spolupráce šitý přímo na míru vašim potřebám.",
    },
    {
      question: "Jaký je rozdíl mezi jednotlivými typy coachingu?",
      answer:
        "Coaching+ zahrnuje i jeden osobní trénink měsíčně, kde můžeme společně projít techniku cviků a upravit tréninkový plán. Coaching Classic je plně online služba s jídelníčkem a tréninkovým plánem. Coaching Student je cenově zvýhodněná varianta pro studenty. Všechny typy zahrnují pravidelné kontroly a komunikaci přes WhatsApp.",
    },
    {
      question: "Jak často probíhají kontroly a co obsahují?",
      answer:
        "Kontroly probíhají 2x týdně a jsou klíčovou součástí našeho coachingu. Společně projdeme vaše výsledky, posoudíme pokrok, probereme případné komplikace nebo obtíže, upravíme plán dle potřeby a stanovíme další postup. Tato pravidelná zpětná vazba je zásadní pro dosažení vašich cílů.",
    },
    {
      question: "Budu muset jíst jen kuřecí s rýží?",
      answer:
        "Rozhodně ne! Jídelníček sestavuji podle vašich chutí a preferencí. Mým cílem je vytvořit dlouhodobě udržitelný stravovací plán, který vám bude vyhovovat. Pro každé jídlo dostanete 12 různých variant, takže si vždy vyberete to, na co máte zrovna chuť.",
    },
    {
      question: "Co když nemám přístup do posilovny?",
      answer:
        "Žádný problém. Tréninkový plán vždy přizpůsobím vašim možnostem. Mohu připravit plán pro domácí cvičení s vlastní vahou, s minimálním vybavením nebo pro venkovní workout. Důležité je, aby byl plán realistický a mohli jste jej skutečně dodržovat.",
    },
    {
      question: "Jak dlouho trvá, než uvidím výsledky?",
      answer:
        "To závisí na mnoha faktorech včetně vašeho výchozího bodu, genetiky, disciplíny a cílů. Obecně lze říci, že první změny začnete pociťovat již po 2-3 týdnech. Viditelné změny postavy se obvykle dostaví po 4-8 týdnech pravidelného cvičení a dodržování jídelníčku. Zásadní transformace těla je dlouhodobý proces trvající 3-6 měsíců a více.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-primary mb-3 text-sm font-semibold uppercase tracking-wider">
            FAQ
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Často kladené otázky
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Všechno, co potřebujete vědět o mém fitness coachingu a jak vám mohu
            pomoci dosáhnout vašich cílů
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-800/50 backdrop-blur-sm p-1">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-14">
          <div className="inline-block p-8 bg-zinc-800 border-t-4 border-primary rounded-none shadow-xl">
            <p className="mb-5 text-white text-xl font-bold">
              Nenašli jste odpověď na svou otázku?
            </p>
            <p className="mb-6 text-gray-400">
              Neváhejte mě kontaktovat přímo, rád zodpovím jakékoliv dotazy
            </p>
            <a
              href="#rezervace"
              className="btn btn-primary inline-flex items-center px-10"
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
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
              KONTAKTOVAT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
