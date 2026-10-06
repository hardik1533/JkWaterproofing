import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('jk-theme') === 'dark');
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('jk-theme', dark ? 'dark' : 'light');
  }, [dark]);
  const links = [['About', '#about'], ['Services', '#services'], ['Our work', '#partners'], ['Contact', '#contact']];
  return <header className="navbar"><div className="container nav-inner"><a className="brand" href="#home"><span className="brand-mark">JK</span><span><b>JAY KHODIYAR</b><small>WATERPROOFING</small></span></a><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map(([name, href]) => <a key={name} href={href} onClick={() => setOpen(false)}>{name}</a>)}</nav><div className="nav-actions"><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <FiSun /> : <FiMoon />}</button><a className="button button-primary nav-cta" href="#contact">Get a quote <span>↗</span></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <FiX /> : <FiMenu />}</button></div></div></header>;
}

export default Navbar;
