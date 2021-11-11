#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const puppeteer = require("puppeteer");
const config = require("../src/config/types");

const BUILD_DIR = path.resolve(__dirname, "..", "build");
const STORAGE_DIR = path.resolve(__dirname, "..", "storage");

(async () => {
  const browser = await puppeteer.launch();
  try {
    const types = [
      "billboard",
      "leaderboard",
      "mpu",
      "skyscraper",
      "half-page",
    ];

    await Promise.all(
      types.map(async (type) => {
        const file = path.join(BUILD_DIR, `${type}.html`);

        if (!fs.existsSync(file)) {
          return console.warn(
            `No ${type}.html file in build directory, skipping GIF generation for ${type}`
          );
        }

        const page = await browser.newPage();
        await page.setViewport({
          width: config[type].width,
          height: config[type].height,
        });
        await page.goto(`file://${file}`, {
          waitUntil: "networkidle0",
        });

        async function screenshotSlide(index) {
          await page.screenshot({
            type: "jpeg",
            path: path.join(STORAGE_DIR, `${type}-${index}.jpg`),
            quality: 100,
          });
        }

        await page.evaluate(() => {
          window.mode = "production";
          window.state = window.state || {
            autoPlay: false,
            loop: false,
            slideIndex: -1,
          };

          window.main();

          // Disable slide transitions
          const carousel = document.querySelector("#carousel");
          const slides = carousel.querySelectorAll("section");
          carousel.style.transition = "none";
          slides.forEach((slide) => {
            slide.style.transition = "none";
          });
        });

        async function nextSlide() {
          await page.evaluate(() => {
            window.nextSlide();
          });
        }

        for (let i = 0; i < 4; i++) {
          await screenshotSlide(i);
          if (i < 3) {
            await nextSlide();
          }
        }

        const input = path.join(STORAGE_DIR, `${type}-*.jpg`);
        const output = path.join(STORAGE_DIR, `${type}.gif`);

        execSync(`convert -delay 400 -loop 0 ${input} ${output}`);
      })
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await browser.close();
    process.exit(0);
  }
})();
