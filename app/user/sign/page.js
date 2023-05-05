export default function Sign() {
    const formStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
    };

    return (
        <form
            style={formStyle}
            action="/api/post/sign"
            method="POST"
        >
            <h3>가입하기</h3>
            <input name="userId" placeholder="email입력" />
            <input name="userPW" placeholder="pw입력" />
            <button type="submit">가입하기</button>
        </form>
    );
}
