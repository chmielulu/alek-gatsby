import React from "react";

import SEO from '../components/SEO/SEO';
import Navigation from '../components/Navigation/Navigation';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import Projects from "../components/Projects/Projects";
import AboutMe from "../components/AboutMe/AboutMe";
import WhatIdo from "../components/WhatIdo/WhatIdo";

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
    </main>
  </>
);

export default IndexPage;
