import { useState } from "react"
import { userLogin } from "../store"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login(){

    let [ userInfo, setUserInfo ] = useState({
        email : "",
        password : ""
    })


    let userInfoHandler = (e) => {
        setUserInfo({ ...userInfo, [e.target.name] : e.target.value});
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function loginFunction(){

        dispatch(userLogin(userInfo)) ;

        navigate('/');
    }

    return(
        <>
            <div className="login">
                <h2> 로그인 </h2>
                <div className="login-box">
                    <span className="input">
                        <input id="email" name="email" type="text" placeholder="이메일을 입력하세요."
                                onChange={ userInfoHandler }
                                value={userInfo.email} />
                    </span>
                    <span className="input">
                        <input id="pass" name="password" type="password" placeholder="비밀번호를 입력하세요."
                                onChange={ userInfoHandler }
                                value = {userInfo.password} />
                    </span>
                    <button id="loginButton" onClick={()=> {   loginFunction() }} >로그인 </button>
                </div>
            </div>
        </>

    )

}