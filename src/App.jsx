import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaWhatsapp,
  FaArrowRight,
  FaStar,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import {
  FiGlobe,
  FiEdit3,
  FiVideo,
  FiImage,
  FiTrendingUp,
  FiMail,
  FiPhone,
  FiMapPin,
  FiChevronDown,
  FiExternalLink,
  FiMenu,
  FiX,
} from "react-icons/fi";

/* =========================================================
   ✅ INNOVEXA CONFIG (EASY TO EDIT LATER)
   👉 You can change logo, socials, projects, reviews here only!
========================================================= */
const BRAND = {
  name: "INNOVEXA",
  logoUrl:
    "https://i.ibb.co/SDTX1Pb5/IMG-20251005-WA0002-removebg-preview-removebg-preview.png",
  whatsappNumber: "919566061075",

  // ✅ Fake links now (Replace later)
  socials: {
    instagram: "https://instagram.com/innovexa_fake",
    linkedin: "https://linkedin.com/company/innovexa-fake",
    facebook: "https://facebook.com/innovexa.fake",
  },

  // ✅ You can change later
  email: "innovexa.services@gmail.com",
  location: "India",
};

const WHATSAPP_LINK = `https://wa.me/${BRAND.whatsappNumber}`;

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "process", label: "Process" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

const services = [
  {
    icon: <FiGlobe />,
    title: "Website Design & Web Development",
    desc: "Modern responsive websites built for speed, UI/UX, and conversions.",
  },
  {
    icon: <FiEdit3 />,
    title: "Professional Content Writing & Copywriting",
    desc: "High quality content that builds trust and increases customer action.",
  },
  {
    icon: <FiVideo />,
    title: "Video Editing & Post-Production",
    desc: "Reels, YouTube, promos with clean cinematic edits & smooth motion.",
  },
  {
    icon: <FiImage />,
    title: "Graphic Design & Photo Editing",
    desc: "Posters, banners, thumbnails, logos, and premium photo enhancements.",
  },
  {
    icon: <FiTrendingUp />,
    title: "SEO & Website Ranking Improvement",
    desc: "On-page SEO + performance improvements to rank better on Google.",
  },
];

/* =========================================================
   ✅ PORTFOLIO PROJECTS (EDIT HERE LATER)
   👉 Whenever you want to update projects:
   -> Replace image, title, tag, link, details, tech
========================================================= */
const portfolioItems = [
  {
    title: "Business Website UI",
    tag: "Website",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    link: "#", // ✅ replace with your live demo link
    details:
      "A modern business website UI with premium layout, clear CTA, fast loading structure and mobile-first design.",
    tech: ["React", "Tailwind", "UI/UX"],
  },
  {
    title: "E-commerce Landing Page",
    tag: "Website",
    image:
      "https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    details:
      "High-converting landing page for products with offer section, trust badges, smooth animations and fast performance.",
    tech: ["Landing Page", "Conversion UI", "SEO"],
  },
  {
    title: "YouTube Video Editing",
    tag: "Video",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    details:
      "Clean professional YouTube edits with smooth transitions, music sync, captions, effects, and color corrections.",
    tech: ["Premiere Pro", "After Effects", "Captions"],
  },
  {
    title: "Poster / Social Media Design",
    tag: "Graphics",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    details:
      "High quality social media posters with modern typography, brand colors, and engagement-focused layout design.",
    tech: ["Photoshop", "Branding", "Typography"],
  },
  {
    title: "SEO Optimization Report",
    tag: "SEO",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    details:
      "SEO improvements: page speed, metadata, content structure, on-page optimization and ranking strategy.",
    tech: ["On-page SEO", "Speed", "Analytics"],
  },
  {
    title: "Brand Design Pack",
    tag: "Graphics",
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1200&auto=format&fit=crop",
    link: "#",
    details:
      "A full brand identity design pack including posters, banners, social assets and consistent brand guidelines.",
    tech: ["Brand Kit", "Design System", "Social"],
  },
];

