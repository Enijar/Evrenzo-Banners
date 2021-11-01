const content = require("./content");
const types = require("./types");

const config = {
  content: content,
  backgroundImage: content.backgroundImage,
  jobCode: {
    billboard: "EVZ_2021_0060_UK NOVEMBER 2021",
    leaderboard: "EVZ_2021_0131_UK NOVEMBER 2021",
    mpu: "EVZ_2021_0128_UK NOVEMBER 2021",
    skyscraper: "EVZ_2021_0129_UK NOVEMBER 2021",
    "half-page": "EVZ_2021_0130_UK NOVEMBER 2021",
  },
  hcpDisclaimer: content.hcpDisclaimer,
  ...types,
  slides: {
    billboard: [
      { content: content.intro, timeout: 4000 },
      { content: content.treatment, timeout: 4000 },
      {
        content: `
          ${content.erythropoiesis}
          <img src="${content.logos.astellas}" alt="Astellas"/>
        `,
        backgroundColor: content.colors.primary,
        timeout: 4000,
      },
      {
        content: `
        <div class="grid">
          ${content.disclaimer}
          ${content.references}
          <img src="${content.logos.astellas}" alt="Astellas"/>
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
    ],
    leaderboard: [
      { content: content.intro, timeout: 3000 },
      { content: content.treatment, timeout: 4000 },
      {
        content: content.erythropoiesis,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
      {
        content: `
        <div class="grid">
            <img src="${content.logos.astellas}" alt="Astellas"/>
            ${content.references}
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
      {
        content: `
        <div class="grid">
            <img src="${content.logos.astellas}" alt="Astellas"/>
            ${content.disclaimer}
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 2000,
      },
    ],
    mpu: [
      { content: content.intro, timeout: 3000 },
      { content: content.treatment, timeout: 4000 },
      {
        content: content.erythropoiesis,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
      {
        content: `
        <div class="grid">
            <img src="${content.logos.astellas}" alt="Astellas"/>
            ${content.references}
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
      {
        content: `
        <div class="grid">
            <img src="${content.logos.astellas}" alt="Astellas"/>
            ${content.disclaimer}
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 2000,
      },
    ],
    skyscraper: [
      // { content: content.intro, timeout: 4000 },
      { content: content.treatment, timeout: 4000 },
      {
        content: `
          ${content.erythropoiesis}
          <img src="${content.logos.astellas}" alt="Astellas"/>
        `,
        backgroundColor: content.colors.primary,
        timeout: 4000,
      },
      {
        content: `
        <div class="grid">
          ${content.disclaimer}
          ${content.references}
          <img src="${content.logos.astellas}" alt="Astellas"/>
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
    ],
    "half-page": [
      { content: content.intro, timeout: 4000 },
      { content: content.treatment, timeout: 4000 },
      {
        content: `
          ${content.erythropoiesis}
          <img src="${content.logos.astellas}" alt="Astellas"/>
        `,
        backgroundColor: content.colors.primary,
        timeout: 4000,
      },
      {
        content: `
        <div class="grid">
          ${content.disclaimer}
          ${content.references}
          <img src="${content.logos.astellas}" alt="Astellas"/>
        </div>
      `,
        backgroundColor: content.colors.primary,
        timeout: 3000,
      },
    ],
  },
};

module.exports = config;
