import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Feedback from "./components/Feedback/Feedback";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

import { gsap, Power3 } from "gsap";
import { PacmanLoader } from "react-spinners";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);
    const tl = new gsap.timeline();
    const ease = Power3.easeOut;
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    let containerRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {isLoading ? (
                <div className="preloader">
                    <div>
                        <PacmanLoader size={50} color="#ff3297" loading={isLoading} />
                        <p className="text">Preparing to launch...</p>
                    </div>
                </div>
            ) : (
                <>
                    {/* pagetop anchor */}
                    <div id="hero"></div>
                    {/* pagetop anchor */}
                    <Navbar timeline={tl} ease={ease} changeLanguage={changeLanguage} lang={lang} setLang={setLang} />

                    <main ref={containerRef}>
                        <Hero timeline={tl} ease={ease} t={t} lang={lang} />
                        <About timeline={tl} ease={ease} lang={lang} />
                        <Skills timeline={tl} ease={ease} lang={lang} />
                        <Feedback timeline={tl} ease={ease} lang={lang} />
                        {/* <Contact timeline={tl} ease={ease} lang={lang} /> */}
                    </main>

                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
