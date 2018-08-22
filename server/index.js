const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');
const server = require('express')();
const path = require('path');

/* const app = new Vue({
  template: '<div>Hello World</div>'
});

// const renderer = VueServerRenderer.createRenderer();
const renderer = VueServerRenderer.createRenderer({
  template: require('fs').readFileSync(path.join(__dirname, './index.html'), 'utf-8')
});

// 2.5.x中，调用renderToString()会返回promise
renderer.renderToString(app).then((html) => {
  // <div data-server-rendered="true">Hello World</div>
  console.log(html);
}).catch((err) => {
  console.error(err);
}) */

/* 与服务器集成 */
// const renderer = VueServerRenderer.createRenderer();
// 使用一个模板
/* const renderer = VueServerRenderer.createRenderer({
  template: require('fs').readFileSync(path.join(__dirname, './index.html'), 'utf-8')
});
// 通过传入一个‘渲染上下文对象context’，作为renderToString的第二个参数，来提供模板中的插值数据
const context = {
  title: 'SSR',
  meta: `<meta charset="UTF-8"/></>`
}
// get 指定不同的访问路径所对应的回调函数
server.get("*", (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>request URL：{{ url }}</div>`
  });

  res.setHeader('Content-type', 'text/html;charset=UTF-8');
  renderer.renderToString(app, context).then((html) => {
    res.end(html);
  }).catch((err) => {
    res.status(500).end('Internal Server Error')
    return
  })
});

server.listen(8080); */




