export default function Login() {
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
            action="/api/post/login"
            method="POST"
        >
            <h3>로그인</h3>
            <input name="userId" placeholder="email입력" />
            <input name="userPW" placeholder="pw입력" />
            <button type="submit">로그인</button>
        </form>
    );
}
