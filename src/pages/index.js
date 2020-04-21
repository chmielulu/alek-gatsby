import React from "react";
import CookieConsent from "react-cookie-consent";
import { graphql } from 'gatsby';

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

const IndexPage = ({ data: {datoCmsSeo : {keyword, metaTag: {description, title, image: {url}}}} }) => (
  <>
    <SEO 
      title={title}

      description={description}

      keywords={keyword}

      image={url}

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
    style={{ background: "#2a2a2a"}}
    buttonStyle={{ background: "#f93c40", color: "#fff", fontSize: "13px" }}
    expires={150}
    acceptOnScroll={true}
    acceptOnScrollPercentage={5}
    >
    Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie. <a href="https://skrypt-cookies.pl/czym-sa-ciasteczka" style={{color: "#bbb", textDecoration: "none", fontSize: "0.8rem", marginLeft: "5px"}} target="_blank">Więcej informacji</a>{" "}
    </CookieConsent>
    <ScrollToTop />
  </>
);

export default IndexPage;

export const query = graphql`
{
  datoCmsSeo {
    keyword
    metaTag {
      description
      title
      image {
        url
      }
    }
  }
}
`;