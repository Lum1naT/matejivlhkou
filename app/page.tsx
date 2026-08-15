const serviceCards = [
  {
    number: "01",
    title: "Chemická injektáž zdiva",
    text: "Šetrná bariéra proti vzlínající vlhkosti bez zásahu do statiky domu.",
    price: "od 2 100 Kč / m²",
    image:
      "https://www.izolacevlhkosti.cz/wp-content/uploads/2026/01/20220121-105146-596x795-1.jpeg",
  },
  {
    number: "02",
    title: "Izolační stěrky",
    text: "Minerální a bitumenová ochrana proti zemní, dešťové i tlakové vodě.",
    price: "od 1 200 Kč / m²",
    image:
      "https://www.izolacevlhkosti.cz/wp-content/uploads/2026/01/03-hydroizolan-strka-596x396-1.webp",
  },
  {
    number: "03",
    title: "Sanační omítky",
    text: "Prodyšný sanační systém, který odvádí vlhkost a bezpečně ukládá soli.",
    price: "od 1 100 Kč / m²",
    image:
      "https://www.izolacevlhkosti.cz/wp-content/uploads/2026/01/20220719-131832-596x447-1.webp",
  },
];

const reasons = [
  "Vlhké zdivo je náchylnější k praskání a degradaci mrazem.",
  "Soli a minerály se ve zdivu hromadí a postupně jej poškozují.",
  "Plíseň zhoršuje kvalitu vnitřního prostředí.",
  "Vlhká stěna hůře izoluje a zvyšuje energetickou náročnost domu.",
];

const values = [
  ["20+ let", "Zkušenosti od prvního posouzení až po hotový povrch."],
  ["WTA", "Pracujeme s kvalitními certifikovanými sanačními materiály."],
  ["A–Z", "Poradenství, dodávka materiálu i kompletní realizace jedním týmem."],
  ["10 let", "Na chemickou injektáž poskytujeme dlouhodobou záruku."],
];

