let postId = 1;

const posts = [
  {
    id: 1,
    title: "제목",
    body: "내용"
  },
  {
    id: 2,
    title: "제목",
    body: "내용"
  }
];

/*
    포스트 작성
    POST /api/posts
    {title, body}
 */
exports.write = ctx => {
  //REST API의  request body는 ctx.request.body에서 조회할 수 있다.
  const { title, body } = ctx.request.body;

  postId += 1;

  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

/*
    포스트 목록 조회
    GET /api/posts
 */
exports.list = ctx => {
  ctx.body = posts;
};

/*
    특정 포스트 조회
    GET /api/posts/:id
 */
exports.read = ctx => {
  const { id } = ctx.params;
  // 해당 ID의 post를 찾는다.
  const post = posts.find(p => p.id.toString() === id);

  if (!post) {
    ctx.status = 400;
    ctx.body = {
      message: "포스트가 존재하지 않아요!"
    };
    return;
  }

  ctx.body= post;

};

/*
    특정 포스트 삭제
    DELETE /api/posts/:id
 */
exports.remove = ctx => {
  const { id } = ctx.params;
  // 해당 ID의 index를 찾는다.
  const index = posts.findIndex(p => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 400;
    ctx.body = { message: "포스트가 존재하지 않아요!" };
    return;
  }
  //index의 아이템을 제거
  posts.splice(index, i);
  ctx.status = 204; // No Content
};

/*
    특정 포스트 수정
    PUT /api/posts/:id
    {title, body}
 */
exports.replace = ctx => {
  const { id } = ctx.params;
  const index = posts.findIndex(p => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 400;
    ctx.body = {
      message: "포스트가 존재하지 않습니다."
    };
    return;
  }

  //전체 객체를 덮어 씌움.
  //id를 제외한 기존 정보를 날리고, 객체를 새로 만듦.
  posts[index] = {
    id,
    ...ctx.request.body
  };

  ctx.body = posts[index];
};
/*
    특정 포스트의 필드만 수정
    PATCH /api/posts/:id
    {title, body}
 */
exports.update = ctx => {
  const { id } = ctx.params;
  const index = posts.findIndex(p => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 400;
    ctx.body = { message: "포스트가 존재하지 않습니다." };
    return;
  }

  //기존 값에 새로 받은 일부 값을 덮어 씌움
  posts[index] = {
    ...posts[index],
    ...ctx.request.body
  };

  ctx.body = posts[index];
};
