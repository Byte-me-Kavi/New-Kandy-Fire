"use client";
import { useState, useEffect, useCallback } from "react";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "si", name: "සිංහල" },
  { code: "ta", name: "தமிழ்" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        // constructor signature for the Google Translate element
        TranslateElement?: new (opts: unknown, id: string) => unknown;
      };
    };
  }
}

export default function GoogleTranslate() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const maxRetries = 20; // Maximum 4 seconds (20 * 200ms)

  // Clear Google Translate cookies
  const clearGoogleTranslateCookies = () => {
    try {
      const cookieNames = ["googtrans", "googtrans\u0000"];
      const hosts = [window.location.hostname];
      if (window.location.hostname.indexOf(".") !== 0) {
        hosts.push("." + window.location.hostname);
      }
      const paths = [
        "/",
        window.location.pathname.split("/").slice(0, 2).join("/") || "/",
      ];
      const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT";

      cookieNames.forEach((name) => {
        paths.forEach((p) => {
          document.cookie = `${name}=; ${expires}; path=${p}; SameSite=Lax`;
        });
        hosts.forEach((domain) => {
          paths.forEach((p) => {
            document.cookie = `${name}=; ${expires}; path=${p}; domain=${domain}; SameSite=Lax`;
          });
        });
      });
      console.log("Cleared Google Translate cookies");
    } catch (e) {
      console.warn("Failed clearing translate cookies:", e);
    }
  };

  // Set Google Translate language with retry limit
  const setGoogleTranslateLanguage = useCallback(
    (lang: string, retries: number = 0) => {
      if (!lang || lang === "en") {
        console.log("Resetting to English - reloading page");
        clearGoogleTranslateCookies();
        localStorage.setItem("langPref", "en");
        window.location.reload();
        return;
      }

      const combo = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;
      if (!combo) {
        if (retries < maxRetries) {
          console.log(
            `Google Translate not ready, retrying... (${
              retries + 1
            }/${maxRetries})`
          );
          setTimeout(() => setGoogleTranslateLanguage(lang, retries + 1), 200);
        } else {
          console.error(
            "Google Translate failed to initialize after maximum retries"
          );
        }
        return;
      }

      console.log("Setting language to:", lang);
      combo.value = lang;
      combo.dispatchEvent(new Event("change"));
    },
    []
  );

  useEffect(() => {
    // Check if script already loaded
    if (document.querySelector('script[src*="translate.google.com"]')) {
      return;
    }

    // Load Google Translate script
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      const TranslateElement = window.google?.translate?.TranslateElement;
      if (typeof TranslateElement === "function") {
        new TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,si,ta",
            autoDisplay: false,
          },
          "google_translate_element"
        );
        console.log("Google Translate initialized");
      }
    };

    // Load saved language preference
    const savedLang = localStorage.getItem("langPref");
    if (savedLang) {
      console.log("Restoring saved language:", savedLang);
      setSelectedLang(savedLang);
      setTimeout(() => {
        if (savedLang !== "en") {
          setGoogleTranslateLanguage(savedLang, 0);
        }
      }, 800);
    }
  }, [setGoogleTranslateLanguage]);

  const handleLanguageChange = (code: string) => {
    setSelectedLang(code);
    setIsOpen(false);
    localStorage.setItem("langPref", code);
    console.log("Language changed to:", code);
    setGoogleTranslateLanguage(code, 0);
  };

  const getLangName = () => {
    return (
      languages.find((lang) => lang.code === selectedLang)?.name || "English"
    );
  };

  return (
    <div className="relative">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Custom Language Selector */}
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:border-red-600 hover:text-red-600 transition-all duration-200"
        >
          <Globe className="w-4 h-4" />
          <span>{getLangName()}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-all duration-150 ${
                  selectedLang === lang.code
                    ? "bg-red-50 text-red-600 border-l-4 border-red-600"
                    : "text-gray-700 hover:bg-gray-50 border-l-4 border-transparent"
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
