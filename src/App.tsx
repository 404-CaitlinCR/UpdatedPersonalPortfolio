import { useState } from "react";
import "./App.css"
import Navbar from "./components/nav";
import PixelAvatar from "./components/pixelAvatar";
import animatedPixelMe from "./assets/animatedPixelme.gif";
import img1 from "./assets/20240808_221245_Original.jpg";
import img2 from "./assets/IMG_1724_result.jpg";
import img3 from "./assets/IMG_2052.jpeg";
import img4 from "./assets/IMG_2120.jpeg";
import img5 from "./assets/IMG_2367.jpeg";
import img6 from "./assets/IMG_2629.jpeg";
import img7 from "./assets/IMG_3231.jpeg";
import img8 from "./assets/IMG_5587.jpeg";
import img9 from "./assets/IMG_9699.jpeg";
import githubImage from "./assets/github.png";
import linkedinImage from "./assets/linkedin.png";
import Card from "./components/card";
import ProjectCard from "./components/projectCard";
import ImageCarousel from "./components/imageCarousel";
import ResumeModal from "./components/resumeModal";

const img10 = new URL('./assets/IMG_6941.JPEG', import.meta.url).href
const img11 = new URL('./assets/IMG_2089.PNG', import.meta.url).href
const img12 = new URL('./assets/BE396E67-1790-43F8-8A3D-67F127D4AD58.JPG', import.meta.url).href

//This is the main function for the website to run.
/*
I need to create functions that will call:
- the idcard box
- the containters to hold the content
- the project cards
- the contact info sheet
*/
const TAGLINE = "CS & PSYC @ UofG"

const SOCIALS = [
  { label: 'linkedin', icon: linkedinImage, href: 'https://linkedin.com/in/caitlin' },
  { label: 'github', icon: 'gh', href: 'https://github.com/caitlin' },
  { label: 'instagram', icon: 'ig', href: 'https://instagram.com/caitlin' },
]

const RESUME_URL = '/caitlinChanReynolds_Resume.pdf'

// Add photo URLs here (e.g. imported from ./assets) to populate the carousel.
const CAROUSEL_IMAGES: string[] = [img8, img2,img12, img3,img4,img5,img6,img7,img1,img9,img10,img11]
const EXPERIENCE = [
  {
    role: 'Computer Science Student',
    organization: 'University of Guelph',
    period: 'Current',
    description: 'Studying computer science and psychology while building practical web projects and exploring user-centered design.',
  },
  {
    role: 'Independent Developer',
    organization: 'Personal Projects',
    period: 'Ongoing',
    description: 'Creating responsive applications with React, TypeScript, Python, and modern web technologies.',
  },
  {
    role: 'ITSAC Ambassador',
    organization: 'University of Guelph',
    period: 'Ongoing',
    description: 'add in discription '
  }
]
const SKILLS = {
  Frontend: ['React', 'TypeScript', 'Vite', 'CSS / Tailwind', 'Figma', 'HTML'],
  Backend:  ['Node.js', 'Express', 'Python', 'REST APIs', 'C'],
  Tools:    ['Git & GitHub', 'VS Code', 'Linux','Figma'],
}
const PROJECTS = [
  {
    title: 'Personal Website',
    description: 'A simple website to introduce myself as well as share my projects',
    tags: ['HTML', 'CSS'],
    link: 'https://github.com/404-CaitlinCR/PersonalPortfolio',
    image: githubImage,
  },
  {
    title: 'Interactive TO-DO List',
    description: 'This is a simple and interactive To-Do List, where you can add, mark and remove tasks',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/404-CaitlinCR/ToDoLists/tree/main/todoHTML',
    image: githubImage,
  },
  {
    title: 'Pantry Pal',
    description: 'An AI assistent created using googles gemini API, this chat box takes in ingredients and creates them into a delicious recipe!. Front end was done using html and css, backend was done using python, flask, and javascript.',
    tags: ['HTML', 'CSS', 'Python'],
    link: 'https://github.com/404-CaitlinCR/pantryPals',
    image: githubImage,
  },
  // {
  //   title: 'CogLab',
  //   description: 'Browser-based cognitive psychology experiments for research data collection.',
  //   tags: ['Vanilla JS', 'Python', 'Flask'],
  //   link: 'https://github.com',
  //   image: githubImage,
  // },
]