/* =========================================================
   ✅ REVIEWS / TESTIMONIALS (EDIT HERE LATER)
   👉 Replace name, role, rating, text with real reviews later
========================================================= */
const testimonials = [
  {
    name: "Client A",
    role: "Website Development",
    rating: 5,
    text: "Very professional design and fast delivery. Highly recommended!",
  },
  {
    name: "Client B",
    role: "Video Editing",
    rating: 5,
    text: "High quality editing and smooth transitions. Great work!",
  },
  {
    name: "Client C",
    role: "SEO Service",
    rating: 5,
    text: "My website performance improved and ranking started increasing.",
  },
];

const faqs = [
  {
    q: "How long will it take to complete a project?",
    a: "Depends on the project type. Most designs/edits are completed within 2–7 days. Websites take 5–12 days based on features.",
  },
  {
    q: "Will you provide support after delivery?",
    a: "Yes. We provide support after delivery and can help you with updates, improvements, and maintenance.",
  },
  {
    q: "Do you provide website + SEO combo package?",
    a: "Yes. We can create a full bundle including website, SEO basics, speed optimization and ranking improvements.",
  },
  {
    q: "Can you edit Reels / Shorts / YouTube videos?",
    a: "Yes. We edit Reels, Shorts, YouTube videos, promotional videos, and can add captions, effects, transitions and color corrections.",
  },
  {
    q: "What details do you need to start the work?",
    a: "Basic requirements, content/logo/images, reference sample design (if any), and your timeline. We will guide you step-by-step.",
  },
];

/* ==============================
   SMALL UI HELPERS
================================ */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs">
          <span className="w-2 h-2 rounded-full bg-white/50" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-white/70 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
const GlassCard = React.forwardRef(function GlassCard(
  { className = "", children },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        className
      )}
    >
      {children}
    </div>
  );
});
function PrimaryButton({ href, onClick, children, ...props }) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white
      bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500
      shadow-[0_12px_30px_rgba(99,102,241,0.25)] hover:shadow-[0_14px_35px_rgba(168,85,247,0.28)]
      transition-all duration-300"
      {...props}
    >
      {children}
      <FaArrowRight className="opacity-90 group-hover:translate-x-1 transition-transform" />
    </Comp>
  );
}

function SecondaryButton({ href, onClick, children, ...props }) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold
      text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300"
      {...props}
    >
      {children}
    </Comp>
  );
}

