export default function SignUp(){

    return( 

        <div className="signUp">
            <h2 className="tit"> 회원가입 </h2>
            <div className="signup-text">
                <p><strong>이메일로 망고보드 회원가입하기</strong></p>
                <p>회원가입 후 SNS계정과 연동 가능</p>
            </div>

            <button id="signUpButton">회원가입 </button>

            <div class="sns-box">
		            <strong>SNS 계정 간편 회원가입</strong>
		            <ul>
		                {/* <li><a href="javascript:fb()"><img src="../images/ico_sns01.jpg" alt=""/></a></li>
		                <li><a href="javascript:gg()"><img id="google-logo" src="../images/ico_sns02.jpg" alt=""></a></li>
		                <li><a href="javascript:nv()"><img src="../images/ico_sns03.jpg" alt=""></a></li>
		                <li><a href="javascript:ka()"><img src="../images/ico_sns04.jpg" alt=""></a></li> */}
		            </ul>
		        </div>
        </div>


    )



}