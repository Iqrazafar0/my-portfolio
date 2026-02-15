"use client"

export default function Home() {
  const mySkills = [
    { category: "Full-Stack", items: "Django, React, Python, JavaScript, HTML5, CSS3" },
    { category: "Automation", items: "n8n, HubSpot, Zapier, Postman, API" },
    { category: "Database", items: "PostgreSQL, Git/GitHub, Deployment" }
  ];

  const myProjects = [
    {
        title: "AutoConsult - Business Strategy Portal",
        desc: "A high-performance full-stack web application developed for a consulting firm.",
        videoUrl: "autoconsult-demo.mp4",
        liveLink: "https://autoconsult-frontend.onrender.com/",
        githubLink: "https://github.com/Iqrazafar0/autoconsult-backend",
        thumbnail: "project-image.jpg",
        tech: "React.js, Django REST Framework, PostgreSQL, Tailwind CSS, Framer Motion",
        details: [
            "Client Inquiry & Automation: Built a custom lead capture system.",
            "Dynamic Data Management: Powered by PostgreSQL.",
            "Secure Admin Control: Integrated secure dashboard for real-time updates."
        ]
    }
  ];

  return (
    <main>
      <section className="hero-section">
        <h1 className="hero-name">Iqra Zafar</h1>
        <div className="profile-wrapper">
          <img src="adited.jpeg" alt="Iqra Zafar" className="Portfolio-photo" />
        </div>
        <div className="hero-role">
          Full-Stack Developer &<br />
          Automation Strategist
        </div>
      </section>

      <div className="content-wrapper">
        <section className="info-section">
          <h2 className="section-title">ABOUT</h2>
          <div className="line"></div>
          <p className="section-desc">
            I am a Full-Stack Developer specializing in building high-performance web applications and 
            automated business systems. My expertise lies in bridging the gap between robust backend 
            logic with <strong>Django & PostgreSQL</strong> and sleek, interactive user interfaces 
            using <strong>React.js</strong>.
            <br /><br />
            With a strong foundation in <strong>Automation Strategy (n8n, HubSpot, Zapier)</strong>, 
            I focus on creating digital products that don't just look good but actually optimize 
            workflows and solve real-world business challenges.
          </p>
        </section>

        <section className="info-section">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="line"></div>
          <div className="exp-item">
            <h3 className="company-name">DMFlows</h3>
            <p className="job-meta">Onsite Internship | 21 July 2025 — 31 August 2025</p>
            <p className="section-desc">
              Worked as an Automation Specialist focusing on workflow optimization. Developed and managed complex automation sequences using <span className="text-green">n8n, HubSpot, and Zapier</span>.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <div className="line"></div>
          <div id="projects-container">
            {myProjects.map((project, index) => (
              <div key={index} className="project-item" style={{ marginBottom: '50px' }}>
                <h3 className="company-name">{project.title}</h3>
                <div className="video-container" style={{ margin: '20px 0' }}>
                  <video width="100%" controls poster={project.thumbnail} style={{ borderRadius: '8px' }}>
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                </div>
                <p className="section-desc">{project.desc}</p>
                <p className="job-desc" style={{ marginTop: '10px' }}>
                  {project.details.map((d, i) => (
                    <span key={i}>• {d}<br /></span>
                  ))}
                </p>
                <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                  <a href={project.liveLink} target="_blank" className="download-btn" style={{ padding: '8px 15px', fontSize: '0.6rem' }}>Live Link</a>
                  <a href={project.githubLink} target="_blank" className="download-btn" style={{ padding: '8px 15px', fontSize: '0.6rem', background: '#ffffff', color: '#1a3c34' }}>GitHub</a>
                </div>
                <p className="job-meta" style={{ marginTop: '15px' }}>
                  <span className="text-white">{project.tech}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title">SKILLS</h2>
          <div className="line"></div>
          <div className="skills-grid">
            {mySkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <p className="skill-category">{skill.category}:</p>
                <p className="skill-desc">{skill.items}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-group">
            <span className="footer-label">LOCATION</span>
            <p className="footer-info">SAHIWAL, PAKISTAN</p>
          </div>
          <div className="footer-group">
            <span className="footer-label">CONTACT DETAILS</span>
            <p className="footer-info">iqraraozafar0@gmail.com</p>
            <p className="footer-info" style={{ marginTop: '5px' }}>+92 325 6888003</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© IQRA ZAFAR</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/iqra-zafar-551a02346/" target="_blank">LINKEDIN</a>
            <a href="https://github.com/Iqrazafar0" target="_blank">GITHUB</a>
          </div>
        </div>
      </footer>
    </main>
  );
}