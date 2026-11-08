# spikebias.github.io

Landing page of the paper *Spike sorting biases and information loss in a detailed cortical model*: code (<https://github.com/spikebias/spikebias-paper>) and data (DANDI dandiset 001250).

A static site with no build step: open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000     # then open http://localhost:8000
```

```
index.html               the page
static/css/landing.css   the style (light and dark), from multigeom.github.io
static/js/landing.js     theme switch and BibTeX copy
static/img/fig1-7.png    figures of the paper (pdftoppm -r 130 of paper/submission/fig<N>.pdf)
```
