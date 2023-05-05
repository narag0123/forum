import { connectDB } from "@/app/util/database";

export default async function handler(req, res) {
    const db = (await connectDB).db("forum");

    if (req.method == "POST") {
        // req.body가 input에서 넘어온거임
        // console.log(req.body.title);
        if (req.body.title == "") {
            console.log("title 똑바로 쓰쇼");
            return res.status(500).redirect("/list");
        }

        try {
            // MongoDB CREATE 방법임. id는 자동생성된다
            await db.collection("post").insertOne(req.body);

            // 응답 종료와 동시에 다른 페이지로 이동시키는거
            return res.status(200).redirect("/list");
            // res.status(200).json("완료됨");
        } catch (error) {
            alert("error");
        }
    }
}
