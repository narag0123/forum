import { connectDB } from "@/app/util/database";

export default async function signInHandelr(
    request,
    response
) {
    const db = (await connectDB).db("forum");

    if (request.method == "POST") {
        await db
            .collection("userInfo")
            .insertOne(request.body);
        return response
            .status(200)
            .redirect("/user/userList");
    }
}