const ARTICLES = [
  {
    title: 'The Psychology of Dark Patterns in UX',
    publication: 'UofG Design Review',
    date: 'Mar 2024',
    link: '#',
  },
  // {
  //   title: 'Building Accessible React Apps from the Ground Up',
  //   publication: 'Dev.to',
  //   date: 'Jan 2024',
  //   link: '#',
  // },
  // {
  //   title: 'Cognitive Load Theory and Interface Design',
  //   publication: 'Research Paper – PSY 3200',
  //   date: 'Dec 2023',
  //   link: '#',
  // },
]

const ABOUT = "Welcome! I'm Caitlin, a third year Computer Science student at the University of Guelph"
function App(){
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <>
    <div className="app-container">
      <Navbar></Navbar>
      <main className="main-panel">
            <div  className="title">
                <h1> Caitlin Chan Reynolds </h1>
            </div>
        <section id="about" className="aboutMe">
          <div className="about-left"> {/*the left side of the about me section*/}
            <div className="imageCard" style={{alignItems: "center"}}>
              <PixelAvatar src={animatedPixelMe}/>
              <span className="tagline" style={{ display: "block", marginTop: "0.5rem"}}>
              {TAGLINE}
              </span>
              <div className="social-mini-cards">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-mini-chip"
                    aria-label={s.label}
                  >
                    {s.label === 'linkedin' ? (
                      <img src={s.icon} alt="LinkedIn" />
                    ) : (
                      s.icon
                    )}
                  </a>
                ))}
              </div>

              <ImageCarousel images={CAROUSEL_IMAGES} />

              <button
                type="button"
                className="resume-bar"
                onClick={() => setIsResumeOpen(true)}
              >
                View Résumé
              </button>
            </div>
          </div>
          <div className="about-right">
            <h2 className="section-label" style={{marginTop: "0rem", color: "antiquewhite"}}>About Me</h2>
            <Card className="about-card">
              <p className="about-text">{ABOUT}</p>
            </Card>

            {/* skills section */}
            <h2 className="section-label" id="skills" style={{ marginTop: '18px' }}>Skills</h2>
            <Card className="skills-card">
              <div className="skills-grid">
                {Object.entries(SKILLS).map(([category, items])=> (
                  <><span className="skill-category">• {category}</span><ul className="skill-list">
                    {items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul></>
                ))}
              </div>
            </Card>

            <h2 className="section-label" id="experience" style={{ marginTop: '18px' }}>Experience</h2>
            <Card className="experience-card">
              {EXPERIENCE.map((item) => (
                <article key={`${item.role}-${item.organization}`} className="experience-item">
                  <h3 className="experience-role">{item.role}</h3>
                  <p className="experience-meta">{item.organization} · {item.period}</p>
                  <p className="experience-description">{item.description}</p>
                </article>
              ))}
            </Card>
          </div>
        </section>
         {/* ── PROJECTS ── */}
        {/* Projects: mapped from the `PROJECTS` array and rendered with `ProjectCard` */}
        <section id="projects" className="section">
          <h2 className="section-heading">Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* ── ARTICLES ── */}
        <section id="articles" className="section">
          <h2 className="section-heading">Article features and Papers</h2>
          <Card className="articles-card">
            <div className="articles-list">
              {ARTICLES.map((a) => (
                <a key={a.title} href={a.link} className="article-row" target="_blank" rel="noreferrer">
                  <div className="article-meta">
                    <span className="article-pub">{a.publication}</span>
                    <span className="article-date">{a.date}</span>
                  </div>
                  <h3 className="article-title">{a.title}</h3>
                </a>
              ))}
            </div>
          </Card>
        </section>
      </main>
    </div>
    {isResumeOpen && (
      <ResumeModal src={RESUME_URL} onClose={() => setIsResumeOpen(false)} />
    )}
    </>
  );
}

export default App;