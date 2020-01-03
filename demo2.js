// Get请求的接收
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser());
app.use(async (ctx) => {
  // get请求显示表单让用户填写
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
      <h1>koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>username</p>
        <input name="username" /><br />
        <p>age</p>
        <input name="age" /><br />
        <p>something</p>
        <input name="something" /><br />
        <button type="submit">submit</button>
      </form>
    `;
    ctx.body = html;
    // post请求
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    let postData = ctx.request.body;
    ctx.body = postData;
  } else {
    // 其他请求显示404
    ctx.body = `<h1>404!</h1>`
  }
});

app.listen(3002, () => {
  console.log('[demo] server is starting at port 3002');
});