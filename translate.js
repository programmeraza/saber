// auto-translate.js
import fs from "fs-extra";
import { glob } from "glob";
import translate from "google-translate-api-x";

const sourceLang = "en";
const targetLangs = ["ru", "uz"];
const outputDir = "./public/locales";

async function extractTextFromFiles() {
  const files = glob.sync("./src/**/*.{js,jsx,tsx}");
  const texts = new Set();

  const textRegex = />([^<>]+)</g; 
  const stringRegex = /"([^"]+)"|'([^']+)'/g; 

  for (const file of files) {
    const content = await fs.readFile(file, "utf8");

    let match;
    while ((match = textRegex.exec(content))) {
      const text = match[1].trim();
      if (text && !text.match(/^[{}\[\]\s0-9]+$/)) texts.add(text);
    }

    while ((match = stringRegex.exec(content))) {
      const text = (match[1] || match[2]).trim();
      if (
        text &&
        !text.startsWith("http") &&
        !text.startsWith("/") &&
        !text.includes("{") &&
        text.length < 100
      )
        texts.add(text);
    }
  }

  return Array.from(texts);
}

async function translateTexts(texts) {
  const result = {};
  for (const text of texts) {
    result[text] = text; 
  }
  return result;
}

async function translateAll() {
  console.log("🔍 Извлекаем тексты из кода...");
  const texts = await extractTextFromFiles();

  console.log(`📦 Найдено ${texts.length} текстов.`);
  await fs.ensureDir(`${outputDir}/${sourceLang}`);

  const baseFile = `${outputDir}/${sourceLang}/translate.json`;
  const baseTranslations = await translateTexts(texts);
  await fs.writeJson(baseFile, baseTranslations, { spaces: 2 });
  console.log(`✅ Сохранено: ${baseFile}`);

  for (const lang of targetLangs) {
    console.log(`🌐 Переводим на ${lang}...`);
    const translated = {};
    for (const text of texts) {
      try {
        const { text: translatedText } = await translate(text, { to: lang });
        translated[text] = translatedText;
      } catch {
        translated[text] = text;
      }
    }
    const targetPath = `${outputDir}/${lang}/translate.json`;
    await fs.ensureDir(`${outputDir}/${lang}`);
    await fs.writeJson(targetPath, translated, { spaces: 2 });
    console.log(`✅ Готово: ${targetPath}`);
  }

  console.log("🎉 Перевод завершён!");
}

translateAll().catch(console.error);
