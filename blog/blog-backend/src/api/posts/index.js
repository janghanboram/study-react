const Router = require('koa-router')

const posts = new Router()
const postsCtrl = require('./posts.ctrl')

posts.post("/", postsCtrl.write);
posts.get("/", postsCtrl.list);

posts.get("/:id", postsCtrl.checkObjectId, postsCtrl.read);
posts.delete("/:id", postsCtrl.checkObjectId, postsCtrl.remove);
posts.patch("/:id", postsCtrl.checkObjectId, postsCtrl.update);

module.exports = posts;
