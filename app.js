// Renders libraries.js as a list, each row with a small picture of what the
// library does. The pictures are decorative and hidden from screen readers.
import { libraries } from "./libraries.js";

const art = {
  // A soft band through OkLCh hues; see .art-gradient in style.css.
  gradient: () => "",

  // A URL, its parts tinted and named, as Hrefine splits it.
  url: () => {
    const parts = [
      ["scheme", "https:"],
      ["sep", "//"],
      ["host", "example.com"],
      ["port", ":8080"],
      ["path", "/docs/a"],
      ["query", "?q=1"],
      ["fragment", "#intro"],
    ];
    return `<div class="url">${parts
      .map(([kind, text]) =>
        kind === "sep"
          ? `<span class="sep">${text}</span>`
          : `<span class="part ${kind}"><span class="text">${text}</span><span class="name">${kind}</span></span>`,
      )
      .join("")}</div>`;
  },

  // Markdown source on the left, fading into the text it renders.
  markdown: () => `
    <div class="md">
      <pre class="src"># Kelp
Grows **fast** in
_cold_ water.</pre>
      <div class="out"><b class="h">Kelp</b><span>Grows <b>fast</b> in</span><span><i>cold</i> water.</span></div>
    </div>`,

  // Labels in smart order, where plain sorting would put file10 after file1.
  labels: () =>
    `<ol class="labels">${["file1", "file2", "file9", "file10", "file11", "file20", "file100"]
      .map((label) => `<li>${label}</li>`)
      .join("")}</ol>`,
};

function el(tag, attrs = {}, text) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  if (text !== undefined) node.textContent = text;
  return node;
}

function row(lib) {
  const item = el("li", { class: `lib lib-${lib.art}` });
  const picture = el("div", { class: `art art-${lib.art}`, "aria-hidden": "true" });
  picture.innerHTML = art[lib.art]();
  const body = el("div", { class: "body" });
  const title = el("h2", {}, lib.name);
  if (lib.status) title.append(" ", el("span", { class: "status" }, lib.status));
  const links = el("p", { class: "links" });
  if (lib.site) links.append(el("a", { href: lib.site, "aria-label": `${lib.name} site` }, "Site"));
  links.append(el("a", { href: lib.repo, "aria-label": `${lib.name} on GitHub` }, "GitHub"));
  body.append(title, el("p", { class: "phrase" }, lib.phrase), links);
  item.append(picture, body);
  return item;
}

document.getElementById("libraries").replaceChildren(...libraries.map(row));
