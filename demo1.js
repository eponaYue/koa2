// 解析Node原生POST参数
function parsePostData(ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.on('data', data => {
        postdata += data;
      });
      ctx.req.addListener("end", () => {
        let parseData = parseQueryStr(postdata);
        resolve(parseData);
      });
    } catch (error) {
      reject(error);
    }
  });
}
// post字符串解析成JSON对象
function parseQueryStr(queryStr) {
  let queryData = {};
  let queryStrList = queryStr.split('&');
  console.log(queryStrList);
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=');
    console.log(itemList);
    queryData[itemList[0]] = decodeURIComponent(itemList[1]);
  }
  return queryData;
}

// Get请求的接收
const Koa = require('koa');
const app = new Koa();
app.use(async (ctx) => {
  /*
    let url = ctx.url;
    // 从request中获取GET请求
    let request = ctx.request;
    let req_query = request.query;
    let req_querystring = request.querystring;
    // 从上下文直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;
  
    ctx.body = {
      url,
      req_query,0
      req_querystring,
      ctx_query,
      ctx_querystring,
      ctx,
    };
  */
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
    let postData = await parsePostData(ctx);
    ctx.body = postData;
    // ctx.body = "接收到请求";
  } else {
    // 其他请求显示404
    ctx.body = `<h1>404!</h1>`
  }
});

app.listen(3002, () => {
  console.log('[demo] server is starting at port 3002');
});