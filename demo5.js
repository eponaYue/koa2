const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router({ prefix: '/appId1217' });

const homeRouter = new Router();
const pageRouter = new Router();

homeRouter
  .get('/home', async ctx => {
    ctx.body = 'home mainPage';
  })
  .get('/todo', async ctx => {
    ctx.body = 'home todoPage';
  });

pageRouter
  .get('/home', async ctx => {
    ctx.body = 'page mainPage';
  })
  .get('/todo', async ctx => {
    ctx.body = ctx.query;
  });

router.use('/home', homeRouter.routes(), homeRouter.allowedMethods());
router.use('/page', pageRouter.routes(), pageRouter.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
  console.log('[demo] server is starting at port 3001');
  console.log(homeRouter.routes());
})