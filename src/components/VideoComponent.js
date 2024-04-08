import {useState} from "react";

const VideoComponent = () =>{

    // 재생할 비디오
    const videos = [
        { id:1, src : "https://mov.mangoboard.net/main/video_main01.mp4"},
        { id:2, src : "https://mov.mangoboard.net/main/video_main02.mp4"},
        { id:3, src : "https://mov.mangoboard.net/main/video_main03.mp4"},
        { id:4, src : "https://mov.mangoboard.net/main/video_main04.mp4"},
        { id:5, src : "https://mov.mangoboard.net/main/video_main05.mp4"},
    ]

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handlePrev = () => {
        setCurrentVideoIndex( (prevIndex) => (prevIndex -1 + videos.length) % videos.length );
    }

    const handleNext = () => {
        setCurrentVideoIndex( (prevIndex) => (prevIndex +1) % videos.length ) ;
    }

    return(
        <div id='cont-video'>
            <h2 className="cont-tit"><strong>동영상 템플릿</strong>으로 프로 수준의 <strong>영상 제작</strong></h2>
            <p className="desc">
                <span>1. 차이를 낳는 애니메이션 효과</span>
                <span>2. 문자→음성으로 변환</span>
                <span>3. 다양한 동영상 템플릿</span>
            </p>
            <div className="video-button-area"> 
                <button onClick={ handlePrev } > ＜ </button>
                    <video autoPlay muted loop playsInline preload="metadata" width="100%" height="100%" type="video/mp4"
                    data-src={videos[currentVideoIndex].src}  src={videos[currentVideoIndex].src}>
                    </video>
                <button onClick={ handleNext } > ＞ </button>
            </div>
        </div>
    )

}


export default VideoComponent;

     
  