const Post = require("models/post");

/*
 * POST /api/posts
 * {title, body, tags}
 */
exports.write = async ctx => {
  const { title, body, tags } = ctx.request.body;

  const post = new Post({
    title,
    body,
    tags
  });

  try {
    await post.save(); // 데이터베이스에 등록
    ctx.body = post; // 저장한 결과 반환
  } catch (e) {
    ctx.throw(e, 500); // 데이터베이스 오류 발생
  }
};

/*
 * GET /api/posts
 */
exports.list = async ctx => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

/*
 * GET /api/posts/:id
 */
exports.read = async ctx => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.update = async ctx => {
  const { id } = ctx.params;
  try {
    const post = await Post.findOneAndUpdate(id, ctx.request.body, {
      //이 값을 설정해야만 업데이트 된 객체를 반환함.
      new: true
    }).exec();

    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(e, 500);
  }
};
