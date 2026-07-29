import React, { useState, useEffect } from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  const [countryCode, setCountryCode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setCountryCode(data.country_code);
      } catch (error) {
        console.error('Location fetch failed:', error);
        setCountryCode(null);
      } finally {
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  // Country-specific content
  const getLocationContent = () => {
    // Default content (for unknown locations or fallback)
    const defaultContent = {
      target: "international opportunities",
      greeting: "Hello! I'm Akshay Kumar",
      locationIntro: "Based in Bengaluru, India, I'm open to relocating for the right opportunity.",
    };

    // Content for specific countries
    const contentMap = {
      DE: { // Germany
        target: "Germany's thriving tech sector",
        greeting: "Hallo! Ich bin Akshay Kumar",
        locationIntro: "Based in Bengaluru, India, I'm open to relocating to Germany for the right opportunity.",
      },
      NL: { // Netherlands
        target: "the Netherlands' innovative tech scene",
        greeting: "Hallo! Ik ben Akshay Kumar",
        locationIntro: "Based in Bengaluru, India, I'm open to relocating to the Netherlands for the right opportunity.",
      },
      US: { // USA
        target: "the US tech market",
        greeting: "Hello! I'm Akshay Kumar",
        locationIntro: "Based in Bengaluru, India, I'm open to relocating to the US for the right opportunity.",
      },
      CA: { // Canada
        target: "Canada's growing tech ecosystem",
        greeting: "Hello! I'm Akshay Kumar",
        locationIntro: "Based in Bengaluru, India, I'm open to relocating to Canada for the right opportunity.",
      },
      IN: { // India - local
        target: "global opportunities",
        greeting: "Namaste! I'm Akshay Kumar",
        locationIntro: "Based in Bengaluru, India, I'm open to relocating for the right opportunity.",
      },
      GB: { // UK
        target: "the UK tech sector",
        greeting: "Hello! I'm Akshay Kumar",
        locationIntro: "Based in Bengaluru, India, I'm open to relocating to the UK for the right opportunity.",
      },
      AU: { // Australia
        target: "Australia's tech industry",
        greeting: "G'day! I'm Akshay Kumar",
        locationIntro: "Based in Bengaluru, India, I'm open to relocating to Australia for the right opportunity.",
      },
      SG: { // Singapore
        target: "Singapore's tech hub",
        greeting: "Hello! I'm Akshay Kumar",
        locationIntro: "Based in Bengaluru, India, I'm open to relocating to Singapore for the right opportunity.",
      },
      MY: { // Malaysia
        target: "Malaysia's growing tech sector",
        greeting: "Hello! I'm Akshay Kumar",
        locationIntro: "Based in Bengaluru, India, I'm open to relocating to Malaysia for the right opportunity.",
      },
    };

    return contentMap[countryCode] || defaultContent;
  };

  const content = getLocationContent();

  if (loading) {
    return (
      <ContactWrapper id="about">
        <div className="Container">
          <div className="SectionTitle">About Me</div>
          <div className="BigCard">
            <div className="AboutBio">Loading...</div>
          </div>
        </div>
      </ContactWrapper>
    );
  }

  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              {content.greeting}, a <strong>React Native Developer</strong> with <strong>3 years of production experience</strong> building secure, scalable mobile applications. Based in Bengaluru, India, I'm actively seeking {content.target}.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
              I specialize in <strong>React Native, TypeScript, and native development</strong> (Kotlin/Objective-C), with a proven track record of shipping apps to the Apple App Store and Google Play Store. My expertise includes <strong>Redux state management, RESTful & GraphQL APIs, secure authentication</strong>, and high-performance mobile architectures.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              I've built apps that scaled to <strong>1M+ downloads</strong> and served <strong>10M+ active users</strong> in fintech environments. Most notably, I led the development of <strong>Cookr's customer app</strong>, which was awarded <strong>"Best D2C Startup of the Year"</strong> by The Economic Times in 2024.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              <strong>{content.locationIntro}</strong> I'm eager to bring my expertise in React Native and mobile architecture to a forward-thinking team in {content.target === "Germany's thriving tech sector" ? "Germany" : content.target === "the Netherlands' innovative tech scene" ? "the Netherlands" : "Europe"}.
              <div className="tagline2">
                I'm proficient with these technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;