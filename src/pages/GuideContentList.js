import { useState } from 'react';
import '../css/GuideContent.css';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Toggle from 'react-toggle';

export default function GuideContentList(props){

    let {board, setBoard} = props.allData;
    console.log(board);

    const navigate = useNavigate();

    //메뉴 토글, 초기값 false로 설정
    // const [isOpen, setisOpen] = useState(false); 
    // const toggleChage = () => {
    //     setisOpen(!isOpen); 
    // }

    function showHide(){


    }


    return(
        <>
            {/* 사이드바 */}
            <div className='sideToggle'>
                <ul>
                    <li className='sideTitle' onClick={()=>showHide()}><a>망고보드란?</a>
                        <ul>
                            <li><a>망고보드 용도/저작권</a></li>
                        </ul>
                    </li>
                    <li className='sideTitle'><a>템플릿 사용/사이즈 변경</a>
                        <ul>
                            <li><a>템플릿사용하기</a></li>
                            <li><a>사이즈변경</a></li>
                        </ul>
                    </li>
                    <li className='sideTitle'><a>이미지·템플릿 찾기</a>
                        <ul>
                            <li><a>상세검색/검색필터</a></li>
                            <li><a>비슷한 요소찾기</a></li>
                            <li><a>AI검색</a></li>
                        </ul>
                    </li>
                    <li className='sideTitle'><a>즐겨찾기</a>
                        <ul>
                            <li><a>즐겨찾기/그룹즐겨찾기</a></li>
                        </ul>
                    </li>
                    <li className='sideTitle'><a>작업저장/폴더관리/다운로드/공유</a>
                        <ul>
                            <li><a>결과물다운로드</a></li>
                            <li><a>템플릿공유</a></li>
                            <li><a>안드로이드 스마트폰에서 모바일페이지 확대·축소하는 방법</a></li>
                            <li><a>나의작업불러오기</a></li>
                            <li><a>저장</a></li>
                            <li><a>파워포인트다운로드</a></li>
                            <li><a>나의작업폴더생성/이동</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* <div>
                <img src="https://trend.mangoboard.net/news/wp-content/uploads/2022/10/trend_banner.png"/>
            </div> */}

            <div className='guideContent contentList' >

                <p id="cTitle"> 기본 사용법 및 콘텐츠 만들기 </p>
                {/* <Link to={'/guideContent/insert'}><button>게시글등록</button></Link> */}
                
                <button id="insert-button" onClick={()=>navigate('/guideContent/insert')}>글작성</button>

                <div className='content-outer'>
                    {
                        board != null && board.map(function(list, index){
                            const firstLine = list.글내용.split('.')[0];
                            return(
                                <div className='content-inner' 
                                onClick={()=> {navigate('/guideContent/detail/'+list.글번호);}}>
                                    <div className='content-img'>
                                        <img src={list.이미지} alt="이미지"></img>
                                    </div>
                                    <div>
                                        <p className='content-title'>{list.글제목}</p>
                                        <div className='content-author'>
                                            <span>작성자 : {list.작성자}</span>
                                            <span>작성일 : {list.작성일}</span>
                                        </div>
                                    </div>
                                    <div className='content-text'>
                                        {firstLine}
                                    </div>
                                </div> 
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
