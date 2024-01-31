import '../css/Main.css';

export default function MainPage(){

    return(
        <>
        <div id="kv" className="kv">
                    <div className="text">
                    <span>프리미엄 디자인·동영상 플랫폼, 망고보드</span>
                    <strong>누구나<br/> 디자이너가 된다</strong>
                    <a href="/">무료 체험하기</a>
                </div> 
                <div className="characterImg">
                    <img id="mesCha" src="https://www.mangoboard.net/images/img_kv-mes.png"/>
                    <img id="robotCha" src="https://www.mangoboard.net/images/img_kv-ai-robot.png"/>
                    <img id="mangoCha" src="https://www.mangoboard.net/images/img_kv-dmango.png"/>
                    <img id="thumbCha" src="https://www.mangoboard.net/images/img_kv-like.png"></img>
                </div>
        </div>
        <div id='cont-template'>
            <h2 class="cont-tit">막막한 디자인? <br/>
            <strong>고퀄리티 템플릿이 있잖아</strong></h2>
            <p class="desc">매주 추가되는 템플릿으로 쉽고 빠르게 디자인하세요.</p>
        </div>
        <div id='slide-img'>
            <h2 class="cont-tit"><strong>저작권 걱정없는</strong> 망고보드만의 캐릭터들</h2>
            <p class="desc">3D 캐릭터와 아이콘, 사진, 영상소스, 폰트까지 </p>
            <img src="https://www.mangoboard.net/images/img_main-character02.jpg"/>
        </div>
        </>
    )


}