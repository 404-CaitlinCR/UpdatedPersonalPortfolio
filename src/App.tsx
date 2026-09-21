
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
    title: 'MindMap',
    description: 'A psychology-informed note-taking app with spaced repetition and mood tracking.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com',
  },
  {
    title: 'PixelChat',
    description: 'Real-time chat app with pixel-art avatars and custom emoji builder.',
    tags: ['WebSockets', 'Canvas API', 'Express'],
    link: 'https://github.com',
  },
  {
    title: 'StudyBuddy',
    description: 'Collaborative study platform with live sessions, timers, and shared notes.',
    tags: ['React', 'Firebase', 'TypeScript'],
    link: 'https://github.com',
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