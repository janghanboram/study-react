/*
    koa-router
    - using params and query
*/

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa();
const router = new Router();

// 라우터를 설정할 때,
// 첫번째 파라미터 : 라우트의 path,
// 두번째 파라미터 : 이 라우트를 처리할 함수.

router.get('/', (ctx)=>{
    ctx.body="홈"
})

router.get('/about/:name?', (ctx)=>{
    const {name} = ctx.params;
    // name의 존재 유무에 따라 다른 결과를 출력한다.
    ctx.body = name ? `${name}의 소개` : '소개'
})

router.get('/posts', (ctx)=>{
    const {id} = ctx.query;
    ctx.body = id ? `포스트 ${id}` : '포스트 아이디가 없습니다.'
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, ()=>{
    console.log('listening to port 4000')
})