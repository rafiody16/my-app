"use client";
import { useRef } from "react";
import styles from "@/app/page.module.scss";

const skills = [
  { name: "JAVASCRIPT", pct: 75, lv: "lv.75" },
  { name: "REACT/NEXT",  pct: 70, lv: "lv.70" },
  { name: "PHP",      pct: 80, lv: "lv.80" },
  { name: "LARAVEL",    pct: 85, lv: "lv.85" },
  { name: "SQL",      pct: 85, lv: "lv.85" },
  { name: "PYTHON",     pct: 70, lv: "lv.70" },
  { name: "JAVA",     pct: 75, lv: "lv.75" },
];

const projects = [
  {
    num: "01",
    title: "Graduation Clearance System (Sistem Bebas Tanggungan)",
    desc: "The Graduation Clearance System is a web-based platform designed to digitize and streamline the graduation bureaucracy at the State Polytechnic of Malang (Polinema). Developed through a Project-Based Learning approach, this project addresses the challenges of time-consuming manual procedures. The system enables final-year students to monitor and complete their graduation requirements transparently, efficiently, and entirely online, significantly accelerating the administrative process leading up to graduation.",
    tag: "PHP",
    url: "https://github.com/rafiody16/PBL_BebasTanggungan",
  },
  {
    num: "02",
    title: "Facility Damage Reporting System",
    desc: "The Facility Damage Reporting System is a web-based platform designed to digitize and streamline maintenance management within a campus environment. This project integrates a Decision Support System (DSS) that empowers the Facilities and Infrastructure (Sapras) team to determine priority weights based on specific criteria, such as damage severity or location urgency. By utilizing direct weighting input from authorities, the system automatically processes data to generate an objective repair sequence. This approach optimizes resource allocation and significantly accelerates the response time for facility maintenance.",
    tag: "Laravel",
    url: "https://github.com/rafiody16/PBL_Fastcili-TI",
  },
];

const certificates = [
  {
    id: "01",
    title: "VSGA: Junior Web Developer",
    img: "/assets/cert/vsga.png", 
    url: "#", 
  },
  {
    id: "02",
    title: "UKK Assesment: Laravel & Vue",
    img: "/assets/cert/ukk.png",
    url: "#",
  },
  {
    id: "03",
    title: "MTA: Database Administrator Fundamentals",
    img: "/assets/cert/mta-db.png", 
    url: "#", 
  },
  {
    id: "04",
    title: "MTA: Introduction to Programming Using Javascript",
    img: "/assets/cert/mta-js.png", 
    url: "#", 
  },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }
  return (
    <>
      <div className={styles.root}>
        <div className={styles.scanlines} />

        {/* Top strip */}
        <div className={`${styles.z} ${styles['top-strip']}`}>
          <div className={styles.loc}>Malang, East Java — ID</div>
          <div className={styles.status}>
            <span className={styles.dot} /> available for work
          </div>
        </div>

        {/* Hero */}
        <div className={`${styles.z} ${styles.hero}`}>
          <div className={styles['px-av']}>
            <img src="/assets/pp.png" alt="" />
          </div>
          <div>
            <div className={styles['h-name']}>RAFI ODY PRASETYO</div>
            <div className={styles['h-sub']}>Backend Engineer | Data Enthusiast</div>
          </div>
        </div>

        {/* Bio */}
        <div className={`${styles.z} ${styles.prose}`}>
          <p>
            I am <strong>Rafi Ody Prasetyo</strong>, a software developer passionate about building efficient, scalable web applications. 
            Currently pursuing my degree at State Polytechnic of Malang, I have honed my technical expertise through various full-stack and data-driven projects. 
            From crafting intuitive user interfaces to optimizing backend logic, I am committed to continuous learning and professional growth within the global technology landscape.
          </p>
          <p>
            Let’s connect and make something great together!"
          </p>
        </div>

        {/* Skills */}
        <div className={styles.z}>
          <div className={styles['sec-hd']}>skills</div>
          <div className={styles['sk-grid']}>
            {skills.map((s) => (
              <div className={styles.sk} key={s.name}>
                <div className={styles['sk-n']}>{s.name}</div>
                <div className={styles['sk-b']}><div className={styles['sk-f']} style={{ width: `${s.pct}%` }} /></div>
                <div className={styles['sk-v']}>{s.lv}</div>
              </div>
            ))}
          </div>
        </div>

        {/* certificates */}
        <div className={styles.z}>
          <div className={styles['sec-hd']}>certificates</div>
          <div className={styles['cert-wrapper']}>
            <button className={`${styles['scroll-btn']} ${styles['btn-left']}`} onClick={() => scroll('left')}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className={styles['cert-grid']} ref={scrollRef}>
              {certificates.map((cert) => (
                <div className={styles.cert} key={cert.id}>
                  <div className={styles['cert-img-wrapper']}>
                    <img src={cert.img} alt={cert.title} className={styles['cert-img']} />
                  </div>
                  <div className={styles['cert-info']}>
                    <div className={styles['cert-title']}>{cert.title}</div>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className={styles['cert-link']}>
                      Lihat Kredensial
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button className={`${styles['scroll-btn']} ${styles['btn-right']}`} onClick={() => scroll('right')}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

          </div>
        </div>

        {/* Projects */}
        <div className={styles.z}>
          <div className={styles['sec-hd']}>projects</div>
          <div className={styles['proj-list']}>
            {projects.map((p) => (
              <a className={styles.proj} key={p.num} href={p.url} target="_blank" rel="noopener noreferrer">
                <div className={styles.pix}>{p.num}</div>
                <div>
                  <div className={styles.pt}>{p.title}</div>
                  <div className={styles.pd}>{p.desc}</div>
                </div>
                <div className={styles.ptag}>{p.tag}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className={styles.z}>
          <div className={styles['sec-hd']}>links</div>
          <nav className={styles['nav-list']}>
            <a href="mailto:rafiody16@gmail.com">contact / inquiries</a>
            <a href="https://github.com/rafiody16" target="_blank" rel="noopener noreferrer">github</a>
            <a href="https://www.linkedin.com/in/rafi-ody-prasetyo-5a00621a2/" target="_blank" rel="noopener noreferrer">linkedin</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">resume</a>
          </nav>
        </div>

        {/* Footer */}
        <div className={`${styles.z} ${styles.foot}`}>
          <div className={styles.fc}>© 2026 rafi ody prasetyo</div>
          <div className={styles.ic}>— made with ❤ —</div>
        </div>
      </div>
    </>
  );
}