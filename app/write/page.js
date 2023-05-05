"use client";

export default function Write() {
    return (
        <div>
            <h4>글작성</h4>
            {/* POST 랑 GET 만 가능함 */}
            {/* URL 은 맘대로 하면된다 */}
            <form action="/api/post/new" method="POST">
                {/* title하고 content는 data key값임 */}
                <input name="title" placeholder="글제목" />
                <input
                    name="content"
                    placeholder="글내용"
                />

                <button type="submit">요청</button>
            </form>
        </div>
    );
}