const references = [
  {
    title: "Hasičárna Lišov",
    place: "Lišov",
    text: "Dodatečná izolace vlhkých stěn, těsnicí stěrky na vnitřní zdivo a sanační omítka na fasádu.",
    image:
      "https://www.izolacevlhkosti.cz/wp-content/uploads/2026/01/DSC01490-scaled-e1768337242142-1024x582.jpg",
  },
  {
    title: "Biskupství",
    place: "Jindřichův Hradec",
    text: "Injektáž vlhkého zdiva, vnitřní těsnicí stěrka a kompletní systém sanačních omítek.",
    image:
      "https://www.izolacevlhkosti.cz/wp-content/uploads/2026/01/DSC01418-scaled-e1768336478110-1024x760.webp",
  },
  {
    title: "Minipivovar Solnice",
    place: "České Budějovice",
    text: "Dodatečná izolace zdiva injektáží, těsnicí stěrky v pivovaru a sanační omítky v obou objektech.",
    image:
      "https://www.izolacevlhkosti.cz/wp-content/uploads/2026/01/DSC01498-scaled-e1768336539631-1024x997.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#domu" aria-label="FTIZOL – domů">
          <img className="brand-logo" src="/ftizol-logo.svg" alt="FTIZOL" />
        </a>
        <nav className="desktop-nav" aria-label="Hlavní navigace">
          <a href="#reseni">Řešení</a>
          <a href="#proc-my">Proč my</a>
          <a href="#reference">Reference</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="header-phone" href="tel:+420602720416">
          <span>Konzultace zdarma</span>
          +420 602 720 416
        </a>
        <details className="mobile-menu">
          <summary aria-label="Otevřít navigaci">Menu</summary>
          <nav aria-label="Mobilní navigace">
            <a href="#reseni">Řešení</a>
            <a href="#proc-my">Proč my</a>
            <a href="#reference">Reference</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="domu">
        <div className="hero-shade" />
        <div className="hero-content shell">
          <p className="eyebrow light">Hydroizolace • sanace • poradenství</p>
          <h1>
            Vlhkost ve zdivu?
            <span>Vyřešíme ji od základu.</span>
          </h1>
          <p className="hero-lead">
            Najdeme příčinu, navrhneme správný postup a provedeme kompletní
            sanaci vašeho domu, bytu nebo sklepa.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#kontakt">
              Chci konzultaci zdarma
            </a>
            <a className="button ghost" href="#reseni">
              Prohlédnout řešení
            </a>
          </div>
          <p className="hero-note">Úvodní konzultace a základní posouzení jsou zdarma.</p>
        </div>
        <div className="hero-proof" aria-label="Naše zkušenosti">
          <div><strong>20+</strong><span>let zkušeností</span></div>
          <div><strong>1 200+</strong><span>spokojených zákazníků</span></div>
          <div><strong>10 let</strong><span>záruka na injektáž</span></div>
        </div>
      </section>

      <section className="problem-section shell" id="proc-my">
        <div className="section-heading">
          <p className="eyebrow">Když se vlhkost neřeší</p>
          <h2>Malá skvrna může být začátkem velkého problému.</h2>
        </div>
        <div className="problem-grid">
          {reasons.map((reason, index) => (
            <article className="problem-item" key={reason}>
              <span>0{index + 1}</span>
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="solutions-section" id="reseni">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Systémové řešení</p>
              <h2>Správná skladba pro každý typ vlhkosti.</h2>
            </div>
            <p>
              Neskrýváme následky. Řešíme příčiny. Kombinujeme technologie tak,
              aby se odstranila příčina a zdivo mohlo znovu fungovat.
            </p>
          </div>
          <div className="service-grid" id="sluzby">
            {serviceCards.map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt="" />
                <div className="service-card-body">
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <strong>{service.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="shell values-grid">
          {values.map(([title, text]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section shell">
        <div className="section-heading split-heading process-heading">
          <div>
            <p className="eyebrow">Realizace od A do Z</p>
            <h2>Od první skvrny po suchou stěnu.</h2>
          </div>
          <p>
            Každý dům potřebuje jiné řešení. Proto nezačínáme produktem, ale
            příčinou problému.
          </p>
        </div>
        <ol className="process-list">
          <li><span>01</span><div><h3>Popis problému</h3><p>Zavoláte nám nebo pošlete fotografie vlhkého místa.</p></div></li>
          <li><span>02</span><div><h3>Posouzení</h3><p>Navrhneme vhodnou skladbu a transparentně vysvětlíme postup.</p></div></li>
          <li><span>03</span><div><h3>Realizace</h3><p>Provedeme injektáž, izolaci i sanační vrstvy podle situace.</p></div></li>
          <li><span>04</span><div><h3>Předání a záruka</h3><p>Hotovou práci zkontrolujeme, vysvětlíme péči a předáme záruku.</p></div></li>
        </ol>
      </section>

      <section className="references-section" id="reference">
        <div className="shell">
          <div className="section-heading reference-heading">
            <p className="eyebrow">Vybrané reference</p>
            <h2>Stavby, kterým jsme pomohli znovu dýchat.</h2>
          </div>
          <div className="reference-grid">
            {references.map((reference) => (
              <article className="reference-card" key={reference.title}>
                <img src={reference.image} alt={`${reference.title} – realizace FTIZOL`} />
                <div className="reference-overlay">
                  <span>{reference.place}</span>
                  <h3>{reference.title}</h3>
                  <p>{reference.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="shell pricing-layout">
          <div className="pricing-intro">
            <p className="eyebrow">Orientační ceník</p>
            <h2>Kolik stojí suché zdivo?</h2>
            <p>
              Cena se odvíjí od tloušťky zdiva, rozsahu poškození a zvolené
              skladby. Úvodní konzultace je zdarma a přesnou nabídku připravíme
              po posouzení.
            </p>
            <a className="button dark" href="#kontakt">Nechat připravit nabídku</a>
          </div>
          <div className="price-list">
            <article><span>Chemická injektáž zdiva</span><strong>od 2 100 Kč / m²</strong></article>
            <article><span>Multifunkční izolační stěrka</span><strong>od 1 200 Kč / m²</strong></article>
            <article><span>Sanační omítky</span><strong>od 1 100 Kč / m²</strong></article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="kontakt">
        <div className="shell contact-layout">
          <div className="contact-copy">
            <p className="eyebrow light">Konzultace zdarma • bez závazku</p>
            <h2>Popište nám, co vás trápí. O zbytek se postaráme.</h2>
            <div className="contact-people">
              <article>
                <p>Hydroizolace & poradenství</p>
                <h3>David Toman</h3>
                <a href="tel:+420602720416">+420 602 720 416</a>
              </article>
              <article>
                <p>Poradenství</p>
                <h3>František Toman</h3>
                <a href="tel:+420602213034">+420 602 213 034</a>
              </article>
            </div>
          </div>
          <form className="contact-form" action="mailto:ftizolace@gmail.com" method="post" encType="text/plain">
            <div className="field-row">
              <label>Jméno<input name="Jméno" type="text" autoComplete="given-name" required /></label>
              <label>Příjmení<input name="Příjmení" type="text" autoComplete="family-name" required /></label>
            </div>
            <div className="field-row">
              <label>Telefon<input name="Telefon" type="tel" autoComplete="tel" /></label>
              <label>E-mail<input name="E-mail" type="email" autoComplete="email" required /></label>
            </div>
            <label>Co vás trápí?<textarea name="Zpráva" rows={5} required /></label>
            <button className="button primary" type="submit">Odeslat poptávku e-mailem</button>
            <p className="form-note">Po odeslání se otevře váš e-mailový program.</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-layout">
          <a className="brand" href="#domu" aria-label="FTIZOL – zpět nahoru">
            <img className="brand-logo" src="/ftizol-logo.svg" alt="FTIZOL" />
          </a>
          <div><a href="mailto:ftizolace@gmail.com">ftizolace@gmail.com</a><span>IČO: 07407211</span></div>
          <p>© 2026 FTIZOL. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </main>
  );
}
