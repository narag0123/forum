import { connectDB } from "@/app/util/database";
import { ObjectId } from "mongodb";

export default async function del(req, res) {
    if (req.method == "DELETE") {
        try {
            const db = (await connectDB).db("forum");

            const result = await db
                .collection("post")
                .deleteOne({
                    _id: new ObjectId(req.body),
                });

            // console.log(req.body);
            res.status(200).json("처리완료");
        } catch (error) {
            res.status(500).json("에러뜸");
            console.log(error);
        }
    }
}
