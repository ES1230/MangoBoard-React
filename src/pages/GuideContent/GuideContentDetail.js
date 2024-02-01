import '../../css/GCDetail.css';
import { useNavigate, useParams } from "react-router-dom"
import { Link } from 'react-router-dom';

export default function GuideContentDetail({allData}){

    const navigate = useNavigate();


    let {board,setBoard} = allData;

    //게시글번호에 맞는 내용 가져오기
    const {bno} = useParams();

    let detailList = allData.board.find(function(list){
         return list.글번호 == bno;
    })

    //게시글 삭제
    const deleteList = (deleteBoardNo) => {

        let confirmDelete  = window.confirm("삭제하시겠습니까?");

        if(confirmDelete){
        
            //삭제할 게시글 제외한 모든 board반환 후 게시글 변경해주기
            let deleteBoard = board.filter(function(list){
                return list.글번호 !== deleteBoardNo;
            });

            setBoard(deleteBoard);

            alert('글이 삭제되었습니다.');
            navigate('/guideContent/list');
        }
    }


    return(
        <div className='guideContentDetail'>  

            <div className='detail-content-header'>
                <p id="detail-title">{detailList.글제목}</p>
                <span>작성일 : {detailList.작성일}</span>
                <span>작성자 : {detailList.작성자}</span>
                <div className='detail-content-button'>
                    <Link to={'/guideContent/update/'+detailList.글번호}><button> 수정</button></Link>
                    <button onClick={(e)=>{deleteList(detailList.글번호)}}>삭제</button>
                </div>
            </div>
            <hr/>
            <div className='detail-content-img'>
                <img src={detailList.이미지}/>
            </div> 
            <div className='detail-content-text'>
                <p> {detailList.글내용} </p>
            </div>

            <h3 class="backList"><Link to={'/guideContent/list'}> ← 목록으로 돌아가기 </Link></h3>

        </div>

    )



}