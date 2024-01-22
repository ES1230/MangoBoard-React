import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/GCDetail.css'

export default function GuideContentInsert({allData}){

    let {board,setBoard} = allData;
    const navigate = useNavigate();

    //입력값 초기 셋팅
    let[content,setContent] = useState( {글제목 : "", 글내용 : "", 이미지 : "https://www.namdokorea.com/site/jeonnam/tour/images/noimage.gif"});

    // 게시글 등록
    const contentInsert = () => {

        let {글제목, 글내용, 이미지} = content;

        if( !글제목 || !글내용 || !이미지 ){
            alert("비어있는 내용이 있습니다.\n모두 입력해주세요.");
            return;
       }

       let boardList = {
            글번호 : Math.max( ...board.map(function(list,index){ return list.글번호}) ) + 1,
            ...content,
            작성자 : "mango",
            작성일: new Date().toLocaleDateString()
       }

       setBoard([...board,boardList]);

       navigate('/guideContent/list');
    }

    function onInputHandler(e){
        let {name,value} = e.target;
        setContent({...content, [name]:value});
    }



    return(

        <div className='guideContentUpdate'> 

            {/* <input type='text' name='글제목' placeholder="제목을 입력하세요."
            onChange={ function(e){ setContent({...content, 글제목:e.target.value});}} 
            value={content.글제목}/>
            <input type='text' name='글내용' placeholder="내용을 입력하세요."
            onChange={ function(e){ setContent({...content, 글내용:e.target.value});}} 
            value={content.글내용}/>
            <input type='text' name='이미지' placeholder="이미지의 링크를 입력하세요."
            onChange={ function(e){ setContent({...content, 이미지:e.target.value});}} 
            value={content.이미지}/> */}

       
            {/* <button onClick={() => contentInsert() }>등록</button> */}

            <p id="uTitle"> 게시글 등록 </p>

            <div className='update-content-header'>
                <span>글제목 :</span>
                <input type='text' name='글제목' placeholder="제목을 입력하세요."
            onChange={ function(e){ setContent({...content, 글제목:e.target.value});}} 
            value={content.글제목}/>
            </div>
            <div className='update-content-text'>
                <span>글내용 :</span>
                <input type='text' name='글내용' placeholder="내용을 입력하세요."
            onChange={ function(e){ setContent({...content, 글내용:e.target.value});}} 
            value={content.글내용}/>
            </div> 
            <div className='update-content-img'>
                <span>이미지 :</span>
                <input type='text' name='이미지' placeholder="이미지의 링크를 입력하세요."
            onChange={ function(e){ setContent({...content, 이미지:e.target.value});}} 
            value={content.이미지}/>
            </div>

            <br/>
            <div className="update-content-button">
                <button onClick={() => contentInsert() }>등록</button>
            </div>
















        </div>

    )



}


