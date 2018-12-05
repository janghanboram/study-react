const Post = require("models/post");
const Joi = require("joi");
const { ObjectId } = require("mongoose").Types;

// Id가 유효한지 확인하는 미들웨어
exports.checkObjectId = (ctx, next) => {
  const { id } = ctx.params;

  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // 400 Bad Request
    return null;
  }

  return next(); // next를 리턴해야 ctx.body가 제대로 설정됨.
};
/*
 * POST /api/posts
 * {title, body, tags}
 */
exports.write = async ctx => {
  //객채가 가진 값 검증
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array()
      .items(Joi.string())
      .required() //문자열 배열
  });

  // 검증할 객체와 스키마를 비교한 결과.
  const result = Joi.validate(ctx.request.body, schema);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
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
  //객채가 가진 값 검증
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array()
      .items(Joi.string())
  }).or('title', 'body', 'tags');

  // 검증할 객체와 스키마를 비교한 결과.
  const result = Joi.validate(ctx.request.body, schema);

  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
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
