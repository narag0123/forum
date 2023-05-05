import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function EditHandler(req, res) {
    const db = (await connectDB).db("forum");

    if (req.method == "POST") {
        const newBody = {
            title: req.body.title,
            content: req.body.content,
        };

        try {
            await db.collection("post").updateOne(
                { _id: new ObjectId(req.body._id) },
                {
                    $set: newBody,
                }
                // 증감 같은거 할때 쓰는거임. 덮어 쓰기 말고 수정
                // {$inc : }
            );

            res.status(200).json("처리완료");
            console.log(req.body);
        } catch (err) {
            console.log(err);
        }
    }
}
