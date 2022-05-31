import Split from 'split-grid'
import './style.css'

const $ = selector => document.querySelector(selector);

Split({
  columnGutters: [{
    track: 1,
    element: $('.gutter-col-1'),
  }],
  rowGutters: [{
    track: 1,
    element: $('.gutter-row-1'),
  }]
})

const $html = $('#html');
const $js = $('#js');
const $css = $('#css');

$html.addEventListener('input', update);

$js.addEventListener('input', update);

$css.addEventListener('input', update);

function update() {
  const html = createHtml();
  $('iframe').setAttribute('srcdoc', html);
}

const createHtml = () => {
  const html = $html.value;
  const js = $js.value;
  const css = $css.value;

  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vite App</title>
    </head>

    <body>
      <div id="app">${html}</div>
      <script>${js}</script>
      <style>${css}</style>
    </body>
  </html>
  `
}