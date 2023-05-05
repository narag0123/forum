// 어쩌구에 아무거나 입력해도 page.js 를 보여줘라 라는 뜻임
// detail/123 입력해도 이 페이지 보여줌 : dynamic router

import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
    const db = (await connectDB).db("forum");

    let result = await db
        .collection("post")
        // -id로 찾아오기
        .findOne({
            _id: new ObjectId(props.params.id),
        });

    return (
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    );
}
