const server = require('express')();
const VueServerRenderer = require('vue-server-renderer');
const serverBundle = require('../server-build/vue-ssr-server-bundle.json');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');

const renderer = VueServerRenderer.createBundleRenderer(serverBundle, {
  // template: require('fs').readFileSync(path.join(__dirname, './index.html'), 'utf-8'),
  clientManifest
});

server.get('*', (req, res) => {
  const context = {
    url: req.url
  };
  renderer.renderToString(context).then((html) => {
    res.end(html);
  }).catch((err) => {
    console.log(err);
  });
});

server.listen(3333);
