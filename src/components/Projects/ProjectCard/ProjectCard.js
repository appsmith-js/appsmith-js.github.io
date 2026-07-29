import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";

function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <p>{list.description}</p>
              <TechCardContainer>
                {list.tech_stack.map((tech, index) => (
                  <TechCard key={index}>{tech}</TechCard>
                ))}
              </TechCardContainer>
              <BtnGroup>
                {list.github_url && list.github_url.length > 0 && (
                  <a
                    className="btn btn-github"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
                
                {list.app_store_url && list.app_store_url.length > 0 && (
                  <a
                    className="btn btn-apple"
                    href={list.app_store_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg" 
                      alt="App Store"
                      style={{ width: "18px", height: "18px", filter: "invert(1)" }}
                    />
                    App Store
                  </a>
                )}
                
                {list.play_store_url && list.play_store_url.length > 0 && (
                  <a
                    className="btn btn-android"
                    href={list.play_store_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg" 
                      alt="Play Store"
                      style={{ width: "18px", height: "18px" }}
                    />
                    Play Store
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ProjectCard;