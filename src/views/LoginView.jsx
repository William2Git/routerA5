import "./LoginView.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router";
import { useState } from 'react';


function LoginView() {
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");
    const navigate = useNavigate();

    function login() {
        if (pass == "iloveyou") {
            return navigate("/movies");
        }
        return alert("Incorrect password, please try again");
    }

    return (
        <div>
            <Header />
            <div id="contents">
                <h2>Login</h2>
                <br></br>
                <label>Email:</label>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <label>Password:</label>
                <input type="password" value={pass} onChange={(event => setPass(event.target.value))}></input>
                <button id="enter" style={{ cursor: 'pointer' }} onClick={() => login()}>Login</button>
            </div>
            <Footer/>
        </div>

    );
}

export default LoginView;