/* ==============================
   MAIN APP
================================ */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [faqOpen, setFaqOpen] = useState(0);
  const { ref: dashboardRef, hasBeenVisible: startDashboardCounters } =
  useInViewOnce({ threshold: 0.35 });
  
  // Navbar Mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  // Portfolio Modal
  const [selectedProject, setSelectedProject] = useState(null);

  const observerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Observe section visibility -> set active nav item
  useEffect(() => {
    const sectionIds = ["home", "services", "portfolio", "process", "reviews", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.35, 0.5] }
    );

    sections.forEach((s) => obs.observe(s));
    observerRef.current = obs;

    return () => obs.disconnect();
  }, []);

  // Lock scroll when modal open / mobile menu open
  useEffect(() => {
    const lock = mobileOpen || !!selectedProject;
    document.body.style.overflow = lock ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen, selectedProject]);

  // ESC close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const badges = useMemo(
    () => [
      "⚡ Fast Delivery",
      "💎 Premium Quality",
      "📈 Results Focused",
      "🤝 Friendly Support",
    ],
    []
  );

  const goTo = (id) => {
    setMobileOpen(false);
    scrollToId(id);
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-x-hidden">
      {/* Background Blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-36 -left-36 h-[420px] w-[420px] rounded-full blur-3xl opacity-35 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500" />
        <div className="absolute top-40 -right-44 h-[520px] w-[520px] rounded-full blur-3xl opacity-25 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500" />
        <div className="absolute bottom-[-160px] left-1/3 h-[520px] w-[520px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500" />
      </div>

      {/* Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-[#070A12]/70 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* ✅ LOGO MORE VISIBLE */}
          <button
            onClick={() => goTo("home")}
            className="flex items-center gap-3"
            aria-label="Go to home"
          >
            <div className="relative w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-indigo-500/50 via-purple-500/30 to-fuchsia-500/50" />
              <img
                src={BRAND.logoUrl}
                alt="INNOVEXA Logo"
                className="relative w-10 h-10 object-contain drop-shadow-[0_8px_20px_rgba(255,255,255,0.25)]"
              />
            </div>
            <div className="text-left leading-tight">
              <div className="text-base font-extrabold tracking-wide">
                {BRAND.name}
              </div>
              <div className="text-[11px] text-white/60">
                Creative Digital Services
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm transition-all",
                  active === item.id
                    ? "bg-white/10 border border-white/15"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition"
              aria-label="Open menu"
            >
              <FiMenu className="text-xl" />
            </button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold
              border border-white/15 bg-white/5 hover:bg-white/10 transition-all"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white
              bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500
              shadow-[0_12px_30px_rgba(99,102,241,0.22)]"
            >
              Get Free Quote <FaArrowRight className="opacity-90" />
            </a>

            {/* Small CTA for mobile */}
            <a
              href="#contact"
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl
              bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500"
              aria-label="Get Free Quote"
            >
              <FaArrowRight />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 z-[70] h-full w-[85%] max-w-[360px] border-l border-white/10 bg-[#070A12]/90 backdrop-blur-xl"
              initial={{ x: 420 }}
              animate={{ x: 0 }}
              exit={{ x: 420 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div className="p-4 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-indigo-500/50 via-purple-500/30 to-fuchsia-500/50" />
                    <img
                      src={BRAND.logoUrl}
                      alt="INNOVEXA"
                      className="relative w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-extrabold">{BRAND.name}</div>
                    <div className="text-xs text-white/60">Menu</div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              <div className="p-4 grid gap-2">
                {navItems.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => goTo(n.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-2xl border transition",
                      active === n.id
                        ? "border-white/15 bg-white/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    )}
                  >
                    <span className="font-semibold">{n.label}</span>
                    <FaArrowRight className="text-xs opacity-80" />
                  </button>
                ))}
              </div>

              {/* ✅ Social Links in Mobile Menu */}
              <div className="px-4 pb-4 border-t border-white/10 pt-4">
                <div className="text-xs text-white/60 mb-3">Follow Us</div>
                <div className="flex items-center gap-3">
                  <SocialIcon href={BRAND.socials.instagram} icon={<FaInstagram />} label="Instagram" />
                  <SocialIcon href={BRAND.socials.linkedin} icon={<FaLinkedin />} label="LinkedIn" />
                  <SocialIcon href={BRAND.socials.facebook} icon={<FaFacebook />} label="Facebook" />
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white
                  bg-gradient-to-r from-emerald-500 to-green-500 shadow-[0_12px_30px_rgba(16,185,129,0.25)]"
                >
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
              Premium quality • Fast delivery • Support
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              {BRAND.name} –{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Creative Digital Solutions
              </span>{" "}
              That Grow Your Brand
            </h1>

            <p className="mt-4 text-white/70 leading-relaxed">
              We design stunning websites, create professional content, edit
              high-quality videos, and improve your Google ranking — helping your
              business attract more customers online.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton href="#portfolio">View Portfolio</PrimaryButton>
              <SecondaryButton href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <FaWhatsapp />
                Chat on WhatsApp
              </SecondaryButton>
            </div>

            {/* ✅ Social links near hero */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs text-white/60">Follow:</span>
              <SocialIcon href={BRAND.socials.instagram} icon={<FaInstagram />} label="Instagram" />
              <SocialIcon href={BRAND.socials.linkedin} icon={<FaLinkedin />} label="LinkedIn" />
              <SocialIcon href={BRAND.socials.facebook} icon={<FaFacebook />} label="Facebook" />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-xs px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/80"
                >
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* HERO RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="relative"
          >
            <GlassCard className="p-5" ref={dashboardRef}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">INNOVEXA Dashboard</div>
                  <div className="text-xs text-white/60">
                    Design • SEO • Content • Media
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-white/70">
                  Live Preview
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <MiniMetric
  title="Web Projects"
  value={25}
  type="number"
  start={startDashboardCounters}
/>

<MiniMetric
  title="SEO Boost"
  value={60}
  type="percent"
  start={startDashboardCounters}
/>

<MiniMetric title="Design Quality" value="Premium" type="text" />
<MiniMetric title="Support" value="24/7" type="text" />
              </div>

              <div className="mt-5 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <div className="p-4">
                  <div className="text-sm font-semibold">
                    Growth Focused Execution
                  </div>
                  <p className="text-xs text-white/60 mt-1">
                    Clean UI + fast performance + professional edits.
                  </p>
                </div>
                <div className="h-20 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-fuchsia-500/30" />
              </div>
            </GlassCard>

            <FloatingPill className="absolute -left-4 top-10">
              <FiGlobe /> Web
            </FloatingPill>
            <FloatingPill className="absolute right-0 top-20">
              <FiTrendingUp /> SEO
            </FloatingPill>
            <FloatingPill className="absolute left-10 -bottom-4">
              <FiVideo /> Video
            </FloatingPill>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="50+" label="Projects Completed" />
          <StatCard value="20+" label="Happy Clients" />
          <StatCard value="4.9★" label="Client Ratings" />
          <StatCard value="24/7" label="Support Available" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          eyebrow="What We Provide"
          title="Our Professional Services"
          subtitle="Everything your business needs to look premium and perform better online."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <GlassCard className="p-6 h-full hover:bg-white/7 transition-all">
                <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-xl">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {s.desc}
                </p>
                <button
                  onClick={() => goTo("contact")}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-all"
                >
                  Explore <FaArrowRight className="text-xs" />
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          eyebrow="Our Works"
          title="Portfolio"
          subtitle="You can replace all projects later easily inside portfolioItems array."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <GlassCard className="overflow-hidden group">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-transparent opacity-90" />
                  <span className="absolute left-3 top-3 text-xs px-3 py-1 rounded-full border border-white/15 bg-white/10 backdrop-blur text-white/80">
                    {p.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold">{p.title}</h3>

                  <div className="mt-4 flex items-center gap-2">
                    <SecondaryButton onClick={() => setSelectedProject(p)}>
                      View Details
                    </SecondaryButton>

                    <a
                      href={p.link}
                      onClick={(e) => {
                        if (p.link === "#") e.preventDefault();
                      }}
                      target={p.link !== "#" ? "_blank" : undefined}
                      rel={p.link !== "#" ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition"
                      title="Live Demo"
                    >
                      Live Demo <FiExternalLink />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          eyebrow="Workflow"
          title="How We Work"
          subtitle="Simple, fast and professional process from idea to delivery."
        />

        <div className="grid md:grid-cols-4 gap-4">
          <ProcessStep
            no="01"
            title="Requirement Discussion"
            desc="We understand your needs and suggest the best solution."
          />
          <ProcessStep
            no="02"
            title="Planning & Design"
            desc="We create a clean professional design before final work."
          />
          <ProcessStep
            no="03"
            title="Development / Editing"
            desc="We execute with quality, speed, and modern tools."
          />
          <ProcessStep
            no="04"
            title="Delivery & Support"
            desc="We deliver the project and provide post-support."
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Say"
          subtitle="You can replace testimonials later inside testimonials array."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <GlassCard key={t.name} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                “{t.text}”
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions before you start."
        />

        <div className="max-w-3xl mx-auto grid gap-3">
          {faqs.map((f, idx) => {
            const open = faqOpen === idx;
            return (
              <button
                key={f.q}
                onClick={() => setFaqOpen(open ? -1 : idx)}
                className="text-left"
              >
                <GlassCard className="p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-semibold">{f.q}</div>
                    <FiChevronDown
                      className={cn(
                        "transition-transform",
                        open ? "rotate-180" : ""
                      )}
                    />
                  </div>
                  {open && (
                    <p className="mt-3 text-sm text-white/70 leading-relaxed">
                      {f.a}
                    </p>
                  )}
                </GlassCard>
              </button>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-14">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Work Together"
          subtitle="Get a free quote. We respond quickly on WhatsApp."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold">Contact Information</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Ready to upgrade your brand online? Let’s discuss your project and
              start quickly.
            </p>

            {/* ✅ Social links in contact */}
            <div className="mt-5">
              <div className="text-xs text-white/60 mb-3">Social</div>
              <div className="flex items-center gap-3">
                <SocialIcon href={BRAND.socials.instagram} icon={<FaInstagram />} label="Instagram" />
                <SocialIcon href={BRAND.socials.linkedin} icon={<FaLinkedin />} label="LinkedIn" />
                <SocialIcon href={BRAND.socials.facebook} icon={<FaFacebook />} label="Facebook" />
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <InfoRow
                icon={<FaWhatsapp />}
                label="WhatsApp"
                value="+91 95660 61075"
                href={WHATSAPP_LINK}
              />
              <InfoRow
                icon={<FiPhone />}
                label="Call"
                value="+91 95660 61075"
                href={`tel:+91${BRAND.whatsappNumber}`}
              />
              <InfoRow
                icon={<FiMail />}
                label="Email"
                value={`${BRAND.email} (edit later)`}
                href={`mailto:${BRAND.email}`}
              />
              <InfoRow icon={<FiMapPin />} label="Location" value={BRAND.location} />
            </div>

            <div className="mt-6">
              <PrimaryButton href={WHATSAPP_LINK}>
                <FaWhatsapp /> Chat Now
              </PrimaryButton>
            </div>
          </GlassCard>

          <ContactForm whatsappNumber={BRAND.whatsappNumber} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                {/* ✅ Visible logo in footer */}
                <div className="relative w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-indigo-500/50 via-purple-500/30 to-fuchsia-500/50" />
                  <img
                    src={BRAND.logoUrl}
                    alt="INNOVEXA Logo"
                    className="relative w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-lg">{BRAND.name}</div>
                  <div className="text-xs text-white/60">
                    Creative Digital Solutions
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-lg">
                INNOVEXA provides premium digital services like websites, content
                writing, video editing, graphic design, and SEO to help your
                business grow online.
              </p>

              {/* ✅ Footer social links */}
              <div className="mt-4 flex items-center gap-3">
                <SocialIcon href={BRAND.socials.instagram} icon={<FaInstagram />} label="Instagram" />
                <SocialIcon href={BRAND.socials.linkedin} icon={<FaLinkedin />} label="LinkedIn" />
                <SocialIcon href={BRAND.socials.facebook} icon={<FaFacebook />} label="Facebook" />
              </div>
            </div>

            <div>
              <div className="font-bold">Services</div>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {services.map((s) => (
                  <button
                    key={s.title}
                    onClick={() => goTo("services")}
                    className="text-left hover:text-white transition"
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="font-bold">Quick Links</div>
              <div className="mt-3 grid gap-2 text-sm text-white/70">
                {navItems.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => goTo(n.id)}
                    className="text-left hover:text-white transition"
                  >
                    {n.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>
              © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </span>
            <span className="text-white/50">
              Built with modern UI + premium design
            </span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center
        bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-[0_18px_50px_rgba(16,185,129,0.35)]
        hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Portfolio Modal */}
      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

/* ==============================
   COMPONENTS
================================ */
function SocialIcon({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition flex items-center justify-center text-white/80 hover:text-white"
    >
      {icon}
    </a>
  );
}
function useInViewOnce(options = { threshold: 0.35 }) {
  const ref = React.useRef(null);
  const [hasBeenVisible, setHasBeenVisible] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasBeenVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, hasBeenVisible };
}
function AnimatedCounter({
  to = 0,
  duration = 2000,
  suffix = "",
  prefix = "",
  start = false,
}) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * to);

      if (current !== startVal) {
        startVal = current;
        setValue(current);
      }

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [to, duration, start]);

  return (
    <span>
      {prefix}
      {start ? value : 0}
      {suffix}
    </span>
  );
}
function MiniMetric({ title, value, type = "text", start = false }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-white/60">{title}</div>

      <div className="mt-1 text-lg font-bold">
        {type === "number" && (
          <>
            <AnimatedCounter to={value} duration={2400} start={start} />+
          </>
        )}

        {type === "percent" && (
          <>
            +<AnimatedCounter to={value} duration={2600} start={start} />%
          </>
        )}

        {type === "text" && value}
      </div>
    </div>
  );
}
function FloatingPill({ className = "", children }) {
  return (
    <div
      className={cn(
        "hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl text-sm font-semibold text-white/90",
        className
      )}
    >
      {children}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <GlassCard className="p-5 text-center hover:bg-white/7 transition-all">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </GlassCard>
  );
}

function ProcessStep({ no, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <GlassCard className="p-6 h-full hover:bg-white/7 transition-all">
        <div className="text-xs px-3 py-1 rounded-full inline-flex border border-white/10 bg-white/5 text-white/70">
          Step {no}
        </div>
        <div className="mt-4 font-bold text-lg">{title}</div>
        <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
      </GlassCard>
    </motion.div>
  );
}

function InfoRow({ icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-xs text-white/60">{label}</div>
        <div className="text-sm font-semibold text-white/85">{value}</div>
      </div>
    </div>
  );

  if (!href) return <div>{inner}</div>;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-all"
    >
      {inner}
    </a>
  );
}

function ContactForm({ whatsappNumber }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Website Design & Development");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      alert("Please fill Name, Phone and Message.");
      return;
    }

    const text = `Hello INNOVEXA 👋
Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <GlassCard className="p-6">
      <h3 className="text-lg font-bold">Send Your Requirement</h3>
      <p className="mt-2 text-sm text-white/70">
        Fill the form and it will open WhatsApp with your message.
      </p>

      <form onSubmit={onSubmit} className="mt-5 grid gap-3">
        <Input label="Full Name" value={name} onChange={setName} placeholder="Your name" />
        <Input
          label="WhatsApp Number"
          value={phone}
          onChange={setPhone}
          placeholder="+91XXXXXXXXXX"
        />

        <div>
          <div className="text-xs text-white/60 mb-2">Service</div>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#070A12]/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500/50"
          >
            <option>Website Design & Development</option>
            <option>Content Writing & Copywriting</option>
            <option>Video Editing</option>
            <option>Graphic Design & Photo Editing</option>
            <option>SEO & Website Ranking</option>
          </select>
        </div>

        <div>
          <div className="text-xs text-white/60 mb-2">Message</div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us your requirement..."
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-[#070A12]/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
          />
        </div>

        <div className="mt-2 flex flex-wrap gap-3">
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white
            bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500
            shadow-[0_12px_30px_rgba(99,102,241,0.25)] hover:shadow-[0_14px_35px_rgba(168,85,247,0.28)]
            transition-all duration-300"
          >
            Send on WhatsApp <FaWhatsapp />
          </button>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold
            text-white border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            Direct Chat <FaWhatsapp />
          </a>
        </div>
      </form>
    </GlassCard>
  );
}

function Input({ label, value, onChange, placeholder }) {
  return (
    <div>
      <div className="text-xs text-white/60 mb-2">{label}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-[#070A12]/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500/50"
      />
    </div>
  );
}

/* ==============================
   MODAL
================================ */
function PortfolioModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[80] bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[90] flex items-end md:items-center justify-center p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-3xl rounded-3xl border border-white/10 bg-[#070A12]/95 backdrop-blur-xl overflow-hidden"
              initial={{ y: 30, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 30, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-transparent opacity-95" />

                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-11 h-11 rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 transition flex items-center justify-center"
                  aria-label="Close modal"
                >
                  <FiX className="text-xl" />
                </button>

                <span className="absolute left-4 top-4 text-xs px-3 py-1 rounded-full border border-white/15 bg-white/10 backdrop-blur text-white/80">
                  {project.tag}
                </span>

                <div className="absolute left-4 bottom-4">
                  <h3 className="text-2xl font-extrabold">{project.title}</h3>
                  <p className="text-sm text-white/70 mt-1">
                    Premium quality project preview
                  </p>
                </div>
              </div>

              <div className="p-5 md:p-6 grid gap-4">
                <div>
                  <div className="text-sm font-bold">Project Details</div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {project.details}
                  </p>
                </div>

                <div>
                  <div className="text-sm font-bold">Tech / Tags</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tech?.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <SecondaryButton onClick={onClose}>Close</SecondaryButton>

                  <PrimaryButton href="#contact" onClick={onClose}>
                    Get Similar Project
                  </PrimaryButton>

                  <a
                    href={project.link}
                    onClick={(e) => {
                      if (project.link === "#") e.preventDefault();
                    }}
                    target={project.link !== "#" ? "_blank" : undefined}
                    rel={project.link !== "#" ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition"
                    title="Live Demo"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
