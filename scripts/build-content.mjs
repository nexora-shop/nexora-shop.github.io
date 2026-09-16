import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const contentDir = path.join(root, "content", "products");
const outputDir = path.join(root, "app", "generated");
const outputFile = path.join(outputDir, "products.json");

fs.mkdirSync(outputDir, { recursive: true });

const files = fs.existsSync(contentDir)
  ? fs.readdirSync(contentDir).filter((file) => file.endsWith(".md"))
  : [];

const products = files.map((file) => {
  const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
  const parsed = matter(raw);
  const data = parsed.data;
  const id = String(data.id || path.basename(file, ".md"));

  const images = Array.isArray(data.images)
    ? data.images.map(String).filter(Boolean).slice(0, 6)
    : [];

  const mainImage = String(data.image || images[0] || "");

  return {
    id,
    name: String(data.title || ""),
    category: String(data.category || ""),
    subcategory: String(data.subcategory || ""),
    description: String(data.description || ""),
    image: mainImage,
    images: images.length ? images : (mainImage ? [mainImage] : []),
    affiliate: String(data.affiliate || "")
  };
}).filter((product) =>
  product.id && product.name && product.category && product.subcategory &&
  product.description && product.image && product.affiliate
);

fs.writeFileSync(outputFile, JSON.stringify(products, null, 2) + "\n");
console.log(`Generated ${products.length} products.`);
