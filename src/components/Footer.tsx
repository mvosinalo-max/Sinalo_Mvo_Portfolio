import { Code2, Github, Linkedin, Mail, Heart, Download } from 'lucide-react';
import { personalInfo, navItems } from '@/data/portfolio';

export function Footer() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const cvContent = generateCVText();
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sinalo_Mvo_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="relative border-t border-neutral-800 bg-neutral-950 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700">
                <Code2 className="h-5 w-5 text-white" />
              </span>
              <span className="font-display">{personalInfo.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              {personalInfo.shortBio}
            </p>
            <button
              onClick={handleDownloadCV}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-800/50 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-primary-500/50 hover:text-primary-400"
            >
              <Download className="h-4 w-4" />
              Download CV
            </button>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-sm text-neutral-500 transition-colors hover:text-primary-400"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Connect</h4>
            <div className="mt-4 flex gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 text-neutral-400 transition-all hover:border-primary-500/50 hover:text-primary-400"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 text-neutral-400 transition-all hover:border-primary-500/50 hover:text-primary-400"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800/50 text-neutral-400 transition-all hover:border-primary-500/50 hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            {personalInfo.location && (
              <p className="mt-4 text-sm text-neutral-500">{personalInfo.location}</p>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 sm:flex-row">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-neutral-500">
            Built with <Heart className="h-4 w-4 fill-accent-500 text-accent-500" /> and a commitment to meaningful communication
          </p>
        </div>
      </div>
    </footer>
  );
}

function generateCVText(): string {
  return `SINALO MVO
Aspiring Communications Practitioner | Administration | Digital Communication
${personalInfo.location} | ${personalInfo.email} | ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin}

========================================
PROFESSIONAL BACKGROUND
========================================
${personalInfo.shortBio}

========================================
EDUCATION
========================================
Bachelor of Arts in Communication Sciences — University of South Africa
In progress

National Senior Certificate (Grade 12) — Freedom Park Secondary School
2019

========================================
WORK EXPERIENCE
========================================
Special Projects Intern — Phakamani Young Minds Academy (NGO)
July 2025 — February 2026
- Supported planning and coordination of events, campaigns, and internal projects.
- Developed reports, presentations, and communication materials.
- Coordinated with different departments to support effective project execution.
- Maintained accurate project data on Salesforce.
- Managed social media communication across Instagram, Facebook, and LinkedIn.
- Supported audience engagement through digital communication activities.

Education Assistant — Freedom Primary School
May 2023 — July 2024
- Supported lesson planning, classroom management, and learner activities.
- Identified learners requiring academic support and provided assistance.
- Captured learner information and maintained academic records.
- Prepared documents, printed, filed, and managed records.
- Worked closely with educators and learners.

========================================
VOLUNTEERING AND COMMUNITY INVOLVEMENT
========================================
- Volunteered in classroom-based mentorship and learner support activities.
- Participated in community events promoting education and youth development.

========================================
DIGITAL AND TECHNICAL SKILLS
========================================
Microsoft Office, Mailchimp, Social Media Management, Data Capturing,
Record Management, Event Coordination, Written and Oral Communication,
Adaptability, Problem-Solving, Learning Agility, Relationship-Building, Teamwork
`;
}
