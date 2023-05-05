import { connectDB } from "@/app/util/database";

export default async function handler(request, response) {
    const db = (await connectDB).db("forum");
    let result = await db
        .collection("post")
        .find()
        .toArray();

    const date = new Date();

    // 응답 하지 않으면 무한 대기상태로 넘어감.
    // 이렇게 하면 무한대기 상태에서 빠져나올 수 있음.
    // status code
    // 200 : 처리 성공시
    // 500 : 처리 실패시
    // 400 : 유저 잘못으로 처리 실패시

    // GET 요청시에만 이거 실행하도록
    if (request.method == "POST") {
        console.log("POST SUCCESS!");
        // console.log(request.body);
        // response.status(200).json(request.body);
        // response.status(200).json(result);
        // response.status(200).json(date);
    }

    if (request.method == "GET") {
        console.log("GET SUCCESS!");
        response.status(200).json(request.body);
        // response.status(200).json(date);
    }

    // if (request.method == "POST") {
    //     console.log(request.body);
    // }
}
