import { useEffect, useRef, useState } from 'react'
import './BeanPage.css'
import './GalleryPage.css'

// Add new photos to public and list their paths and Portuguese captions here.
const photos = [
  { src: '/bean-photo-0-enhanced.png', alt: 'Café num copo de vidro com chantilly e grãos de café sobre um prato de madeira', title: 'Uma pausa mais doce.', caption: 'Café e pequenos prazeres para saborear sem pressa.', label: '01 / SABORES' },
  { src: '/bean-photo-1-enhanced.png', alt: 'Duas pessoas seguram bebidas verdes sobre uma mesa de madeira', title: 'Melhor em boa companhia.', caption: 'Dois sabores, uma mesa e tempo para conversar.', label: '02 / PARTILHA' },
  { src: '/bean-photo-2-enhanced.png', alt: 'Café com desenho de um gato na espuma, colher e prato de madeira', title: 'Arte em cada chávena.', caption: 'Os pequenos detalhes tornam a pausa especial.', label: '03 / DETALHES' },
  { src: '/bean-photo-3-enhanced.png', alt: 'Balcão Bean com máquina de café, chávenas e prateleiras iluminadas', title: 'O nosso cantinho.', caption: 'Um espaço acolhedor para o seu próximo café.', label: '04 / O NOSSO ESPAÇO' },
]

export default function GalleryPage() {
  const [selected, setSelected] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const previousTitle = document.title
    const previousLanguage = document.documentElement.lang
    document.title = 'Galeria | Bean Maputo'
    document.documentElement.lang = 'pt-MZ'
    return () => {
      document.title = previousTitle
      document.documentElement.lang = previousLanguage
      document.body.style.overflow = ''
    }
  }, [])

  const enlarge = (index: number) => {
    setSelected(index)
    dialog.current?.showModal()
    document.body.style.overflow = 'hidden'
  }
  const close = () => dialog.current?.close()

  return <div className="site-shell gallery-page" lang="pt-MZ">
    <header className="gallery-header">
      <a className="brand" href="/" aria-label="Bean Maputo — página inicial">
        <span className="brand-mark"><img src="/Bean Logo.jpg" alt="" /></span>
        <span>BEAN <i>MAPUTO</i></span>
      </a>
      <nav aria-label="Navegação principal">
        <a href="/">Início</a>
        <a href="/galeria" aria-current="page">Galeria</a>
        <a href="/#visit">Visite-nos</a>
      </nav>
    </header>
    <main id="gallery-main">
      <section className="gallery-intro" aria-labelledby="gallery-title">
        <p className="section-tag">O NOSSO ÁLBUM / MAPUTO</p>
        <h1 id="gallery-title">Pequenos momentos.<br /><em>Boas memórias.</em></h1>
        <div className="gallery-intro-bottom">
          <p>Um olhar sobre o universo Bean. Café, detalhes e momentos que apetece guardar.</p>
          <a href="#fotografias">Explore a galeria <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      <section className="gallery-grid" id="fotografias" aria-label="Fotografias Bean">
        {photos.map((photo, index) => <figure className="gallery-card" key={photo.src}>
          <button className="gallery-photo" type="button" onClick={() => enlarge(index)} aria-label={`Ampliar fotografia: ${photo.title}`}>
            <img src={photo.src} alt={photo.alt} loading={index === 0 ? 'eager' : 'lazy'} />
            <span className="gallery-expand" aria-hidden="true">Ampliar</span>
          </button>
          <figcaption>
            <span className="gallery-label">{photo.label}</span>
            <h2>{photo.title}</h2>
            <p>{photo.caption}</p>
          </figcaption>
        </figure>)}
      </section>
      <section className="gallery-invitation">
        <p className="section-tag">DA FOTOGRAFIA À SUA PRÓXIMA PAUSA</p>
        <h2>O próximo momento<br /><em>pode ser seu.</em></h2>
        <a className="button button-gold" href="/#visit">Venha conhecer-nos </a>
      </section>
    </main>
    <footer><a href="/">BEAN MAPUTO</a><p>Bom café. Boa companhia. Maputo.</p><p>© 2026 Bean Maputo</p></footer>
    <dialog className="gallery-dialog" ref={dialog} aria-label="Fotografia ampliada" onClose={() => { document.body.style.overflow = '' }} onClick={event => { if (event.target === event.currentTarget) close() }}>
      <div className="gallery-dialog-content">
        <button className="gallery-close" type="button" onClick={close} autoFocus>Fechar ×</button>
        <img src={photos[selected].src} alt={photos[selected].alt} />
        <p>{photos[selected].title}</p>
        <div className="gallery-dialog-controls">
          <button type="button" onClick={() => setSelected((selected + photos.length - 1) % photos.length)}>← Anterior</button>
          <span aria-live="polite">{selected + 1} / {photos.length}</span>
          <button type="button" onClick={() => setSelected((selected + 1) % photos.length)}>Seguinte →</button>
        </div>
      </div>
    </dialog>
  </div>
}