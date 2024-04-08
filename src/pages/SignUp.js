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
                <ul class="sns-box-ul">
                    <li><a href="#"><img src="https://www.mangoboard.net/images/ico_sns02.jpg" alt="구글"/></a></li>
                    <li><a href="#"><img src="https://www.mangoboard.net/images/ico_sns03.jpg" alt="네이버"/></a></li>
                    <li><a href="#"><img src="https://www.mangoboard.net/images/ico_sns04.jpg" alt="카카오톡"/></a></li> 
                </ul>
		    </div>
        </div>

    )



}