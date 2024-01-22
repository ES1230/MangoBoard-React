import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../css/GCDetail.css'

export default function GuideContentUpdate({allData}){

    const navigate = useNavigate();

    // 게시글번호에 맞는 내용 가져오기
    const {bno} = useParams();
    let {board,setBoard} = allData;
    
    let detailList = allData.board.find(function(list){
        return list.글번호 == bno;
    })


    // 입력되어있는 값 초기값으로 셋팅
    let[content,setContent] = useState(detailList);


    // 게시글 수정
    function contentUpdate(){

        let{ 글제목, 글내용, 이미지 } = content;

        if( !글제목 || !글내용 || !이미지 ){
             alert("비어있는 내용이 있습니다.\n모두 입력해주세요.");
             return;
        }

        // 현재 작성하는 글 번호와 같은 게시글 글번호 같은 경우 적혀있는 content 넣어주기
        const setBoardUpdate = board.map(function(list){
            
            if(list.글번호 == content.글번호) {return content;}
            return list;
        })

        // setboard 깊은복사
        setBoard([...setBoardUpdate]) ;

        navigate('/guideContent/detail/' + content.글번호);
    }

    function onInputHandler(e){
        let{name,value} = e.target;
        setContent({...content, [name] : value });
    }


    return(

        <div className='guideContentUpdate'>  

        <p id="uTitle"> 게시글 수정 </p>

        <div className='update-content-header'>
            <span>글제목 :</span>
            <input type='text' name='글제목' placeholder="제목을 입력하세요."
            onChange={ onInputHandler } value={content.글제목}/>
        </div>
        <div className='update-content-text'>
            <span>글내용 :</span>
            <input type='text' name='글내용' placeholder="내용을 입력하세요."
            onChange={ onInputHandler } value={content.글내용}/>
        </div> 
        <div className='update-content-img'>
            <span>이미지 :</span>
             <input type='text' name='이미지' placeholder="이미지의 링크를 입력하세요."
            onChange={ onInputHandler } value={content.이미지}/>
        </div>

        <br/>
        <div className="update-content-button">
            <button onClick={() => contentUpdate() }>수정</button>
        </div>

    </div>
    )



}

