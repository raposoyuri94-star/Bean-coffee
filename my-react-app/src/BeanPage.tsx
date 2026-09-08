import { useRef, useState } from 'react'
import './BeanPage.css'



// Adicione itens como ['Nome', 'Descrição', 'Preço'] em items.
// Em cada secção, cada grupo tem a sua própria lista items.
type MenuGroup = { name: string; items: string[][] }
type MenuCategory = { id: string; name: string; items?: string[][]; groups?: MenuGroup[] }

const menuCategories: MenuCategory[] = [
  {
    id: 'bebidas',
    name: 'Bebidas',
    groups: [
      { name: 'Café', items: [
  ['Americano', 'Expresso duplo c/ água quente', '200 MT'],
  ['Hot chocolate', 'chocolate preto c/ creme de leite e chantilly', '200MT'],
  ['Expresso', 'Blend Brasil/ Uganda 100% arábica', '260 MT'],
  ['Expresso descafeinado', 'Opção sem cafeína', '130 MT'],
  ['Cappucino', 'Expresso duplo c/ 1/2 creme de leite', '250 MT'],
  ['Macchiato', 'Expresso simples c/ creme de leite', '150 MT'],
  ['Flat white', 'Expresso duplo c/ 1/3 creme de leite', '190MT'],
  ['Café latte', 'Expresso simples c/ creme de leite', '250 MT'],
      ] },
       { name: 'Chá natural', items: [
      ['Balacate','', '180 MT'],
      ['Menta', '', '180 MT'],
      ['Matcha', '', '200 MT'],
      ['Ginger', '', '200 MT'],
    ] },
    { name: 'Chá saqueta', items: [
      ['Roiboss','', '120 MT'],
      ['Verde', '', '180 MT'],
      ['Frutos Vermelhos', '', '200 MT'],
    ] },
    
      { name: 'Bebidas frias', items: [
      ['Água pequena', '',  '100 MT'],
      ['Água das pedras', '', '150 MT'],
       ['Água das pedras', 'Tangerina, frutos vermelhos, limão', '150 MT'],
    ] },
    { name: 'Soft drinks', items: [
      ['Tónica zero ', '',  '100 MT'],
      ['Sprite zero', '', '120 MT'],
      ['Coca-cola zero', '', '120 MT'],
    ] },
    ],
  },
  {
    id: 'pequeno-almoco',
    name: 'Pequeno-almoço',
    groups: [
      { name: 'Healthy toast', items: [
        ['Tostas de abacate ', 'Pão multigrãos tostado com abacate e rúcula', '430MT'],
        ['Tostas de abacate e ovos de codorniz', 'Pão multigrãos tostado, abacate, ovos de cordoniz escalfados e rúcula', '4300MT'],
        ['Tostas de abacate e frango', 'Pão multigrãos tostado, abacate, peito de frango, molho de iogurte, rúcula ', '600MT'],
        ['Tostas de salmão fumado e queijo cottage', 'Pão integral tostado, queijo cottage, salmão fumado e rúcula ', '850MT'],
        ['Tostas de salmão e abacate', 'Pão integral tostado, abacate,salmão fumado e rúcula ', '850MT'],
      ] },
      { name: 'Tostas', items: [
        // Exemplo: ajuste ao seu menu.
        ['Croissant de queijo', 'Croissant com queijo derretido', '200 MT'],
      ] },
      { name: 'Egg lovers', items: [
        // ['Nome', 'Descrição', 'Preço'],
      ] },
      { name: 'Sweet', items: [
        // ['Nome', 'Descrição', 'Preço'],
      ] },
    ],
  },
  {
    id: 'almoco',
    name: 'Almoço',
    groups: [
      { name: 'Entradas', items: [
        // ['Nome', 'Descrição', 'Preço'],
      ] },
      { name: 'Saladas keto', items: [
        // ['Nome', 'Descrição', 'Preço'],
      ] },
      { name: 'Bread', items: [
        // ['Nome', 'Descrição', 'Preço'],
      ] },
      { name: 'Nourishing bowls', items: [
        // ['Nome', 'Descrição', 'Preço'],
      ] },
      { name: 'Sugestão de tapas', items: [
        // ['Nome', 'Descrição', 'Preço'],
      ] },
    ],
  },


]

function MenuItems({ items }: { items: string[][] }) {
  return <div className="menu-list">
    {items.length ? items.map((item, i) => <article className="menu-item" key={item[0]}>
      <span className="item-number">{String(i + 1).padStart(2, '0')}</span>
      <div><h4>{item[0]}</h4><p>{item[1]}</p></div>
      <strong>{item[2]}</strong>
    </article>) : <p className="menu-category-empty">Novidades em breve.</p>}
  </div>
}
function BeanIcon() {
  return <img src="/Bean Logo.jpg" alt="" aria-hidden="true" />
}

function Brand() {
  return <span className="brand"><span className="brand-mark"><BeanIcon /></span><span>BEAN <i>MAPUTO</i></span></span>
}

export default function BeanPage() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const [menuCategory, setMenuCategory] = useState(0)
  const slideMenu = (index: number) => {
    const menu = menuRef.current
    if (!menu) return
    menu.scrollTo({
      left: index * menu.clientWidth,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    })
  }
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
       <div className="menu-heading"><div><p className="section-tag light">O nosso menu</p><h2>Menu enxuto.<br/><em>Grande personalidade.</em></h2></div><p>Favoritos da casa feitos com grãos cuidadosamente torrados e ingredientes que amamos.</p></div>
        <div className="menu-category-controls" role="group" aria-label="Categorias do menu">
          {menuCategories.map((category, index) => <button
            key={category.id} type="button" aria-pressed={menuCategory === index}
            aria-controls={'menu-' + category.id} onClick={() => slideMenu(index)}
          >{category.name}</button>)}
        </div>
        <p className="menu-category-hint">Deslize para explorar as categorias.</p>
        <div className="menu-categories" ref={menuRef} role="region" aria-label="Secções do menu" tabIndex={0}
          onScroll={event => {
            const menu = event.currentTarget
            setMenuCategory(Math.round(menu.scrollLeft / menu.clientWidth))
          }}>
          {menuCategories.map(category => <section className="menu-category" id={'menu-' + category.id} key={category.id} aria-labelledby={'heading-' + category.id}>
            <h3 className="menu-category-title" id={'heading-' + category.id}>{category.name}</h3>
            {category.groups ? category.groups.map((group, index) => <section className="menu-subcategory" key={group.name} aria-labelledby={category.id + '-group-' + index}>
              <h4 className="menu-subcategory-title" id={category.id + '-group-' + index}>{group.name}</h4>
              <MenuItems items={group.items} />
            </section>) : <MenuItems items={category.items ?? []} />}
          </section>)}
        </div>
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
