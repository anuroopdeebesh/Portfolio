/* ==========================================================================
   ANUROOP DEBEESH — MINIMALIST PORTFOLIO JAVASCRIPT ENGINE
   Apple / Linear / Vercel-inspired UI Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeEngine();
  initHeaderScroll();
  initMobileNavigation();
  initScrollSpy();
  initScrollReveal();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

/* ==========================================================================
   1. DUAL THEME ENGINE (LIGHT MODE DEFAULT)
   ========================================================================== */
function initThemeEngine() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const htmlEl = document.documentElement;

  // Default to light mode unless dark mode explicitly saved
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme === 'light' ? 'Light' : 'Dark'} theme`);
    });
  }

  function applyTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    if (toggleBtn) {
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.setAttribute('data-lucide', theme === 'light' ? 'moon' : 'sun');
      }
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

/* ==========================================================================
   2. HEADER SCROLL EFFECT
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   3. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-item');

  function openDrawer() {
    if (!drawer || !overlay) return;
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer || !overlay) return;
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   4. SCROLLSPY (ACTIVE NAVBAR LINK)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });

      mobileLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
}

/* ==========================================================================
   5. INTERSECTION OBSERVER (SCROLL REVEALS)
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   6. PROJECT CASE STUDY MODAL SYSTEM
   ========================================================================== */
const projectDetails = {
  articulate: {
    label: "01 / AI • SPEECH",
    title: "Articulate",
    subtitle: "Spoken English Assistant",
    image: "assets/images/articulate.png",
    description: "An AI-powered spoken English assistant designed to help users improve pronunciation, fluency, and grammar through real-time speech analysis and personalized feedback.",
    tags: ["Python", "Speech Recognition", "Logic-Based Analysis", "NLP"],
    overview: "Articulate is a speech analysis platform built to assist individuals in evaluating and refining their spoken English abilities. It provides objective, immediate evaluation of speaking cadence, phoneme clarity, and grammatical structure.",
    problem: "Learners seeking to improve their spoken communication frequently struggle to identify subtle grammatical mistakes, pauses, and mispronunciations without dedicated coaching, which can be expensive and inaccessible.",
    solution: "Articulate captures user speech streams, transcribes audio to text via speech recognition modules, runs phonetic and grammatical logic-based evaluators, and delivers actionable, personalized recommendations.",
    features: [
      "Speech-to-text conversion & real-time audio analysis",
      "Grammar detection and syntactic error highlighting",
      "Personalized feedback modules and corrective pronunciation tips",
      "Interactive practice modules for speaking confidence",
      "Continuous session progress tracking"
    ],
    approach: "Developed with Python backend logic integrating speech recognition libraries. Algorithmic rules parse transcripts for grammatical flow, sentence pacing, and conversational fluency.",
    impact: "Offers an accessible, low-latency practice tool for non-native English speakers to independently test and strengthen technical communication skills."
  },
  medismart: {
    label: "02 / WEB • DATABASE",
    title: "Medi Smart",
    subtitle: "Smart Hospital Management System",
    image: "assets/images/medismart.png",
    description: "A centralized hospital management system for organizing patient records, doctor schedules, and appointments.",
    tags: ["Python", "Flask", "MySQL", "Relational Database Design"],
    overview: "Medi Smart is a full-stack hospital management application engineered to centralize patient health records, streamline physician consultation schedules, and manage clinical appointments efficiently.",
    problem: "Medical institutions often experience friction from fragmented paper records, duplicate scheduling, delayed access to medical histories, and coordination bottlenecks across clinical departments.",
    solution: "A unified system backed by a normalized MySQL relational database with role-based access control, allowing hospital administrators, physicians, and patients to access relevant data securely.",
    features: [
      "Comprehensive patient records & medical history management",
      "Doctor schedule management with appointment collision prevention",
      "Centralized appointment booking, approval, and triage workflows",
      "Role-based authentication & granular permissions (Admin, Doctor, Patient)",
      "Normalized MySQL database schema enforcing relational integrity"
    ],
    approach: "Constructed using Python and Flask for backend API routing and session management, connected to a relational MySQL database designed with 3NF schema normalization.",
    impact: "Streamlines clinical administrative tasks, minimizes scheduling conflicts, and provides fast, secure access to vital patient records."
  },
  recruitment: {
    label: "03 / AI • NLP",
    title: "AI Recruitment System",
    subtitle: "Resume Analysis & Job Match Platform",
    image: "assets/images/ai_recruitment.jpg",
    description: "An AI-based resume analysis platform that compares resumes against job descriptions, generates match scores, and identifies skill gaps.",
    tags: ["Python", "NLP", "Flask", "Text Parsing"],
    overview: "An automated resume screening tool that extracts technical entities from applicant resumes, evaluates textual and contextual similarity against job descriptions, and highlights missing prerequisites.",
    problem: "Recruiting teams face high volumes of unstructured resumes for technical roles, making manual screening time-consuming, prone to fatigue, and subject to unconscious bias.",
    solution: "An intelligent NLP pipeline that parses resume documents, tokenizes candidate competencies, computes similarity metrics against target job criteria, and outputs an objective match evaluation.",
    features: [
      "Resume document upload and automated entity parsing",
      "Technical keyword extraction and categorization",
      "NLP-based cosine text similarity scoring against job criteria",
      "Automated skill-gap identification highlighting missing requirements",
      "Candidate recommendations for targeted resume improvement"
    ],
    approach: "Built using Python and Flask, utilizing NLP tokenization and Scikit-Learn vectorization to calculate semantic alignment between candidate resumes and job specifications.",
    impact: "Accelerates early-stage candidate screening while giving applicants clear visibility into prerequisite skills for targeted career growth."
  }
};

function openProjectModal(projectKey) {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  const project = projectDetails[projectKey];

  if (!modal || !content || !project) return;

  content.innerHTML = `
    <div style="margin-bottom: 20px;">
      <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--accent-primary); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px;">
        ${project.label}
      </div>
      <h2 style="font-size: 1.65rem; font-weight: 700; letter-spacing: -0.02em; color: var(--text-primary); margin-bottom: 4px;">
        ${project.title}
      </h2>
      <div style="font-size: 14.5px; color: var(--text-secondary); margin-bottom: 14px;">
        ${project.subtitle}
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px;">
        ${project.tags.map(t => `<span class="tech-chip">${t}</span>`).join('')}
      </div>
    </div>

    <div style="background: var(--bg-surface-secondary); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 8px;">
      <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--text-dim); letter-spacing: 0.06em;">PROJECT SUMMARY</div>
      <div style="font-size: 14px; line-height: 1.6; color: var(--text-primary);">${project.description}</div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 20px; font-size: 14.5px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 28px;">
      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Overview</h4>
        <p>${project.overview}</p>
      </div>

      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Problem &amp; Motivation</h4>
        <p>${project.problem}</p>
      </div>

      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Solution Architecture</h4>
        <p>${project.solution}</p>
      </div>

      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Key Features</h4>
        <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 6px;">
          ${project.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Development Approach</h4>
        <p>${project.approach}</p>
      </div>

      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Results &amp; Impact</h4>
        <p>${project.impact}</p>
      </div>
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 12px; padding-top: 20px; border-top: 1px solid var(--border);">
      <a href="https://github.com/anuroopdeebesh" target="_blank" rel="noopener" class="btn btn-secondary">
        GitHub ↗
      </a>
      <button class="btn btn-primary" onclick="closeProjectModal()">
        Close
      </button>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

/* ==========================================================================
   7. RESUME MODAL & ATS DOWNLOAD
   ========================================================================== */
function openResumeModal() {
  const modal = document.getElementById('project-modal');
  const container = modal ? modal.querySelector('.modal-container') : null;
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  if (container) {
    container.classList.add('resume-modal-container');
  }

  content.innerHTML = `
    <!-- Top Action Toolbar -->
    <div class="resume-toolbar">
      <div class="resume-toolbar-left">
        <i data-lucide="file-check" style="color: var(--accent-primary); width: 20px; height: 20px;"></i>
        <span style="font-weight: 600; font-size: 15px; color: var(--text-primary);">Curriculum Vitae / Resume</span>
      </div>
      <div class="resume-toolbar-actions">
        <button class="btn btn-primary btn-sm" onclick="downloadResumePdf()">
          <i data-lucide="download" style="width: 14px; height: 14px;"></i>
          <span>Download PDF</span>
        </button>
      </div>
    </div>

    <!-- ATS-Formatted Resume Paper (Matching exact resume document) -->
    <div class="resume-paper" id="resume-printable-doc">
      <!-- Header -->
      <div class="resume-header-block">
        <h1 class="resume-name">ANUROOP DEBEESH</h1>
        <div class="resume-contact-line">
          <span>✉ <a href="mailto:anuroopdeebesh@gmail.com">anuroopdeebesh@gmail.com</a></span>
          <span>|</span>
          <span>☎ <a href="tel:+918208824026">+91 8208824026</a></span>
          <span>|</span>
          <span><a href="https://github.com/anuroopdeebesh" target="_blank" rel="noopener">github.com/anuroopdeebesh</a></span>
          <span>|</span>
          <span><a href="https://linkedin.com/in/anuroop-debeesh" target="_blank" rel="noopener">linkedin.com/in/anuroop-debeesh</a></span>
        </div>
      </div>

      <!-- Professional Summary -->
      <div class="resume-section">
        <div class="resume-section-title">PROFESSIONAL SUMMARY</div>
        <p class="resume-summary-text">
          Third-year Computer Science Engineering (AI &amp; ML) student with practical experience in Python, Java, and SQL, and hands-on exposure to speech recognition, database management, and full-stack application development. Proven ability to independently design, build, and deliver end-to-end software projects, including an AI-driven spoken English assistant, a hospital management system, and an AI-based recruitment system. Seeking an internship or entry-level opportunity in Software Development or Artificial Intelligence / Machine Learning.
        </p>
      </div>

      <!-- Technical Skills -->
      <div class="resume-section">
        <div class="resume-section-title">TECHNICAL SKILLS</div>
        <div class="resume-skills-list">
          <div class="resume-skills-row"><strong>Languages:</strong> Python, Java, SQL</div>
          <div class="resume-skills-row"><strong>Frontend &amp; Web:</strong> HTML, CSS, JavaScript, React</div>
          <div class="resume-skills-row"><strong>Databases:</strong> MySQL, SQLite</div>
          <div class="resume-skills-row"><strong>Core Concepts:</strong> Speech Recognition, DBMS</div>
          <div class="resume-skills-row"><strong>Tools &amp; Platforms:</strong> Git, GitHub, VS Code</div>
        </div>
      </div>

      <!-- Key Projects -->
      <div class="resume-section">
        <div class="resume-section-title">KEY PROJECTS</div>
        
        <!-- Project 1 -->
        <div class="resume-project-item">
          <div class="resume-project-heading">
            Articulate — Spoken English Assistant <span class="resume-project-tech">| Python, Speech Recognition, Logic-Based Analysis</span>
          </div>
          <ul class="resume-bullets">
            <li>Developed an AI-powered spoken English assistant that helps users improve pronunciation, fluency, and grammar through real-time speech analysis and feedback.</li>
            <li>Implemented speech-to-text conversion combined with logic-based feedback and analysis to detect errors and generate actionable, personalized suggestions for learners.</li>
            <li>Designed interactive practice modules with progress tracking to help users build confidence in spoken English over time.</li>
          </ul>
        </div>

        <!-- Project 2 -->
        <div class="resume-project-item">
          <div class="resume-project-heading">
            Medi Smart — Smart Hospital Management System <span class="resume-project-tech">| Python, Flask, MySQL</span>
          </div>
          <ul class="resume-bullets">
            <li>Built a centralized system to manage patient records, doctor schedules, and appointments, improving coordination across hospital operations.</li>
            <li>Implemented role-based login access for admin, doctors, and patients to ensure secure and organized data handling.</li>
            <li>Designed and managed a MySQL database to store and retrieve hospital data efficiently.</li>
          </ul>
        </div>

        <!-- Project 3 -->
        <div class="resume-project-item">
          <div class="resume-project-heading">
            AI Recruitment System <span class="resume-project-tech">| Python, NLP, Flask</span>
          </div>
          <ul class="resume-bullets">
            <li>Developed a resume analysis tool that parses uploaded resumes and evaluates them against job descriptions to generate a match score.</li>
            <li>Applied NLP techniques, including keyword extraction and text similarity scoring, to identify skill gaps and recommend improvements to candidates.</li>
            <li>Built a web-based interface enabling users to upload resumes and view detailed, easy-to-read analysis results.</li>
          </ul>
        </div>
      </div>

      <!-- Education -->
      <div class="resume-section">
        <div class="resume-section-title">EDUCATION</div>
        
        <div class="resume-edu-item">
          <div class="resume-edu-heading">
            <span class="resume-edu-degree">Bachelor of Engineering — Computer Science Engineering (AI &amp; ML)</span>
          </div>
          <div class="resume-edu-inst">Gharda Institute of Technology • Currently in Third Year</div>
          <ul class="resume-bullets">
            <li>Pursuing a specialization in Artificial Intelligence and Machine Learning, with strong grounding in database management, programming, and software development practices.</li>
          </ul>
        </div>

        <div class="resume-edu-item" style="margin-top: 6px;">
          <div class="resume-edu-degree">Higher Secondary Certificate (HSC) — 12th Standard</div>
          <div class="resume-summary-text" style="color: #4B5563;">Achieved 79%, building a solid foundation in mathematics and science ahead of pursuing engineering.</div>
        </div>

        <div class="resume-edu-item" style="margin-top: 6px;">
          <div class="resume-edu-degree">Secondary School Certificate (SSC) — 10th Standard</div>
          <div class="resume-summary-text" style="color: #4B5563;">Achieved 90%, reflecting consistent academic performance throughout schooling.</div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="resume-section" style="margin-bottom: 0;">
        <div class="resume-section-title">CERTIFICATIONS</div>
        <ul class="resume-bullets">
          <li><strong>Database Management System (DBMS)</strong> — SEED Infotech Ltd., Pune, in association with Gharda Institute of Technology</li>
        </ul>
      </div>
    </div>

    <!-- Modal Footer Actions -->
    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 18px; margin-top: 20px;">
      <div style="font-size: 13px; color: var(--text-dim);">
        <i data-lucide="shield-check" style="width: 14px; height: 14px; vertical-align: middle; color: #10B981;"></i> ATS-Ready Format
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-secondary" onclick="closeProjectModal()">Close</button>
        <button class="btn btn-primary" onclick="downloadResumePdf()">
          <i data-lucide="download" style="width: 15px; height: 15px;"></i> Download PDF
        </button>
      </div>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function downloadResumePdf() {
  const element = document.getElementById('resume-printable-doc');
  if (!element) {
    downloadResume();
    return;
  }

  showToast('Generating high-quality PDF...');

  if (window.html2pdf) {
    const opt = {
      margin:       [10, 10, 10, 10],
      filename:     'Anuroop_Debeesh_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    window.html2pdf().set(opt).from(element).save().then(() => {
      showToast('Resume downloaded successfully!');
    }).catch(err => {
      console.error(err);
      window.print();
    });
  } else {
    window.print();
  }
}

function printResume() {
  window.print();
}

function downloadResume() {
  showToast('Downloading ATS text resume...');

  const resumeContent = `ANUROOP DEBEESH
anuroopdeebesh@gmail.com | +91 8208824026 | github.com/anuroopdeebesh | linkedin.com/in/anuroop-debeesh

PROFESSIONAL SUMMARY
Third-year Computer Science Engineering (AI & ML) student with practical experience in Python, Java, and SQL, and hands-on exposure to speech recognition, database management, and full-stack application development. Proven ability to independently design, build, and deliver end-to-end software projects, including an AI-driven spoken English assistant, a hospital management system, and an AI-based recruitment system. Seeking an internship or entry-level opportunity in Software Development or Artificial Intelligence / Machine Learning.

TECHNICAL SKILLS
Languages: Python, Java, SQL
Frontend & Web: HTML, CSS, JavaScript, React
Databases: MySQL, SQLite
Core Concepts: Speech Recognition, DBMS
Tools & Platforms: Git, GitHub, VS Code

KEY PROJECTS
Articulate — Spoken English Assistant | Python, Speech Recognition, Logic-Based Analysis
● Developed an AI-powered spoken English assistant that helps users improve pronunciation, fluency, and grammar through real-time speech analysis and feedback.
● Implemented speech-to-text conversion combined with logic-based feedback and analysis to detect errors and generate actionable, personalized suggestions for learners.
● Designed interactive practice modules with progress tracking to help users build confidence in spoken English over time.

Medi Smart — Smart Hospital Management System | Python, Flask, MySQL
● Built a centralized system to manage patient records, doctor schedules, and appointments, improving coordination across hospital operations.
● Implemented role-based login access for admin, doctors, and patients to ensure secure and organized data handling.
● Designed and managed a MySQL database to store and retrieve hospital data efficiently.

AI Recruitment System | Python, NLP, Flask
● Developed a resume analysis tool that parses uploaded resumes and evaluates them against job descriptions to generate a match score.
● Applied NLP techniques, including keyword extraction and text similarity scoring, to identify skill gaps and recommend improvements to candidates.
● Built a web-based interface enabling users to upload resumes and view detailed, easy-to-read analysis results.

EDUCATION
Bachelor of Engineering — Computer Science Engineering (AI & ML)
Gharda Institute of Technology • Currently in Third Year
● Pursuing a specialization in Artificial Intelligence and Machine Learning, with strong grounding in database management, programming, and software development practices.

Higher Secondary Certificate (HSC) — 12th Standard
Achieved 79%, building a solid foundation in mathematics and science ahead of pursuing engineering.

Secondary School Certificate (SSC) — 10th Standard
Achieved 90%, reflecting consistent academic performance throughout schooling.

CERTIFICATIONS
● Database Management System (DBMS) — SEED Infotech Ltd., Pune, in association with Gharda Institute of Technology
`;

  const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Anuroop_Debeesh_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/* ==========================================================================
   8. CONTACT FORM & TOAST SYSTEM
   ========================================================================== */
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (!name || !email || !message) {
    showToast('Please complete all required fields.');
    return;
  }

  showToast(`Thank you, ${name}. Opening your email client...`);

  const mailtoLink = `mailto:anuroopdeebesh@gmail.com?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;

  setTimeout(() => {
    window.location.href = mailtoLink;
  }, 1000);

  document.getElementById('contact-form').reset();
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="check" style="width: 15px; height: 15px; color: var(--accent-primary);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  if (window.lucide) {
    window.lucide.createIcons();
  }

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

// Global window bindings
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openResumeModal = openResumeModal;
window.downloadResume = downloadResume;
window.downloadResumePdf = downloadResumePdf;
window.printResume = printResume;
window.handleContactSubmit = handleContactSubmit;
window.showToast = showToast;
