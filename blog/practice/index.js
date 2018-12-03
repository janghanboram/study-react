/*
  1. middleware next();
  2. next는 promise 객체를 반환한다.
  3. Async/Await을 사용하면 콜백함수를 사용하지 않아도 된다.
*/
const Koa = require("koa");

const app = new Koa();

// app.use((ctx, next) => {
//   console.log(1);
//   next().then(()=>{
//   console.log("bye");
//   });
// });

// Async / Await를 쓰면, 콜백을 사용하지 않아도 된다.
// 위와 동일한 의미를 가진 코드.
app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log("bye"); // 미들웨어들의 모든 작업이 끝나고 실행된다.
});

app.use((ctx, next) => {
  console.log(2);
  next();
});
app.use((ctx, next) => {
  ctx.body = "hello World";
});

app.listen(4000, () => {
  console.log("listening to port 4000");
});
