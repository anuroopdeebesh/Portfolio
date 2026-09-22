(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{m(),u(),p(),g(),h(),window.lucide&&window.lucide.createIcons()});function m(){const t=document.getElementById("theme-toggle-btn"),n=document.documentElement,i=localStorage.getItem("portfolio-theme")||"light";e(i),t&&t.addEventListener("click",()=>{const o=(n.getAttribute("data-theme")||"light")==="light"?"dark":"light";e(o),r(`Switched to ${o==="light"?"Light":"Dark"} theme`)});function e(a){if(n.setAttribute("data-theme",a),localStorage.setItem("portfolio-theme",a),t){const o=t.querySelector("i");o&&o.setAttribute("data-lucide",a==="light"?"moon":"sun")}window.lucide&&window.lucide.createIcons()}}function u(){const t=document.getElementById("site-header");t&&window.addEventListener("scroll",()=>{window.scrollY>20?t.classList.add("scrolled"):t.classList.remove("scrolled")})}function p(){const t=document.getElementById("mobile-menu-toggle"),n=document.getElementById("mobile-drawer-close"),i=document.getElementById("mobile-drawer"),e=document.getElementById("mobile-drawer-overlay"),a=document.querySelectorAll(".mobile-nav-item");function o(){!i||!e||(i.classList.add("active"),e.classList.add("active"),document.body.style.overflow="hidden")}function s(){!i||!e||(i.classList.remove("active"),e.classList.remove("active"),document.body.style.overflow="")}t&&t.addEventListener("click",o),n&&n.addEventListener("click",s),e&&e.addEventListener("click",s),a.forEach(l=>{l.addEventListener("click",s)})}function g(){const t=document.querySelectorAll("section[id]"),n=document.querySelectorAll(".nav-link"),i=document.querySelectorAll(".mobile-nav-item");window.addEventListener("scroll",()=>{let e="";const a=window.scrollY+180;t.forEach(o=>{const s=o.offsetTop,l=o.offsetHeight;a>=s&&a<s+l&&(e=o.getAttribute("id"))}),e&&(n.forEach(o=>{o.getAttribute("href")===`#${e}`?o.classList.add("active"):o.classList.remove("active")}),i.forEach(o=>{o.getAttribute("href")===`#${e}`?o.classList.add("active"):o.classList.remove("active")}))})}function h(){const t=document.querySelectorAll(".reveal"),n=new IntersectionObserver(i=>{i.forEach(e=>{e.isIntersecting&&e.target.classList.add("active")})},{threshold:.1});t.forEach(i=>n.observe(i))}const v={articulate:{label:"01 / AI • SPEECH",title:"Articulate",subtitle:"Spoken English Assistant",image:"assets/images/articulate.png",description:"An AI-powered spoken English assistant designed to help users improve pronunciation, fluency, and grammar through real-time speech analysis and personalized feedback.",tags:["Python","Speech Recognition","Logic-Based Analysis","NLP"],overview:"Articulate is a speech analysis platform built to assist individuals in evaluating and refining their spoken English abilities. It provides objective, immediate evaluation of speaking cadence, phoneme clarity, and grammatical structure.",problem:"Learners seeking to improve their spoken communication frequently struggle to identify subtle grammatical mistakes, pauses, and mispronunciations without dedicated coaching, which can be expensive and inaccessible.",solution:"Articulate captures user speech streams, transcribes audio to text via speech recognition modules, runs phonetic and grammatical logic-based evaluators, and delivers actionable, personalized recommendations.",features:["Speech-to-text conversion & real-time audio analysis","Grammar detection and syntactic error highlighting","Personalized feedback modules and corrective pronunciation tips","Interactive practice modules for speaking confidence","Continuous session progress tracking"],approach:"Developed with Python backend logic integrating speech recognition libraries. Algorithmic rules parse transcripts for grammatical flow, sentence pacing, and conversational fluency.",impact:"Offers an accessible, low-latency practice tool for non-native English speakers to independently test and strengthen technical communication skills."},medismart:{label:"02 / WEB • DATABASE",title:"Medi Smart",subtitle:"Smart Hospital Management System",image:"assets/images/medismart.png",description:"A centralized hospital management system for organizing patient records, doctor schedules, and appointments.",tags:["Python","Flask","MySQL","Relational Database Design"],overview:"Medi Smart is a full-stack hospital management application engineered to centralize patient health records, streamline physician consultation schedules, and manage clinical appointments efficiently.",problem:"Medical institutions often experience friction from fragmented paper records, duplicate scheduling, delayed access to medical histories, and coordination bottlenecks across clinical departments.",solution:"A unified system backed by a normalized MySQL relational database with role-based access control, allowing hospital administrators, physicians, and patients to access relevant data securely.",features:["Comprehensive patient records & medical history management","Doctor schedule management with appointment collision prevention","Centralized appointment booking, approval, and triage workflows","Role-based authentication & granular permissions (Admin, Doctor, Patient)","Normalized MySQL database schema enforcing relational integrity"],approach:"Constructed using Python and Flask for backend API routing and session management, connected to a relational MySQL database designed with 3NF schema normalization.",impact:"Streamlines clinical administrative tasks, minimizes scheduling conflicts, and provides fast, secure access to vital patient records."},recruitment:{label:"03 / AI • NLP",title:"AI Recruitment System",subtitle:"Resume Analysis & Job Match Platform",image:"assets/images/ai_recruitment.jpg",description:"An AI-based resume analysis platform that compares resumes against job descriptions, generates match scores, and identifies skill gaps.",tags:["Python","NLP","Flask","Text Parsing"],overview:"An automated resume screening tool that extracts technical entities from applicant resumes, evaluates textual and contextual similarity against job descriptions, and highlights missing prerequisites.",problem:"Recruiting teams face high volumes of unstructured resumes for technical roles, making manual screening time-consuming, prone to fatigue, and subject to unconscious bias.",solution:"An intelligent NLP pipeline that parses resume documents, tokenizes candidate competencies, computes similarity metrics against target job criteria, and outputs an objective match evaluation.",features:["Resume document upload and automated entity parsing","Technical keyword extraction and categorization","NLP-based cosine text similarity scoring against job criteria","Automated skill-gap identification highlighting missing requirements","Candidate recommendations for targeted resume improvement"],approach:"Built using Python and Flask, utilizing NLP tokenization and Scikit-Learn vectorization to calculate semantic alignment between candidate resumes and job specifications.",impact:"Accelerates early-stage candidate screening while giving applicants clear visibility into prerequisite skills for targeted career growth."}};function f(t){const n=document.getElementById("project-modal"),i=document.getElementById("modal-content"),e=v[t];!n||!i||!e||(i.innerHTML=`
    <div style="margin-bottom: 20px;">
      <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--accent-primary); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px;">
        ${e.label}
      </div>
      <h2 style="font-size: 1.65rem; font-weight: 700; letter-spacing: -0.02em; color: var(--text-primary); margin-bottom: 4px;">
        ${e.title}
      </h2>
      <div style="font-size: 14.5px; color: var(--text-secondary); margin-bottom: 14px;">
        ${e.subtitle}
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px;">
        ${e.tags.map(a=>`<span class="tech-chip">${a}</span>`).join("")}
      </div>
    </div>

    <div style="background: var(--bg-surface-secondary); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 18px; margin-bottom: 24px; display: flex; flex-direction: column; gap: 8px;">
      <div style="font-family: var(--font-mono); font-size: 11px; font-weight: 600; text-transform: uppercase; color: var(--text-dim); letter-spacing: 0.06em;">PROJECT SUMMARY</div>
      <div style="font-size: 14px; line-height: 1.6; color: var(--text-primary);">${e.description}</div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 20px; font-size: 14.5px; line-height: 1.7; color: var(--text-secondary); margin-bottom: 28px;">
      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Overview</h4>
        <p>${e.overview}</p>
      </div>

      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Problem &amp; Motivation</h4>
        <p>${e.problem}</p>
      </div>

      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Solution Architecture</h4>
        <p>${e.solution}</p>
      </div>

      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Key Features</h4>
        <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 6px;">
          ${e.features.map(a=>`<li>${a}</li>`).join("")}
        </ul>
      </div>

      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Development Approach</h4>
        <p>${e.approach}</p>
      </div>

      <div>
        <h4 style="font-size: 14px; font-weight: 600; color: var(--text-primary); margin-bottom: 6px;">Results &amp; Impact</h4>
        <p>${e.impact}</p>
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
  `,window.lucide&&window.lucide.createIcons(),n.classList.add("active"),document.body.style.overflow="hidden")}function c(){const t=document.getElementById("project-modal");t&&(t.classList.remove("active"),document.body.style.overflow="")}document.addEventListener("keydown",t=>{t.key==="Escape"&&c()});function y(){const t=document.getElementById("project-modal"),n=t?t.querySelector(".modal-container"):null,i=document.getElementById("modal-content");!t||!i||(n&&n.classList.add("resume-modal-container"),i.innerHTML=`
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
  `,window.lucide&&window.lucide.createIcons(),t.classList.add("active"),document.body.style.overflow="hidden")}function b(){const t=document.getElementById("resume-printable-doc");if(!t){d();return}if(r("Generating high-quality PDF..."),window.html2pdf){const n={margin:[10,10,10,10],filename:"Anuroop_Debeesh_Resume.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0,letterRendering:!0},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}};window.html2pdf().set(n).from(t).save().then(()=>{r("Resume downloaded successfully!")}).catch(i=>{console.error(i),window.print()})}else window.print()}function w(){window.print()}function d(){r("Downloading ATS text resume...");const t=`ANUROOP DEBEESH
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
`,n=new Blob([t],{type:"text/plain;charset=utf-8"}),i=URL.createObjectURL(n),e=document.createElement("a");e.href=i,e.download="Anuroop_Debeesh_Resume.txt",document.body.appendChild(e),e.click(),document.body.removeChild(e),URL.revokeObjectURL(i)}function S(t){t.preventDefault();const n=document.getElementById("contact-name").value.trim(),i=document.getElementById("contact-email").value.trim(),e=document.getElementById("contact-message").value.trim();if(!n||!i||!e){r("Please complete all required fields.");return}r(`Thank you, ${n}. Opening your email client...`);const a=`mailto:anuroopdeebesh@gmail.com?subject=Contact%20from%20${encodeURIComponent(n)}&body=${encodeURIComponent(e)}%0A%0AFrom:%20${encodeURIComponent(n)}%20(${encodeURIComponent(i)})`;setTimeout(()=>{window.location.href=a},1e3),document.getElementById("contact-form").reset()}function r(t){const n=document.getElementById("toast-container");if(!n)return;const i=document.createElement("div");i.className="toast",i.innerHTML=`<i data-lucide="check" style="width: 15px; height: 15px; color: var(--accent-primary);"></i> <span>${t}</span>`,n.appendChild(i),window.lucide&&window.lucide.createIcons(),setTimeout(()=>{i.style.opacity="0",i.style.transform="translateY(10px)",i.style.transition="all 0.25s ease",setTimeout(()=>i.remove(),250)},2800)}window.openProjectModal=f;window.closeProjectModal=c;window.openResumeModal=y;window.downloadResume=d;window.downloadResumePdf=b;window.printResume=w;window.handleContactSubmit=S;window.showToast=r;
