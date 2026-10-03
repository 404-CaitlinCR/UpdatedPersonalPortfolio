import { useEffect, useState } from "react";
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
import img13 from "./assets/image.png";
import githubImage from "./assets/github.png";
import linkedinImage from "./assets/linkedin.png";
import Card from "./components/card";
import ProjectCard from "./components/projectCard";
import ImageCarousel from "./components/imageCarousel";
import ResumeModal from "./components/resumeModal";

const img10 = new URL('./assets/IMG_6941.JPEG', import.meta.url).href
const img11 = new URL('./assets/IMG_2089.PNG', import.meta.url).href
const img12 = new URL('./assets/BE396E67-1790-43F8-8A3D-67F127D4AD58.JPG', import.meta.url).href
const isntaImg = new URL('./assets/isnta.PNG', import.meta.url).href

import protfolioImg from "./assets/websitPortfolio.png";
import todoImg from "./assets/todo.png";

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
  { label: 'linkedin', icon: linkedinImage, href: 'https://www.linkedin.com/in/caitlin-chan-reynolds/' },
  { label: 'github', icon: githubImage, href: 'https://github.com/404-CaitlinCR' },
  { label: 'instagram', icon: isntaImg, href: 'https://instagram.com/caitlin' },
]

const RESUME_URL = '/CCR_Resume.pdf'

// Add photo URLs here (e.g. imported from ./assets) to populate the carousel.
const CAROUSEL_IMAGES: string[] = [img8, img2,img12,img13, img3,img4,img5,img6,img7,img1,img9,img10,img11]
const EXPERIENCE = [
  {
    role: 'Computer Science Student',
    organization: 'University of Guelph',
    period: 'Current',
    description: 'Studying Computer Science and Psychology, specializing in Cybersecurity. While devloping my skills in Web design and Game Development.',
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
    period: '2026-2027',
    description: 'Selected as a Student Representative on the IT Student Advisory Committee; provide feedback on campus IT services and contribute to continuous improvement initiatives, with reflections on IT service delivery and career pathways.'
  }
]
const SKILLS = {
  Frontend: ['React', 'TypeScript', 'Vite', 'CSS / Tailwind', 'HTML', "JavaScript"],
  Backend:  ['Node.js', 'Python', 'C', 'Java'],
  Tools:    ['Git & GitHub', 'VS Code', 'Linux','Figma'],
}
const PROJECTS = [
  {
    title: 'Personal Website',
    description: 'A simple website to introduce myself as well as share my projects',
    tags: ['HTML', 'CSS'],
    link: 'https://github.com/404-CaitlinCR/PersonalPortfolio',
    image: protfolioImg,
  },
  {
    title: 'Interactive TO-DO List',
    description: 'This is a simple and interactive To-Do List, where you can add, mark and remove tasks',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/404-CaitlinCR/ToDoLists/tree/main/todoHTML',
    image: todoImg,
  },
  {
    title: 'Pantry Pal',
    description: 'An AI assistent created using googles gemini API, this chat box takes in ingredients and creates them into a delicious recipe!. Front end was done using html and css, backend was done using python, flask, and javascript.',
    tags: ['HTML', 'CSS', 'Python'],
    link: 'https://github.com/404-CaitlinCR/pantryPals',
    image: githubImage,
  },
  {
    title: 'Treasure Runner',
    description: 'A terminal-based treasure game with a C engine and a Python interface connected through ctypes. Explore rooms, use portals, move objects, and save progress in JSON.',
    tags: ['C', 'Python'],
    link: 'https://github.com',
    image: githubImage,
  },
]

const ARTICLES = [
  {
    title: 'Improving Prediction of ADR in Elderly Patients Using Machine Learning Algorithms',
    publication: 'STEM fellowship',
    date: 'July 2025',
    link: 'https://underline.io/lecture/120448-improving-prediction-of-adr-in-elderly-patients-using-machine-learning-algorithms?posterExpanded=true',
  },
  {
    title: 'PVNC Catholic’s Aviation and Aerospace Specialist High Skills Major Program taking off',
    publication: 'PVNC Catholic District School Board',
    date: 'Sept 2023',
    link: 'https://www.pvnccdsb.on.ca/pvnc-catholics-aviation-and-aerospace-specialist-high-skills-major-program-taking-off/',
  },
  {
    title: 'Asian heritage celebrated at Holy Cross',
    publication: 'Peterborough Examiner',
    date: 'May 2024',
    link: 'https://www.thepeterboroughexaminer.com/news/asian-heritage-celebrated-at-holy-cross/article_389c9e7c-091c-5f99-800c-307907e94d70.html',
  },
]

const ABOUT = "Welcome! I'm Caitlin, a third year Computer Science student at the University of Guelph! I'm currently interested in Cybersecurity, Game Development, and Web development."
const NAME = "Caitlin Chan Reynolds"
function App(){
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [typedAbout, setTypedAbout] = useState('')
  const [typedName, setTypedName] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedAbout(ABOUT)
      return
    }

    const characters = Array.from(ABOUT)
    let characterIndex = 0
    const timer = window.setInterval(() => {
      characterIndex += 1
      setTypedAbout(characters.slice(0, characterIndex).join(''))

      if (characterIndex >= characters.length) {
        window.clearInterval(timer)
      }
    }, 28)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedName(NAME)
      return
    }

    const characters = Array.from(NAME)
    let characterIndex = 0
    const timer = window.setInterval(() => {
      characterIndex += 1
      setTypedName(characters.slice(0, characterIndex).join(''))

      if (characterIndex >= characters.length) {
        window.clearInterval(timer)
      }
    }, 60)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <>
    <div className="app-container">
      <Navbar></Navbar>
      <main className="main-panel">
            <div  className="title">
              <h1>{typedName}<span className="typing-cursor" aria-hidden="true" /></h1>
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
                    <img src={s.icon} alt={s.label} />
                  </a>
                ))}
              </div>
              {/*Code for inserting images for the carousel */}
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
              <p className="about-text">
                {typedAbout}
                <span className="typing-cursor" aria-hidden="true" />
              </p>
            </Card>

            {/* skills section */}
            <h2 className="section-label" id="skills" style={{ marginTop: '18px', color: "antiquewhite" }}>Skills</h2>
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

            <h2 className="section-label" id="experience" style={{ marginTop: '18px', color: "antiquewhite" }}>Experience</h2>
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
          <h2 className="section-heading"style={{color: "antiquewhite"}}>Projects</h2>
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