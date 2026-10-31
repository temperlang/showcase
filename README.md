# Temper showcase

A one-page list of libraries written in [Temper](https://temperlang.dev/),
each compiled from one source to C++, C#, Java, JavaScript, Lua, Python,
and Rust.

Plain HTML, CSS, and a little JavaScript, with no build step, no packages,
no web fonts, and no analytics.

- `libraries.js`: the list, one entry per library (name, phrase, topics,
  links, and which picture to draw). Add a library here.
- `app.js`: renders the list, and draws each row's picture as inline HTML
  and CSS.
- `style.css`: light and dark, from `prefers-color-scheme`.

## Preview

ES modules don't load from `file://`, so serve the folder:

```sh
python3 -m http.server --bind 127.0.0.1 -d . 8770
```

and open <http://127.0.0.1:8770/>.

## Deploying

`.github/workflows/site.yml` publishes the folder to GitHub Pages from
`main`, once Settings > Pages > Source is set to GitHub Actions. It's
untested so far.

## Later

- Live search by topic: filter `libraries` in `libraries.js` by name,
  phrase, and `topics` as the visitor types, and re-render the matches.

## License

Apache-2.0 OR MIT; see [COPYRIGHT](COPYRIGHT).
