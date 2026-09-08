import { useState } from 'react'
import './BeanPage.css'

const drinks = [
  ['Americano', 'Expresso duplo c/ água quente', '200 MT'],
  ['Hot chocolate', 'chocolate preto c/ creme de leite e chantilly', '200MT'],
  ['Expresso', 'Blend Brasil/ Uganda 100% arábica', '260 MT'], // Descafeinado 130MT
  ['Cappucino', 'Expresso duplo c/ 1/2 creme de leite', '250 MT'],
  ['Macchiato', 'Expresso simples c/ creme de leite', '150 MT'],
  ['Flat white', 'Expresso duplo c/ 1/3 creme de leite', '190MT'],
  ['Café latte', 'Expresso simples c/ creme de leite', '250 MT'],
]

function BeanIcon() {
  return <img src="/Bean Logo.jpg" alt="" aria-hidden="true" />
}

function Brand() {
  return <span className="brand"><span className="brand-mark"><BeanIcon /></span><span>BEAN <i>MAPUTO</i></span></span>
}

export default function BeanPage() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <div className="site-shell">
    <header className="header">
      <a href="#top" aria-label="Bean Maputo home"><Brand /></a>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span/><span/><b>Toggle navigation</b></button>
      <nav id="site-nav" className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        <a href="#story" onClick={close}>Our story</a><a href="#menu" onClick={close}>Menu</a><a href="/galeria" onClick={close}>Galeria</a><a href="#visit" onClick={close}>Visit us</a><a className="nav-cta" href="#menu" onClick={close}>Fazer pedido</a>
      </nav>
    </header>
    <main id="top">
      <section className="hero-section">
        <img className="hero-image" src="/bean-hero-clean.png" alt="Bean Maputo takeaway coffee and bag" fetchPriority="high"/><div className="hero-shade"/>
        <div className="hero-content">
          <p className="eyebrow"><span/>Cofee memories in Maputo</p>
          <h1>Comece o seu dia bem<br/><em>logo ao amanhecer</em></h1>
          <p className="hero-copy"><em>Manhãs calmas, café honesto e o ritmo acolhedor da nossa cidade. Venha pelo café. Fique pela sensação.</em></p>
          <div className="hero-actions"><a className="button button-light" href="#menu">Explore o nosso menu<span></span></a><a className="text-link" href="#story">Descobra a nossa história <span></span></a></div>
        </div>
        <div className="hero-meta"><span>MAPUTO, MOÇAMBIQUE</span><span>-25.9644° S · 32.5992° E</span></div><a className="scroll-cue" href="#story" aria-label="Scroll to our story">↓</a>
      </section>
      <section className="manifesto" id="story">
        <p className="section-tag">Nossa filosofia</p><p className="manifesto-text">O café deve ser como um abraço quentinho  em uma xícara.</p>
        <div className="principles">
          <article><strong>01</strong><div><h3>Localmente fundamentado</h3><p>Nascido em Maputo, moldado pelo seu calor, pelas suas cores e pela sua energia irresistível.</p></div></article>
          <article><strong>02</strong><div><h3>Cuidadosamente selecionado</h3><p>Grãos selecionados com cuidado, respeitando as pessoas e os lugares por trás de cada colheita.</p></div></article>
          <article><strong>03</strong><div><h3>Feito com intenção</h3><p>Cada xícara afinada com precisão e servida com a autêntica hospitalidade moçambicana.</p></div></article>
        </div>
      </section>
      <section className="menu-section" id="menu">
       <div className="menu-heading"><div><p className="section-tag light">Do nosso bar</p><h2>Menu enxuto.<br/><em>Grande personalidade.</em></h2></div><p>Favoritos da casa feitos com grãos cuidadosamente torrados e ingredientes que amamos.</p></div>
        <div className="menu-list">{drinks.map((drink, i) => <article className="menu-item" key={drink[0]}><span className="item-number">0{i + 1}</span><div><h3>{drink[0]}</h3><p>{drink[1]}</p></div><strong>{drink[2]}</strong></article>)}</div>
        <a className="button button-gold" href="https://wa.me/258123456?text=Coffee%20order">Start an order</a>
      </section>
      <section className="visit-section" id="visit">
        <div><p className="section-tag">Venha dizer olá</p><h2>Uma boa xícara está<br/>mais perto do que você imagina.</h2></div>
<div className="visit-details"><div><span>Encontre-nos</span><p>822 Av. Julius Nyerere<br/>Maputo 0000, Mozambique</p></div><div><span>Horário de funcionamento</span><p>Seg - Sex &nbsp; 07:00-18:00<br/>Sáb - Dom &nbsp; 08:00-16:00</p></div><div className="visit-map"><iframe title="Mapa da Bean Coffee Shop em Maputo" src="https://maps.google.com/maps?q=822%20Av.%20Julius%20Nyerere%2C%20Maputo%BeanCofeeshop%2C%20Mozambique&amp;z=17&amp;output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href="https://www.google.com/maps/search/?api=1&amp;query=822%20Av.%20Julius%20Nyerere%2C%20Maputo%200000%2C%20Mozambique" target="_blank" rel="noreferrer">Abrir no Google Maps</a></div></div>
      </section>
    </main>
<footer><a href="#top"><Brand/></a><p>Bom café. Boa companhia. Maputo.</p><p>© 2026 Bean Maputo</p></footer>
  </div>
}
