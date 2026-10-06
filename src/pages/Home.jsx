import { motion } from 'framer-motion';
import {
  FiArrowUpRight, FiAward, FiCheck, FiChevronRight, FiClock, FiDroplet,
  FiHome, FiLayers, FiMail, FiMapPin, FiPhone, FiShield, FiStar, FiTool
} from 'react-icons/fi';

const services = [
  ['Terrace waterproofing', 'Long-life systems built for extreme monsoons.', FiHome],
  ['Roof waterproofing', 'Seamless protection for industrial and commercial roofs.', FiLayers],
  ['Bathroom & wet areas', 'Detailed treatment that stops seepage at its source.', FiDroplet],
  ['Basement waterproofing', 'Defending foundations against hydrostatic pressure.', FiShield],
  ['Injection grouting', 'Precision crack sealing and structural rehabilitation.', FiTool],
  ['Civil works & painting', 'Complete finishing and restoration under one roof.', FiAward],
];

const clients = ['TATA', 'GODREJ', 'HINDUSTAN\nUNILEVER', 'AIRPORTS', 'HOTELS', 'BANKS'];
const partners = ['Dr. Fixit', 'STP', 'SIKA', 'BASF', 'FOSROC'];

function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-content reveal">
            <div className="hero-kicker"><span className="dot" /> Since 1971 · Mumbai</div>
            <h1>Built to last.<br /><em>Protected</em> for life.</h1>
            <p>India's trusted partner for waterproofing, civil works and painting — engineered with care, delivered with confidence.</p>
            <div className="hero-actions">
              <a className="button button-orange" href="#contact">Request a site visit <FiArrowUpRight /></a>
              <a className="text-link" href="#services">Explore our expertise <FiChevronRight /></a>
            </div>
            <div className="hero-proof"><FiShield /> <span>50+ years of experience</span><i /> <FiCheck /> <span>Quality assured</span></div>
          </div>
          <div className="hero-visual reveal">
            <div className="hero-photo"><img src={`${import.meta.env.BASE_URL}images/gallery/media__1786467829298.png`} alt="Terrace waterproofing application" /></div>
            <div className="hero-note"><b>01</b><span>Permanent solutions<br />for every structure</span></div>
            <div className="hero-stamp"><FiShield /><b>J K</b><small>TRUSTED<br />SINCE 1971</small></div>
          </div>
        </div>
        <div className="hero-bottom"><div className="container"><span>Trusted by leading organisations</span><div className="client-strip">{clients.slice(0, 4).map((c) => <b key={c}>{c}</b>)}</div></div></div>
      </section>

      <section className="section about" id="about">
        <div className="container about-grid">
          <div>
            <div className="about-image"><img src={`${import.meta.env.BASE_URL}images/gallery/media__1786467785908.png`} alt="Jay Khodiyar project work" /><div className="about-badge"><FiClock /><strong>Since<br /><span>1971</span></strong></div></div>
          </div>
          <div className="about-copy"><span className="eyebrow">Our story</span><h2 className="section-title">Experience that<br /><em>stands the test of time.</em></h2><p className="section-copy">We are Jay Khodiyar Waterproofing — a Mumbai-born team with a nationwide footprint. For over five decades, we have helped homes, industries and institutions stay dry, safe and built to perform.</p><p className="section-copy">Our approach is simple: understand the problem deeply, recommend the right system, and execute it with uncompromising attention to detail.</p><a className="button button-ghost" href="#contact">Get to know us <FiArrowUpRight /></a></div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container"><div className="section-heading"><div><span className="eyebrow">What we do</span><h2 className="section-title">Protection, from<br /><em>every angle.</em></h2></div><p className="section-copy">From a single bathroom to a large industrial facility, our specialists bring the right material, method and mindset to every surface.</p></div>
          <div className="service-grid">{services.map(([title, desc, Icon], i) => <motion.article className="service-card" key={title} whileHover={{ y: -7 }} transition={{ duration: .2 }}><div className="service-number">0{i + 1}</div><div className="service-icon"><Icon /></div><h3>{title}</h3><p>{desc}</p><a href="#contact">Discover service <FiArrowUpRight /></a></motion.article>)}</div>
        </div>
      </section>

      <section className="quality"><div className="container quality-grid"><div><span className="eyebrow">Our promise</span><h2 className="section-title">Good work is<br /><em>never an accident.</em></h2><p className="section-copy">It is the result of years of experience, disciplined processes and a genuine respect for the people who trust us with their structures.</p><a className="button button-primary" href="#contact">Talk to an expert <FiArrowUpRight /></a></div><div className="quality-list">{[['01', 'Trust, first', 'We earn confidence through clarity, honest advice and dependable delivery.'], ['02', 'Built for durability', 'The right diagnosis, tested materials and skilled application — every time.'], ['03', 'Customer satisfaction', 'We stay accountable from the first site visit to the final handover.']].map(([n, t, d]) => <div className="quality-item" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>

      <section className="section partners" id="partners"><div className="container"><div className="section-heading compact"><div><span className="eyebrow">Certified expertise</span><h2 className="section-title">Approved applicators.<br /><em>Proven systems.</em></h2></div><p className="section-copy">We work with the industry's most trusted manufacturers to deliver systems that perform for the long term.</p></div><div className="logo-row">{partners.map((p) => <div className="partner-logo" key={p}><span>{p === 'SIKA' ? 'S' : p[0]}</span><b>{p}</b></div>)}</div></div></section>

      <section className="section clients"><div className="container"><div className="center-heading"><span className="eyebrow">A record we are proud of</span><h2 className="section-title">Trusted across<br /><em>industries.</em></h2><p className="section-copy">Our work protects the spaces where people live, work, travel and grow.</p></div><div className="client-grid">{clients.map((c) => <div key={c} className="client-card"><FiAward /><strong>{c.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</strong></div>)}</div></div></section>

      <section className="section testimonial"><div className="container testimonial-grid"><div className="quote-mark">“</div><div><div className="stars">{[1, 2, 3, 4, 5].map((n) => <FiStar key={n} />)}</div><blockquote>They understood the problem, recommended the right system and delivered exactly what they promised. Three monsoons later, our terrace is still completely dry.</blockquote><div className="quote-by"><b>Facility Head</b><span>Leading industrial client, Mumbai</span></div></div></div></section>

      <section className="contact" id="contact"><div className="container contact-grid"><div><span className="eyebrow">Let's build with confidence</span><h2 className="section-title">Have a project<br /><em>in mind?</em></h2><p className="section-copy">Tell us what you are working on. Our team will get back to you with a clear next step.</p><div className="contact-details"><a href="tel:+912228940600"><FiPhone /><span><small>Call us</small>+91 22 2894 0600</span></a><a href="mailto:info@jaykhodiyar.com"><FiMail /><span><small>Email us</small>info@jaykhodiyar.com</span></a><div><FiMapPin /><span><small>Visit us</small>Mumbai, Maharashtra · Serving all India</span></div></div></div><form className="contact-form" onSubmit={(e) => e.preventDefault()}><label>Your name<input required placeholder="How should we address you?" /></label><label>Phone number<input required type="tel" placeholder="+91" /></label><label>Tell us about your project<textarea rows="3" placeholder="A little about the site, issue or requirement..." /></label><button className="button button-orange" type="submit">Send enquiry <FiArrowUpRight /></button><small>We respect your privacy. Your details stay with our team.</small></form></div></section>
    </>
  );
}

export default Home;
