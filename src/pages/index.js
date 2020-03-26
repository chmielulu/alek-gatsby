import React from "react";
import CookieConsent from "react-cookie-consent";

import SEO from '../components/SEO/SEO';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import WhatIdo from "../components/WhatIdo/WhatIdo";
import WhyMe from "../components/WhyMe/WhyMe";
import Reviews from "../components/Reviews/Reviews";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const IndexPage = () => (
  <>
    <SEO 
      title="Aleksander Gadomski | Grafik komputerowy"

      description="Szukasz dobrego a zarazem taniego grafika komputerowego? Dobrze trafiłeś! Aleksander Gadomski zajmie się Twoim zleceniem już od zaraz! Wizualizacja 3D, grafika 3D, baner, tło, miniaturka, montaż wideo, animacje - to tylko niewielka część mojej oferty!"

      keywords="Grafik komputerowy, grafika 3D, grafika 2D, Blender, Wizualizacje, Wizualizacje 3D, banery, baner, tlo, tla, miniaturka, miniaturki"

      image="https://aleksandergadomski.pl/images/op_image.jpg"

      url="https://aleksandergadomski.pl/"
    />

    <Header>
      <Navigation />
      <Hero />
    </Header>

    <main>
      <Projects />
      <AboutMe />
      <WhatIdo />
      <WhyMe />
      <Reviews />
      <Contact />
    </main>
    <Footer />

    <CookieConsent
    location="bottom"
    buttonText="OK"
    cookieName="cookiesInfo"
    style={{ background: "#2a2a2a" }}
    buttonStyle={{ background: "#f93c40", color: "#fff", fontSize: "13px" }}
    expires={150}
    acceptOnScroll={true}
    acceptOnScrollPercentage={5}
    >
    Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.{" "}
    </CookieConsent>
    <ScrollToTop />
  </>
);

export default IndexPage;
