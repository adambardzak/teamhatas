"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface CookieCategory {
  id: string;
  title: string;
  description: string;
  required: boolean;
}

const CookieConsent: React.FC = () => {
  // Seznam kategorií cookies podle GDPR požadavků
  const cookieCategories: CookieCategory[] = [
    {
      id: "necessary",
      title: "Nezbytné cookies",
      description: "Tyto cookies jsou nezbytné pro fungování webu a nemohou být vypnuty.",
      required: true,
    },
    {
      id: "analytics",
      title: "Analytické cookies",
      description: "Pomáhají nám pochopit, jak používáte náš web, abychom ho mohli vylepšit.",
      required: false,
    },
    {
      id: "marketing",
      title: "Marketingové cookies",
      description: "Používají se k zobrazování relevantní reklamy na jiných webech.",
      required: false,
    }
  ];

  // Stavy pro řízení zobrazení banneru a detailního nastavení
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [cookiePreferences, setCookiePreferences] = useState<Record<string, boolean>>({});

  // Načtení preferencí při inicializaci komponenty
  useEffect(() => {
    // Kontrola, zda již byly nastaveny cookie preference
    const consentGiven = localStorage.getItem("cookieConsentGiven");
    
    if (!consentGiven) {
      // Nastavení výchozích hodnot pro cookies
      const initialPreferences = cookieCategories.reduce((acc, category) => {
        acc[category.id] = category.required;
        return acc;
      }, {} as Record<string, boolean>);
      
      setCookiePreferences(initialPreferences);
      setShowBanner(true);
    } else {
      try {
        // Načtení uložených preferencí
        const savedPreferences = JSON.parse(localStorage.getItem("cookiePreferences") || "{}");
        setCookiePreferences(savedPreferences);
      } catch (error) {
        console.error("Chyba při načítání preferencí cookies:", error);
      }
    }
  }, []);

  // Funkce pro akceptování všech cookies
  const acceptAllCookies = () => {
    const allAccepted = cookieCategories.reduce((acc, category) => {
      acc[category.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    
    saveCookiePreferences(allAccepted);
  };

  // Funkce pro akceptování pouze nezbytných cookies
  const acceptNecessaryCookies = () => {
    const necessaryOnly = cookieCategories.reduce((acc, category) => {
      acc[category.id] = category.required;
      return acc;
    }, {} as Record<string, boolean>);
    
    saveCookiePreferences(necessaryOnly);
  };

  // Funkce pro uložení preferencí cookies
  const saveCookiePreferences = (preferences: Record<string, boolean>) => {
    setCookiePreferences(preferences);
    localStorage.setItem("cookieConsentGiven", "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    
    // Zde by byla implementace nastavení příslušných cookies podle preferencí
    // implementace specifických cookies podle preferencí...
    
    setShowBanner(false);
  };

  // Funkce pro změnu jednotlivých preferencí
  const handlePreferenceChange = (categoryId: string, isChecked: boolean) => {
    setCookiePreferences(prev => {
      // U povinných cookies neumožňujeme změnu
      if (cookieCategories.find(cat => cat.id === categoryId)?.required) {
        return prev;
      }
      
      return {
        ...prev,
        [categoryId]: isChecked
      };
    });
  };

  // Funkce pro uložení detailních preferencí
  const saveDetailedPreferences = () => {
    saveCookiePreferences(cookiePreferences);
  };

  // Pokud banner není aktivní, nic nevykreslujeme
  if (!showBanner) return null;

  return (
    <>
      {/* Cookie banner s responzivním centrováním */}
      <div className={`fixed z-50 ${!showDetails ? 
        // Na mobilních zařízeních vystředíme, na větších obrazovkách vpravo dole
        'bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md md:translate-x-0 md:left-auto md:right-8' : 
        'bottom-0 left-0 right-0 md:left-auto md:right-8 md:bottom-8 w-full md:w-auto md:max-w-xl'}`}>
        <div className={`backdrop-blur-md bg-zinc-900/95 border border-primary/40 shadow-[0_8px_32px_rgba(0,0,0,0.4)] animate-fade-in-up overflow-hidden ${showDetails ? 'md:w-[550px]' : 'w-full'} text-white`}>
          {!showDetails ? (
            // Kompaktní verze banneru
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-primary">
                  <svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.5 2.75a.75.75 0 00-1.5 0V4h-3A2.75 2.75 0 003.25 6.75v8.5A2.75 2.75 0 006 18h8a2.75 2.75 0 002.75-2.75v-8.5A2.75 2.75 0 0014 4h-3V2.75zm-4.5 4a.75.75 0 000 1.5h8a.75.75 0 000-1.5h-8zM6 10a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5A.75.75 0 016 10zm.75 2.25a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Souhlas s cookies</h3>
              </div>
              
              <p className="text-sm text-gray-300 mb-5">
                Tento web používá cookies pro zlepšení uživatelského zážitku a analýzu návštěvnosti.
              </p>
              
              <div className="flex flex-col gap-2">
                <button 
                  onClick={acceptAllCookies}
                  className="w-full py-2.5 px-4 bg-primary rounded-none text-sm font-medium hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  Přijmout vše
                </button>
                
                <div className="flex gap-2 w-full">
                  <button 
                    onClick={acceptNecessaryCookies}
                    className="flex-1 py-2.5 px-4 bg-transparent border border-gray-600 hover:border-gray-400 rounded-none text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    Pouze nezbytné
                  </button>
                  
                  <button 
                    onClick={() => setShowDetails(true)}
                    className="flex-1 py-2.5 px-4 bg-transparent border border-gray-600 hover:border-gray-400 rounded-none text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    Přizpůsobit
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Detailní nastavení
            <div className="p-6">
              <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-700">
                <div className="flex items-center">
                  <div className="mr-3 text-primary">
                    <svg 
                      className="w-6 h-6" 
                      fill="currentColor" 
                      viewBox="0 0 20 20" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Nastavení cookies</h3>
                </div>
                <button 
                  onClick={() => setShowDetails(false)}
                  className="p-2 hover:bg-gray-800 text-gray-400 hover:text-white transition duration-300 focus:outline-none"
                  aria-label="Zavřít nastavení"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="space-y-3 mb-5 max-h-[280px] overflow-y-auto pr-2 custom-scrollbar">
                {cookieCategories.map((category) => (
                  <div key={category.id} className="bg-zinc-800/50 p-3 border-l-3 border-primary/80 transition-all hover:bg-zinc-800/70">
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor={`cookie-${category.id}`} className={`font-medium text-sm ${category.required ? 'cursor-default' : 'cursor-pointer'}`}>
                        {category.title} {category.required && <span className="ml-2 px-1.5 py-0.5 text-xs bg-primary/20 text-primary">povinné</span>}
                      </label>
                      <div className="relative inline-flex items-center">
                        <input
                          type="checkbox"
                          id={`cookie-${category.id}`}
                          checked={cookiePreferences[category.id] || false}
                          onChange={(e) => handlePreferenceChange(category.id, e.target.checked)}
                          disabled={category.required}
                          className="sr-only peer"
                        />
                        <div className={`w-9 h-5 bg-gray-700 peer peer-focus:ring-2 peer-focus:ring-primary/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:h-4 after:w-4 after:transition-all ${category.required ? 'opacity-60' : 'peer-checked:bg-primary cursor-pointer'}`}></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">{category.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 w-full mb-2">
                  <button 
                    onClick={acceptNecessaryCookies}
                    className="flex-1 py-2 px-3 bg-transparent border border-gray-600 hover:border-gray-400 rounded-none text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    Pouze nezbytné
                  </button>
                  
                  <button 
                    onClick={acceptAllCookies}
                    className="flex-1 py-2 px-3 bg-transparent border border-gray-600 hover:border-gray-400 rounded-none text-xs font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    Přijmout vše
                  </button>
                </div>
                
                <button 
                  onClick={saveDetailedPreferences}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-primary to-accent rounded-none text-sm font-medium hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
                >
                  Uložit nastavení
                </button>
                
                <div className="text-center mt-2">
                  <Link href="/cookies-policy" className="text-xs text-primary hover:underline focus:outline-none">
                    Více informací o cookies
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Vlastní scrollbar a animace */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        
        .border-l-3 {
          border-left-width: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(75, 85, 99, 0.1);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(75, 85, 99, 0.5);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(75, 85, 99, 0.8);
        }
      `}</style>
    </>
  );
};

export default CookieConsent;