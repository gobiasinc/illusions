const Koa = require('koa');
const app = new Koa();

app.use(require('koa-static')(__dirname + '/www', {}))

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(5053, a => console.log('listening!'));