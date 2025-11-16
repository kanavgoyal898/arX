import "./page.css";

export default function Login() {
    return (
        <div className="credentials-container">
            <form action="/course" className="form-container">
                <div className="input-container">
                    <input type="email" className="input-field" placeholder="Email" />
                </div>
                <div className="input-container">
                    <input type="password" className="input-field" placeholder="Password" />
                </div>
                <div>
                    <a href="https://youtu.be/dQw4w9WgXcQ?si=kgNUU92jtrYyrqdw" className="password-link">Forgot Password?</a>
                </div>
                <div className="submit-container">
                    <button className="button-filled" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}