/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/milkyway.jpg";

const imageAltText = "a person looking up at colorful milky way galaxy in nightsky";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Flashy",
    description:
      "A flashcard app to help students study definitions, vocabulary, concepts, etc. Has full back-end CRUD, authentication, authorization, sessions, and web security.",
    url: "https://flashy-vgut.onrender.com/",
    codeUrl: "https://github.com/matthewsanner/flashcard-app",
  },
  {
    title: "Bones CMS",
    description:
      "Currently under development! A stripped down content management system for blogging. Uses a separate React frontend and Node/Express backend. Note: backend has to spin up separately so expect delayed functionality in demo.",
    url: "https://bones-cms-react.onrender.com/",
    frontendUrl: "https://github.com/matthewsanner/bones-cms-react",
    backendUrl: "https://github.com/matthewsanner/bones-cms-backend",
  },
  {
    title: "Verdant Mental Health",
    description:
      "Designed this professional, responsive website for a mental health clinic. Functionality and style fit to client's expectations and specifications. Uses SEO and accessibility best practices, complex CSS and Javascript, a logo, and optimized images for fast loading on different screen sizes.",
    url: "https://verdantmentalhealth.com/",
  },
  {
    title: "Circosphere",
    description:
      "Streamlined workflow by connecting various third-party services with Google Workspace APIs (Calendar, Drive, Docs). Created a custom Gmail add-on. Results include increased efficiency, improved internal and external communication, and better lead generation and conversion.",
    url: "https://circosphere.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small" style={{ marginBottom: "8px" }}>
                {project.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {project.codeUrl ? (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Code
                  </a>
                ) : null}
                {project.backendUrl ? (
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Backend Code
                  </a>
                ) : null}
                {project.frontendUrl ? (
                  <a
                    href={project.frontendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    Frontend Code
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
