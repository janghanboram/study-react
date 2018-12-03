require("dotenv").config();

const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const api = require("./api");
const mongoose = require("mongoose");

const { PORT: port = 4000, MONGO_URI: mongoURI } = process.env;

// mongoose에서 데이터베이스를 요청할 때, Promise 기반으로 처리할 수 있음.
// 어떤 형식의 Promise를 사용헐 지 정해야 한다.
// Node.js 자체에 Promise를 내장하고 있어서, 내장된 Promise를 사용하도록 설정한 것.
mongoose.Promise = global.Promise;
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(e => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

//api 라우트를 적용한 설정
router.use("/api", api.routes());

//라우터 적용 전에 bodyParser 적용!
app.use(bodyParser());

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log("listening to port 4000");
});
