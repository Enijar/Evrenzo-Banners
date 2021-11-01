const content = {
  colors: {
    primary: "#007A33",
  },
  backgroundImage: require("../assets/background.jpg"),
  logos: {
    evrenzo: require("../assets/evrenzo-logo.svg"),
    astellas: require("../assets/astellas-logo.svg"),
  },
  hcpDisclaimer: `
    For Healthcare Professionals Only<br/>
    <span class="highlight-primary">Click here for UK Prescribing Information and Adverse <span>Event Reporting</span></span>
  `,
  intro: `
    <h2 class="prelude"><span>EVRENZO (roxadustat) is </span><span>indicated for treatment of adult patients with symptomatic </span>anaemia associated with CKD<sup>1</sup></h2>
    <h1 class="title">In anaemia of chronic kidney disease (CKD), the treatment landscape is changing</h1>
  `,
  treatment: `
    <h1 class="title smaller">Follow a new pathway to treat anaemia of CKD…</h1>
  `,
  erythropoiesis: `
    <h1 class="title"><span>EVRENZO™</span> harnesses the HIF pathway to stimulate erythropoiesis<sup>1,2</sup> </h1>
    <ul>
        <li>HIF (hypoxia-inducible factor) is a central regulator of erythropoiesis<sup>3</sup></li>
        <li>EVRENZO is the first treatment to activate the HIF pathway<sup>4</sup></li>
        <li>Through this action, EVRENZO mimics the body’s natural response to hypoxia<sup>2</sup></li>
    </ul>
  `,
  references: `
    <ol>
      <li>EVRENZO SmPC.</li>
      <li>Del Vecchio L, LocateIIi F. Expert Opin Investig Drugs. 2018;27(1):125-133.</li>
      <li>Locatelli F et al. Am J Nephrol. 2017;45:187-199.</li>
      <li>Sanghani NS, Haase VH. Adv Chronic Kidney Dis 2019; 26:253–266.</li>
    </ol>
  `,
  disclaimer: `
    <div class="disclaimer">
        <p>This advert is intended for UK and EU audience only.</p>
        <p>Please note that indications and availability may vary in different countries.</p>
        <p><a class="underline" href="https://www.medicines.org.uk/emc/product/12835" target="_blank" rel="noreferrer">Refer to your local summary of product characteristics/</a>prescribing information for details.</p>
    </div>
  `,
};

module.exports = content;
