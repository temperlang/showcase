// The libraries, one entry each, in the order shown. app.js renders them,
// and a search later can filter this same list by name, phrase, and topics.
// Each `art` names a pattern in app.js. Leave `site` null where none exists.

export const libraries = [
  {
    name: "Chromarite",
    phrase: "Color spaces as CSS defines them: convert, parse, gamut-map, and mix.",
    topics: ["color", "color spaces", "css", "oklch", "gamut mapping", "contrast", "gradients"],
    site: "https://temperlang.github.io/chromarite/",
    repo: "https://github.com/temperlang/chromarite",
    art: "gradient",
  },
  {
    name: "Hrefine",
    phrase: "Parses URLs as browsers do, checked against web-platform-tests.",
    topics: ["urls", "parsing", "whatwg", "security", "ssrf", "idn", "web"],
    site: "https://temperlang.github.io/hrefine/",
    repo: "https://github.com/temperlang/hrefine",
    art: "url",
  },
  {
    name: "Kelpto",
    phrase: "Lossless Markdown and HTML: edit one part, and keep the rest exactly.",
    topics: ["markdown", "html", "commonmark", "parsing", "rendering", "lossless", "editing"],
    site: null,
    repo: "https://github.com/temperlang/kelpto",
    status: "In progress",
    art: "markdown",
  },
  {
    name: "Ordable",
    phrase: "Sorts strings as people expect, with file2 before file10.",
    topics: ["sorting", "strings", "natural sort", "unicode", "collation"],
    site: "https://temperlang.github.io/ordable/",
    repo: "https://github.com/temperlang/ordable",
    art: "labels",
  },
];
