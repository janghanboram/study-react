const Router = require('koa-router')

const api = new Router()

api.get('/test', (ctx)=>{
    ctx.body="성공"
})

// 라우터를 내보낸다.
module.exports = api;