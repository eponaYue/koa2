const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

app.use(async ctx => {
  if (ctx.url === '/index') {
    ctx.cookies.set('cookie_id', '20200103', {
      domain: '127.0.0.1',
      path: '/index',
      maxAge: 1000 * 60 * 60 * 24,
      expires: new Date('2020-01-31'),
      httpOnly: false,
      overwrite: false,
    });
    ctx.body = 'cookie is ok';
  } else {
    if (ctx.cookies.get('cookie_id')) {
      ctx.body = ctx.cookies.get('cookie_id');
    } else {
      ctx.body = 'hello koa cookies';
    }
  }
});

app.listen(3001, () => {
  console.log('[demo] is starting at port 3001');
});