const Koa = require('koa');
const views = require('koa-views');
const path = require('path');

const app = new Koa();

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs',
}));
app.use(async ctx => {
  let title = 'koa2 & ejs';
  await ctx.render('index', {
    title,
  })
});

app.listen(3001, () => {
  console.log('[demo] is starting at port 3001');
});