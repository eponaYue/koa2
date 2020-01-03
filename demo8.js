const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();
const staticPath = './static';

app.use(static(path.join(__dirname, staticPath)));

app.use(async ctx => {
  ctx.body = 'hello koa-static';
});

app.listen(3001, () => {
  console.log('[demo] is starting at port 3001');
});