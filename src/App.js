import React, { useEffect, useState } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import avatar from "./avatartion.png";
import sawyer from "./sawyer.png";
import "./App.css"; 

export default function App() {
  const name = "Daniel Wan Rosli";
  const subtitle = "danwr [at] cs [dot] stanford [dot] edu";
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000); // update every 30s
    return () => clearInterval(t);
  }, []);

  const mvTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    weekday: "short",
  }).format(now);
  const mvDate = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    month: "short",
    day: "numeric",
  }).format(now);
  const mvHour = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    hour12: false,
  }).format(now);
  const mvIsDay = Number(mvHour) >= 6 && Number(mvHour) < 18;

  return (
    <div className="app">
      <main className="container">
        <header className="hero">
          <div className="avatar">
            <img src={avatar} alt="me avatar" />
          </div>
          <div className="hero-text">
            <h1 className="name">{name}</h1>
            <p className="subhead">{subtitle}</p>
          </div>
        </header>

        <section className="masonry" aria-label="masonry">
          {/* Education */}
          <article className="tile card tone-rose colbreak">
            <div className="title"><span>Education</span></div>
            <div className="ed-school">Stanford University</div>
            <div className="meta">B.S. ’23 — Computer Science &amp; HCI</div>
            <div className="meta">M.S. ’24 — Computer Science &amp; HCI</div>
            <div className="divider" />
            <div className="subtitle">TA’ed for</div>
            <ul className="bullets">
              <li><a href="https://explorecourses.stanford.edu/search?q=cs147l" target="_blank" rel="noreferrer noopener">CS 147L: Cross-Platform Mobile App Development</a></li>
              <li><a href="https://explorecourses.stanford.edu/search?q=cs347" target="_blank" rel="noreferrer noopener">CS 347: Human-Computer Interaction: Foundations &amp; Frontiers</a></li>
            </ul>
          </article>

          {/* Skills */}
          <article className="tile card tone-sky">
            <div className="title"><span>Skills</span></div>
            <div className="chips">
              <span className="chip">TypeScript</span>
              <span className="chip">React</span>
              <span className="chip">Node</span>
              <span className="chip">Express</span>
              <span className="chip">React Native</span>
              <span className="chip">WCAG</span>
              <span className="chip">Design thinking</span>
              <span className="chip">Figma</span>
              <span className="chip">Prototyping</span>
              <span className="chip">Python</span>
              <span className="chip">C++</span>
              <span className="chip">C</span>
              <span className="chip">D3</span>
              <span className="chip">Supabase</span>
              <span className="chip">Flask</span>
              <span className="chip">GCP</span>
              <span className="chip">SQL</span>
              <span className="chip">AWS</span>
            </div>
          </article>

          {/* MV time */}
          <article className="tile card tone-emerald">
            <div className="title"><span>Mountain View, CA</span></div>
            <div className="row"><span>{mvIsDay ? "☀️ " : "🌙 "}</span><strong style={{fontSize:16}}>{mvTime}</strong></div>
            <div className="muted" style={{marginTop:4}}>{mvDate} · Pacific Time</div>
            <div style={{paddingBottom: "12px"}}></div>
          </article>

          {/* Projects */}
          <article className="tile card tone-amber">
            <div className="title"><span>Projects</span></div>
            <ul className="bullets">
              <li><a href="https://www.youtube.com/watch?v=CVUS3XCwa74" target="_blank" rel="noreferrer noopener">voluntogether</a></li>
              <li><a href="#">Exploring Motivations for Adding Alternative Text</a></li>
              <li><a href="/neighborhoodwatch.pdf" target="_blank" rel="noreferrer noopener">Neighborhood Watch</a></li>
              <li><a href="#">LearningStyle</a></li>
            </ul>
            <div style={{paddingBottom: "20px"}}></div>
          </article>

          {/* Research */}
          <article className="tile card tone-lilac">
            <div className="title"><span>Published work</span></div>
            <ul className="bullets">
              <li><a href="https://dl.acm.org/doi/10.1145/3613904.3642517" target="_blank" rel="noreferrer noopener">ReactGenie — A framework for complex multimodal interactions with LLMs (CHI 2024)</a></li>
              <li><a href="https://hci.stanford.edu/research/smartprimer/pdfs/Cheng_ACORN_draft_2025.pdf" target="_blank" rel="noreferrer noopener">ACORN — Adaptive educational stories (UIST 2025)</a></li>
            </ul>
            <div style={{paddingBottom: "20px"}}></div>
          </article>

          {/* Resume */}
          <article className="tile card tone-sky pill" style={{justifyContent: 'center', alignItems: 'center'}}>
            <div className="title"><span>UX Engineer at Google</span></div>
            <div className="ed-school">
              <a href="/resume.pdf" target="_blank" rel="noreferrer noopener">Check out my resume</a>
            </div>
          </article>

          {/* Work in progress */}
          <article className="tile card tone-rose">
            <div className="title"><span>What I'm working on</span></div>
            <ul className="bullets">
              <li>Creating expressive dashboards using React and D3</li>
              <li>Prototyping internal tooling</li>
              <li>Exploring LLMs in design thinking and UX</li>
            </ul>
          </article>

          {/* Interests */}
          <article className="tile card tone-emerald">
            <div className="title"><span>Interests</span></div>
            <ul className="bullets">
              <li>Software engineering and UX</li>
              <li>Reality TV! I particularly love Survivor and trying to analyze the edit to predict the winner</li>
              <li>Playing Super Smash Bros. Melee competitively</li>
              <li>Trying to improve at art, skating, and picking up general life skills</li>
              <li>Adopting the life of a cat father :)</li>
            </ul>
          </article>

          {/* Socials */}
          <article className="tile card">
            <div className="title"><span>Connect with me!</span></div>
            <ul className="social-links">
              <li><a className="social-link" href="https://github.com/danielwanrosli" target="_blank" rel="noreferrer noopener"><span className="icon-bubble"><Github/></span><span>GitHub</span><span className="handle">danielwanrosli</span></a></li>
              <li><a className="social-link" href="https://linkedin.com/in/danielwanrosli" target="_blank" rel="noreferrer noopener"><span className="icon-bubble"><Linkedin/></span><span>LinkedIn</span><span className="handle">Daniel Wan Rosli</span></a></li>
              <li><a className="social-link" href="https://instagram.com/danielwanrosli" target="_blank" rel="noreferrer noopener"><span className="icon-bubble"><Instagram/></span><span>Instagram</span><span className="handle">danielwanrosli</span></a></li>
            </ul>
          </article>

          {/* Kitten */}
          <article className="tile card tone-lilac">
            <div className="title"><span>My kitten, Sawyer</span></div>
            <img className="hole" src={sawyer} alt="kitten" style={{height: 270}} />
          </article>
        </section>

        <footer className="footer">
          <p>designed and developed by me!</p>
        </footer>
      </main>
    </div>
  );
}
