(() => {
  "use strict";

  const copy = {
    en: {
      skip: "Skip to main content", primaryNav: "Primary navigation", menu: "Open or close menu", language: "Choose language",
      navProblems: "Problems we solve", navProof: "Selected work", navAssessment: "Free assessment", navProcess: "How it works", navFaq: "FAQ", navAbout: "Who we are",
      heroKicker: "Improve the work before adding tools", heroTitle: "Make everyday work<br>faster, clearer, and easier to manage.", heroLead: "Start with a free <strong>AI Workflow &amp; Time-Saving Assessment</strong> to find practical ways to reduce repeated work using tools your team already has.", heroProof: "See practical outcomes", heroNote: "Available in Thai or English. No technical brief or AI knowledge required.", scroll: "Scroll to see work unfold",
      problemsKicker: "When everyday work feels heavier than it should", problemsTitle: "The team is not the problem.<br>The fix is missing the real issue.", problemsLead: "Not every problem needs a large system. Start by understanding the work, then improve the point that helps the team most.",
      problem1Title: "Information is scattered", problem1Body: "Customer and job information lives across LINE, email, files, and spreadsheets. The team wastes time searching while customers wait for answers.", problem2Title: "The same work happens every day", problem2Body: "Employees copy information and recreate replies, quotations, reports, and documents instead of serving customers and handling higher-value work.", problem3Title: "Meetings and follow-ups get missed", problem3Body: "What is agreed in LINE must be entered into a calendar or task list by hand, making appointments and actions easy to forget.", problem4Title: "Financial documents take too long to check", problem4Body: "Invoices, transfer slips, receipts, and tax documents need repeated matching and review. Billing slows down, payments arrive later, and errors become more likely.", problem5Title: "Useful knowledge is buried in documents", problem5Body: "The information needed to answer customers sits inside long PDFs and large file collections, so employees must search, read, and summarise it again.", problem6Title: "Everything depends on one person", problem6Body: "Important processes live in the owner’s or a key employee’s memory. Delegating becomes difficult, and growth adds more pressure.",
      bentoKicker: "Start with real work", bentoTitle: "See what is slow<br>and what is worth doing first.", bentoBody: "We do not begin by selling one AI tool or software product. We begin with the work, team, and tools already in use.", bentoEvidenceKicker: "What we look for", bentoEvidenceTitle: "Opportunities that give<br>the team more time", bentoEvidenceBody: "Our target is to identify opportunities that could save at least", bentoEvidenceMetricUnit: "hours", bentoEvidenceMetricPeriod: "each week", bentoEvidenceMetricAria: "5 hours each week", bentoTools: "LINE · Email · Excel · Documents · PowerPoint", bentoToolsNote: "Connect what the team already uses, without adding complexity.",
      proofKicker: "Work from real operational problems", proofTitle: "Results start with<br>finding the real problem.", proofLead: "These anonymised examples show the kind of work we deliver. They are not a promise that every business will achieve identical results.", case1Title: "AI-assisted invoice classification", case1Sector: "Thai accounting firm", case1Body: "A workflow reads invoice data and proposes debit and credit treatment for an accountant to review. The cycle fell from about seven days to one day, with the accountant retaining final approval.", case1Result: "days per cycle", case2Title: "Recurring invoice email automation", case2Sector: "Accounting services", case2Body: "A workflow prepares and sends monthly invoice emails across the client list, keeping communication consistent and reducing the risk of missed billing messages.", case2Result: "monthly processing time", case3Title: "Planned-maintenance scheduling", case3Sector: "Thai energy business", case3Body: "A planning tool evaluates tasks, dependencies, available crews, and operating constraints to create a workable maintenance sequence.", case3ResultValue: "THB 1M+", case3Result: "in cost savings",
      assessmentKicker: "AI Workflow & Time-Saving Assessment", assessmentTitle: "Start by understanding work,<br>not by buying a system.", priceLabel: "Assessment fee", price: "Free", priceNote: "No obligation to purchase further services", assessmentIntro: "We begin with a 45-minute conversation about repeated tasks, waiting, missed follow-ups, and work employees still do by hand. Within five business days, you receive a written assessment with recommendations that account for your team, budget, and current tools.", deliverablesTitle: "What you receive", deliverable1: "A summary of the work and processes slowing the team down", deliverable2: "Three to seven practical recommendations", deliverable3: "Estimated setup effort and software cost for each option", deliverable4: "Estimated potential time savings based on the information you provide", deliverable5: "A priority map separating quick wins from later improvements", deliverable6: "A 30-minute meeting to explain the solution", recommendKicker: "The answer does not always need AI", recommendLead: "The answer may be automation, removing an unnecessary step, or making better use of software already in place. Technology is a tool, not the goal.", implementationKicker: "If you find something worth fixing", implementationTitle: "We can build it<br>with your team.", implementationBody: "Before work begins, we agree on the problem, expected result, scope, tools, information, testing method, project fee, and third-party software costs.", implementation1: "Testing with realistic scenarios", implementation2: "Team instructions and training", implementation3: "Handover and post-launch review", assessmentRationale: "The assessment helps both sides confirm whether there is a worthwhile improvement before any paid work begins. If you later want implementation help, Code Crafted can provide a separate quote. You keep the assessment whether you continue or not. Because every assessment includes a written report and a results meeting, we accept only a limited number of free assessments each month.",
      processKicker: "How it works", processTitle: "Understand the work first.<br>Then choose what is worth doing.", step1Title: "Walk us through the current work", step1Body: "Spend 45 minutes showing where the process starts, where it slows down, and what you have already tried.", step2Title: "Receive a written assessment", step2Body: "Within five business days, receive recommendations with costs, effort, priorities, and potential time savings.", step3Title: "Review the findings together", step3Body: "Meet for 30 minutes, ask questions, and identify a useful first step for the business.", step4Title: "Choose what happens next", step4Body: "Implement it yourself, use another provider, request a quote from us, or take no action.",
      faqKicker: "Frequently asked questions", faqTitle: "Know the details.<br>Then decide.", faqLead: "If you are unsure whether the assessment fits, tell us what is slowing the team down. We will tell you honestly whether it is likely to help.", faq1Q: "Is the assessment really free?", faq1A: "Yes. There is no assessment fee and no obligation to purchase another service.", faq2Q: "Do I need to understand AI?", faq2A: "No. We discuss the business in plain language and explain what each option does, what it may cost, and what the team would need to change.", faq3Q: "What do I need to prepare?", faq3A: "Be ready to describe a normal working day, repeated tasks, delays, and the tools your team uses. No presentation or technical brief is needed.", faq4Q: "Do I need to send sensitive information?", faq4A: "Passwords and client documents are not required for the free assessment by default. We can begin with your explanation and non-sensitive examples.", faq5Q: "Will recommendations only involve AI?", faq5A: "Not necessarily. We may recommend AI, automation, simpler software, or a process change.",
      aboutTitleLead: "Understand the work", aboutTitleEnd: "before choosing technology.", aboutName: "About Code Crafted", aboutBody1: "Code Crafted brings more than seven years of experience applying AI, automation, data analysis, and optimization to operational problems across accounting, energy, retail, and financial services.", aboutBody2: "We begin by understanding how the work is done, then simplify the process and recommend the smallest useful improvement. The focus is practical advice, realistic controls, and technology that supports the team instead of adding complexity.", aboutSector1: "Accounting", aboutSector2: "Energy", aboutSector3: "Retail", aboutSector4: "Financial services", aboutSectorsLabel: "Sectors where Code Crafted has experience", aboutCapabilitiesLabel: "AI, automation, data analysis, and optimization", aboutExperience: "years of experience solving operational problems", aboutContactTitle: "Contact Code Crafted", locationLabel: "Location", locationAddress: "88/31, 131 Pracha Uthit 107, Thungkru, Bangkok 10140", phoneLabel: "Telephone", emailLabel: "Email",
      footerStatement: "Understand the work, choose only the technology needed, and build something the team can genuinely use.", footerTrustKicker: "Business identity", footerTrustTitle: "Code Crafted", footerRegistrationLabel: "Juristic Person Registration No.", footerRegistrationNumber: "[Replace with verified number]", dbdName: "Department of Business Development", dbdMinistry: "Ministry of Commerce"
    }
  };

  const thaiTitle = document.title;
  const englishTitle = "Code Crafted | Less repeated work, smoother operations";
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navPanel = document.querySelector(".nav-panel");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let language = localStorage.getItem("code-crafted-v2-language") === "en" ? "en" : "th";
  const thaiCopy = { text: {}, html: {}, placeholder: {}, aria: {} };
  document.querySelectorAll("[data-i18n]").forEach((element) => { thaiCopy.text[element.dataset.i18n] = element.textContent; });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => { thaiCopy.html[element.dataset.i18nHtml] = element.innerHTML; });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { thaiCopy.placeholder[element.dataset.i18nPlaceholder] = element.placeholder; });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => { thaiCopy.aria[element.dataset.i18nAria] = element.getAttribute("aria-label"); });

  const setLanguage = (next, persist = true) => {
    language = next === "en" ? "en" : "th";
    document.documentElement.lang = language;
    document.title = language === "en" ? englishTitle : thaiTitle;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = language === "en" ? copy.en[element.dataset.i18n] : thaiCopy.text[element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = language === "en" ? copy.en[element.dataset.i18nHtml] : thaiCopy.html[element.dataset.i18nHtml];
      if (value) element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = language === "en" ? copy.en[element.dataset.i18nPlaceholder] : thaiCopy.placeholder[element.dataset.i18nPlaceholder];
      if (value) element.placeholder = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = language === "en" ? copy.en[element.dataset.i18nAria] : thaiCopy.aria[element.dataset.i18nAria];
      if (value) element.setAttribute("aria-label", value);
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (persist) localStorage.setItem("code-crafted-v2-language", language);
    if (window.ScrollTrigger) window.requestAnimationFrame(() => window.ScrollTrigger.refresh());
  };

  setLanguage(language, false);
  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));

  const closeMenu = () => {
    navPanel.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };
  menuToggle.addEventListener("click", () => {
    const open = !navPanel.classList.contains("is-open");
    navPanel.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });
  navPanel.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  const sectionLinks = [...document.querySelectorAll(".nav-links a[href^='#']")];
  const linkedSections = sectionLinks.map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) })).filter(({ section }) => section);
  const setActiveSection = (id) => sectionLinks.forEach((link) => {
    if (link.getAttribute("href") === `#${id}`) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible[0]) setActiveSection(visible[0].target.id);
  }, { rootMargin: "-30% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] });
  linkedSections.forEach(({ section }) => sectionObserver.observe(section));
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenu(); });
  window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 18), { passive: true });

  const cases = [...document.querySelectorAll(".case")];
  cases.forEach((caseItem) => {
    caseItem.querySelector(".case-toggle").addEventListener("click", () => {
      const wasOpen = caseItem.classList.contains("is-open");
      cases.forEach((item) => {
        item.classList.remove("is-open");
        item.querySelector(".case-toggle").setAttribute("aria-expanded", "false");
        item.querySelector("use").setAttribute("href", "#plus");
      });
      if (!wasOpen) {
        caseItem.classList.add("is-open");
        caseItem.querySelector(".case-toggle").setAttribute("aria-expanded", "true");
        caseItem.querySelector("use").setAttribute("href", "#minus");
      }
    });
  });

  const paperScene = document.querySelector("[data-paper-scene]");
  const paperFrames = [...document.querySelectorAll(".paper-frame")].map((element) => ({ element, point: Number(element.dataset.frame) }));
  const setPaper = () => {
    if (!paperScene || reduceMotion.matches) return;
    const rect = paperScene.getBoundingClientRect();
    const range = Math.max(1, paperScene.offsetHeight - window.innerHeight);
    const progress = Math.max(0, Math.min(1, -rect.top / range));
    let lower = paperFrames[0];
    let upper = paperFrames[paperFrames.length - 1];
    for (let index = 1; index < paperFrames.length; index += 1) {
      if (progress <= paperFrames[index].point) { lower = paperFrames[index - 1]; upper = paperFrames[index]; break; }
    }
    const blend = Math.max(0, Math.min(1, (progress - lower.point) / (upper.point - lower.point || 1)));
    paperFrames.forEach(({ element }) => { element.style.opacity = "0"; element.classList.remove("is-current"); });
    lower.element.style.opacity = String(1 - blend);
    upper.element.style.opacity = String(blend);
  };
  window.addEventListener("scroll", setPaper, { passive: true });
  setPaper();

  if (!reduceMotion.matches && window.gsap && window.ScrollTrigger && window.innerWidth > 900) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".proof-intro", { y: -42, ease: "none", scrollTrigger: { trigger: ".proof", start: "top bottom", end: "bottom top", scrub: true } });
    const copyBlock = document.querySelector("[data-scrub-copy] p");
    const text = copyBlock.textContent.trim().split(/\s+/);
    copyBlock.innerHTML = text.map((word) => `<span>${word}</span>`).join(" ");
    gsap.fromTo("[data-scrub-copy] span", { opacity: .18 }, { opacity: 1, stagger: .035, ease: "none", scrollTrigger: { trigger: "[data-scrub-copy]", start: "top 82%", end: "bottom 48%", scrub: true } });
    gsap.fromTo(".implementation-rationale", { y: 24, opacity: .18 }, { y: 0, opacity: 1, ease: "power2.out", scrollTrigger: { trigger: ".implementation", start: "top 78%", end: "bottom 62%", scrub: true } });
    gsap.fromTo(".bento", { y: 24, opacity: .2 }, { y: 0, opacity: 1, stagger: .12, scrollTrigger: { trigger: ".bento-grid", start: "top 82%", toggleActions: "play none none reverse" } });
    ScrollTrigger.create({ trigger: ".about-grid", start: "top 18%", end: "bottom 84%", pin: "[data-about-story]", pinSpacing: false });
  }
})();
