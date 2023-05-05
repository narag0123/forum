import { connectDB } from "@/app/util/database";

export default async function loginHandler(
    request,
    response
) {
    const db = (await connectDB).db("forum");
    let result = await db
        .collection("userInfo")
        .find()
        .toArray();

    // console.log(result, request.body);

    // 1. request.body.userId 랑 DB 에 있는 userId랑 맞는지 확인 && pw도 마찬가지
    // 2. 둘이 맞으면 실행 아니면 에러

    const bodyId = request.body.userId;
    const DBID = await db
        .collection("userInfo")
        .find({ userId: bodyId })
        .toArray();

    // console.log(bodyId, DBID.userId);

    if (bodyId == DBID[0]?.userId) {
        console.log(true);
        if (request.method == "POST") {
            try {
                return response
                    .status(200)
                    .json(request.body);
            } catch (error) {
                console.log(error);
            }
        }
    } else {
        if (request.method == "POST") {
            try {
                return response.status(500).redirect("/");
            } catch (error) {
                console.log(error);
            }
        }
        console.log(false);
    }
}
