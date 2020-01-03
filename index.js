const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'hello koa2';
});

app.listen(3002);
console.log('[demo] start-quick is starting at port 3002');

/**
 * async 声明异步方法
 */
async function testAsync() {
  return 'hello async';
}

const result = testAsync();
console.log(result); // 异步方法返回 Promise {'hello async'}

/**
 * await,等待async方法执行完毕，实质是等待一个表达式，该表达式可为Promise对象，也可为普通值
 */

function normalFunc() {
  return 'normal function';
}

async function testAwait() {
  const v1 = await normalFunc();
  const v2 = await testAsync();
  console.log(v1, v2);
}

testAwait();

/**
 * await & async
 */

function takePromise() {
  return new Promise(resolve => {
    setTimeout(() => resolve('promise_success_value'), 1000);
  });
}

async function test() {
  const v = await takePromise();
  console.log('await & async:', v);
}

test();