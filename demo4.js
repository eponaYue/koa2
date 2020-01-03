const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({
  prefix: '/appId1217'
});

router
  .get('/', (ctx, next) => {
    ctx.body = 'hello koa router';
  })
  .get('/todo', (ctx, next) => {
    ctx.body = 'todo page';
  });

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3002, () => {
  console.log('starting at port 3002');
})