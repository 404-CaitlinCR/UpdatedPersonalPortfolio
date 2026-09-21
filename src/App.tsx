
import "./App.css"
import Navbar from "./components/nav";
import PixelAvatar from "./components/pixelAvatar";
import animatedPixelMe from "./assets/animatedPixelme.gif";
import Card from "./components/card";
import ProjectCard from "./components/projectCard";

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
  { label: 'email', value: 'caitlin@email.com', href: 'mailto:caitlin@email.com' },
  { label: 'linkedin', value: 'linkedin.com/in/caitlin', href: 'https://linkedin.com' },
  { label: 'github', value: 'github.com/caitlin', href: 'https://github.com' },
]
const SKILLS = {
  Frontend: ['React', 'TypeScript', 'Vite', 'CSS / Tailwind', 'Figma'],
  Backend:  ['Node.js', 'Express', 'Python', 'PostgreSQL', 'REST APIs'],
  Tools:    ['Git & GitHub', 'VS Code', 'Linux', 'Jest', 'Postman'],
}
const PROJECTS = [
  {
    title: 'Personal Website',
    description: 'A simple website to introduce myself as well as share my projects',
    tags: ['HTML', 'CSS'],
    link: 'https://github.com/404-CaitlinCR/PersonalPortfolio',
  },
  {
    title: 'Interactive TO-DO List',
    description: 'This is a simple and interactive To-Do List, where you can add, mark and remove tasks',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/404-CaitlinCR/ToDoLists/tree/main/todoHTML',
  },
  {
    title: 'Pantry Pal',
    description: 'An AI assistent created using googles gemini API, this chat box takes in ingredients and creates them into a delicious recipe!. Front end was done using html and css, backend was done using python, flask, and javascript.',
    tags: ['HTML', 'CSS', 'Python'],
    link: 'https://github.com/404-CaitlinCR/pantryPals',
  },
  {
    title: 'CogLab',
    description: 'Browser-based cognitive psychology experiments for research data collection.',
    tags: ['Vanilla JS', 'Python', 'Flask'],
    link: 'https://github.com',
  },
]

const ARTICLES = [
  {
    title: 'The Psychology of Dark Patterns in UX',
    publication: 'UofG Design Review',
    date: 'Mar 2024',
    link: '#',
  },
  {
    title: 'Building Accessible React Apps from the Ground Up',
    publication: 'Dev.to',
    date: 'Jan 2024',
    link: '#',
  },
  {
    title: 'Cognitive Load Theory and Interface Design',
    publication: 'Research Paper – PSY 3200',
    date: 'Dec 2023',
    link: '#',
  },
]

const ABOUT = "Welcome! I'm Caitlin, a third year Computer Science student at the University of Guelph"
function App(){
  return (
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
                  <div key={s.label} className="social-mini-chip" />
                ))}
              </div>
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
  );
}

export default App;