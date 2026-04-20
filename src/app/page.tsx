"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { ArrowRight, Terminal, Smartphone, Mail, MapPin, Phone, GraduationCap, Briefcase, ChevronRight, Globe } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'internships' | 'education'>('internships');
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.main}>
      {/* Ambient glowing blobs */}
      <div className={styles.ambientBloom} />
      <div className={styles.ambientBloomSecondary} />

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>Raj Patel</div>
        <ul className={`${styles.navLinks} ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#about" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#experience" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
        <div className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
           <div className={`${styles.hamburger} ${mobileMenuOpen ? 'active' : ''}`}></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className={styles.hero}>
        <h1 className={`${styles.heroTitle} animate-fade-in-up delay-100`}>
          Software & Frontend <br />
          <span className="text-gradient">Developer.</span>
        </h1>
        
        <p className={`${styles.heroSubtitle} animate-fade-in-up delay-200`}>
          I'm a frontend developer with hands-on experience building responsive, scalable web applications using React.js and Next.js. Currently pursuing an MS in Information Technology at Montclair State University.
        </p>
        
        <div className={`${styles.heroActions} animate-fade-in-up delay-300`}>
          <a href="#projects" className={styles.primaryBtn}>
            View My Work <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Experience & Education</h2>
          <p className={styles.sectionSub}>My professional and academic journey.</p>
        </div>

        <div className={styles.tabsWrapper}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'internships' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('internships')}
          >
            Internships
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'education' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        <div className={styles.timelineContainer}>
          {activeTab === 'internships' && (
            <>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDiamond}><Briefcase size={14} /></div>
                <div>
                  <h3 className={styles.timelineRole}>Frontend Development Intern</h3>
                  <p className={styles.timelineCompany}>Apple Tech Pvt. Ltd. — India | Jan 2024 – Jun 2024</p>
                  <ul className={styles.timelineList}>
                    <li><ChevronRight size={16}/> Developed and enhanced reusable frontend UI components using React.js.</li>
                    <li><ChevronRight size={16}/> Integrated REST APIs with frontend applications, enabling dynamic data rendering.</li>
                    <li><ChevronRight size={16}/> Improved cross-browser compatibility and mobile responsiveness.</li>
                  </ul>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDiamond}><Briefcase size={14} /></div>
                <div>
                  <h3 className={styles.timelineRole}>Web Development Intern</h3>
                  <p className={styles.timelineCompany}>Tech Elecon Pvt. Ltd. — India | May 2023</p>
                  <ul className={styles.timelineList}>
                    <li><ChevronRight size={16}/> Designed responsive user interfaces using HTML5, CSS3, Bootstrap, and React.</li>
                    <li><ChevronRight size={16}/> Created UI wireframes and interactive prototypes in Figma for seamless handoff.</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeTab === 'education' && (
            <>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDiamond}><GraduationCap size={14} /></div>
                <div>
                  <h3 className={styles.timelineRole}>Master of Science in Computer Science</h3>
                  <p className={styles.timelineCompany}>Montclair State University — New Jersey, USA</p>
                  <p className={styles.timelineStatus}>Expected 2026</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDiamond}><GraduationCap size={14} /></div>
                <div>
                  <h3 className={styles.timelineRole}>B.E. in Information Technology</h3>
                  <p className={styles.timelineCompany}>A.D. Patel Institute of Technology — India</p>
                  <p className={styles.timelineStatus}>Graduated May 2024 | CGPA: 7.94 / 10</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSub}>Applications I've built and designed.</p>
        </div>

        <div className={styles.grid}>
          {/* Project 1 */}
          <div 
            className={styles.card}
            ref={(el) => { cardsRef.current[0] = el; }}
          >
            <div className={styles.cardIcon}>
              <Terminal size={24} />
            </div>
            <h3 className={styles.cardTitle}>Khareedo – E-Commerce</h3>
            <p className={styles.cardDesc}>
              Built a modern, full-featured e-commerce frontend using Next.js with server-side rendering (SSR) for improved SEO and performance. Designed reusable UI components.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>Tailwind CSS</span>
            </div>
          </div>

          {/* Project 2 */}
          <div 
            className={styles.card}
            ref={(el) => { cardsRef.current[1] = el; }}
          >
            <div className={styles.cardIcon}>
              <Smartphone size={24} />
            </div>
            <h3 className={styles.cardTitle}>Zip Food – Mobile App</h3>
            <p className={styles.cardDesc}>
              Designed and implemented mobile UI using Flutter, focusing on smooth navigation and an intuitive user experience. Integrated Firebase for real-time live order tracking.
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>Flutter</span>
              <span className={styles.tag}>Firebase</span>
              <span className={styles.tag}>UI/UX</span>
            </div>
          </div>

          {/* Project 3 */}
          <div 
            className={styles.card}
            ref={(el) => { cardsRef.current[2] = el; }}
          >
            <div className={styles.cardIcon}>
              <Globe size={24} />
            </div>
            <h3 className={styles.cardTitle}>Translator App</h3>
            <p className={styles.cardDesc}>
              A real-time language translation web application built with React.js. Features a clean, responsive UI and connects to translation APIs for fast, accurate results.
              <br /><br />
              <a href="https://translator-app-psi-henna.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontWeight: 500, display: "flex", gap: "0.25rem", alignItems: "center" }}>
                View Live Demo <ArrowRight size={14} />
              </a>
            </p>
            <div className={styles.tags}>
              <span className={styles.tag}>React.js</span>
              <span className={styles.tag}>Vercel</span>
              <span className={styles.tag}>REST API</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <p className={styles.sectionSub}>Technologies and tools I work with.</p>
        </div>
        
        <div className={styles.skillsWrapper}>
          <div className={styles.skillCategory}>
            <h3>Languages</h3>
            <div className={styles.tags}>
              <span className={styles.tag}>JavaScript (ES6+)</span>
              <span className={styles.tag}>Java</span>
              <span className={styles.tag}>C++</span>
              <span className={styles.tag}>C</span>
              <span className={styles.tag}>SQL</span>
            </div>
          </div>
          
          <div className={styles.skillCategory}>
            <h3>Frontend & Mobile</h3>
            <div className={styles.tags}>
              <span className={styles.tag}>React.js</span>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>Tailwind CSS</span>
              <span className={styles.tag}>Bootstrap</span>
              <span className={styles.tag}>Flutter</span>
              <span className={styles.tag}>Android (Java)</span>
            </div>
          </div>
          
          <div className={styles.skillCategory}>
            <h3>Tools & Databases</h3>
            <div className={styles.tags}>
              <span className={styles.tag}>MongoDB</span>
              <span className={styles.tag}>MySQL</span>
              <span className={styles.tag}>Supabase</span>
              <span className={styles.tag}>Git / GitHub</span>
              <span className={styles.tag}>Figma</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <div className={styles.contactWrapper}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <p className={styles.contactDesc}>
            I'm currently looking for new opportunities as a frontend or software development intern. Whether you have a question or just want to connect, I'll try my best to get back to you!
          </p>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}><Mail size={20} /></div>
              <a href="mailto:patelrj539@gmail.com">patelrj539@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}><Phone size={20} /></div>
              <span>+1 (732) 690-2765</span>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}><MapPin size={20} /></div>
              <span>Montclair, NJ, USA</span>
            </div>
          </div>
          
          <a href="mailto:patelrj539@gmail.com" className={styles.primaryBtn} style={{marginTop: "2rem"}}>
            Say Hello <ArrowRight size={18} />
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Raj Patel. All rights reserved.</p>
      </footer>
    </div>
  );
}
