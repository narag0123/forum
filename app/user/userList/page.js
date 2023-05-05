import { connectDB } from "@/app/util/database";

export default async function UserList() {
    const db = (await connectDB).db("forum");
    let result = await db
        .collection("userInfo")
        .find()
        .toArray();

    return (
        <div>
            {result.map((e) => (
                <div
                    key={e._id}
                    style={{
                        border: "1px solid black",
                        borderRadius: "10px",
                        padding: "10px 20px",
                        marginBottom: "10px",
                    }}
                >
                    <div>{JSON.stringify(e._id)}</div>
                    <div>{`id:${e.userId}`}</div>
                    <div>{`pw:${e.userPW}`}</div>
                </div>
            ))}
        </div>
    );
}
