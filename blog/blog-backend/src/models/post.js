const mongoose = require("mongoose");

const { Schema } = mongoose;

/*
    * mongoose 모듈의 Schema를 사용하여 정의
    * 각 필드 이름과 필드의 데이터 타입 정보가 들어 있는 객체
    * 이때, 기본값은 default로 설정
*/
const Post = new Schema({
    title: String,
    body: String,
    tags: [String], // 문자열 배열
    pulishedDate: {
        type: Date,
        default: new Date() // 현재 날짜를 디폴트로 지정
    }
})

module.exports = mongoose.model('Post', Post);

