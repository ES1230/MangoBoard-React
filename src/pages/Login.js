import { useState } from "react"
import { userLogin } from "../store"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

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

    let [showAlert, setShowAlert] = useState(false);

    // 로그인
    function loginFunction(){
        
        const {email,password} = userInfo;

        // 모두 입력시 로그인가능
        if(email || password ){
            dispatch(userLogin(userInfo)) ;
            navigate('/');
        }else{ //이메일,패스워드 입력되어 있지 않으면 알람표시
            setShowAlert(true); 
        }
    }

    return(
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
                    
                    {showAlert && <span className="login-alert">! 이메일과 비밀번호를 모두 입력해주세요. </span> }
                    
                    <div class="login-sub flex">
                        <span class="id-save">
                            <input type="checkbox" id="save"/>
                            <label for="save"><span></span>아이디 저장</label>
                        </span>
                        <span>
                            <Link to={'/singUp'}>회원가입</Link>
                            <a href="#">비밀번호 찾기</a>
                        </span>
                    </div>

                    <button id="loginButton" onClick={()=> { loginFunction() }} >로그인 </button>

                </div>
            </div>
    )

}