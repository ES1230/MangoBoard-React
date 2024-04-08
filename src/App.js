import { useDispatch, useSelector } from 'react-redux';
import './css/App.css';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import GuideContentList from './pages/GuideContent/GuideContentList';
import GuideContentDetail from './pages/GuideContent/GuideContentDetail';
import GuideContentInsert from './pages/GuideContent/GuideContentInsert';
import GuideContentUpdate from './pages/GuideContent/GuideContentUpdate';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import { userLogout } from './store';
import PageNavigation from './components/PageNavigation';
import Footer from './components/Footer';
import './css/Login.css'
import CopyRight from './pages/CopyRight';

export let Context = createContext(); //state저장소


function App() {

  let user = useSelector( ({user}) => {return user});
  const dispatch = useDispatch(); //store로 넘겨줄 때 이용

  let [board, setBoard] = useState([]);  //초기데이터
  let allData = {board,setBoard} // 전달해줄 데이터
  
  useEffect(function(){
    axios.get( "/data/data.json")
    .then(
      function(result){
        setBoard(result.data);
      }
    ).catch((error)=> console.log(error.response))
  },[]);

  // 로그아웃
  const handleLogout = () =>{
    const confirmLogout = window.confirm('로그아웃 하시겠습니까?');
    if(confirmLogout){
      dispatch(userLogout());
    }
  }

  return (
    <div className="App">

      {/* header */}
      <header className="header">
        <div className='header-menu'>
          <ul>
            <li id='header-menu-first'>
              <a href='/'>망고보드</a>
            </li>
            <li id='header-menu-second'>
              <a href='/'>망고툰</a>
              <img src="https://www.mangoboard.net/images/main/top/top_beta2.png"></img>
            </li>
          </ul>

        </div>
        <div className='header-inner'>
          <a href="/"><img src="/mangoboard.png"/></a> 
            <nav>
              <ul className="gnb">
                  <li>템플릿</li>
                  <li>요금제/결제</li>
                  <Link to={'/guideContent/list'}><li>사용가이드</li></Link>
                  <li>캐릭터</li>
                  <li>트렌드 따라잡기</li>
              </ul>
            </nav>
            <div className="right">
              { !user ? (
                <ul>
                  <Link to={'/login'}><li>로그인</li></Link>
                  <Link to={'/singUp'}><li>회원가입</li></Link>
                  <Link to={'/copyRight'}><li>저작권 규정</li></Link>
                </ul>
                ):
                <ul>
                  <li><strong>{user.email} 님 </strong></li>
                  <li onClick={ () => handleLogout()}> 로그아웃 </li>
                  <li> 나의작업 </li>
                </ul>
              }
            </div>
        </div>
      </header>

      <main className='main'>
        {/* <PageNavigation/>  */}
        <Routes>
          <Route path='/'element={<MainPage/> }/>
          <Route path='/main' element={<MainPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/singUp' element={<SignUp/>}/>
          <Route path='/guideContent' >
            <Route path='list' element={<GuideContentList allData={allData}/>}/>
            <Route path='detail/:bno' element={<GuideContentDetail allData={allData}/>}/>
            <Route path='insert' element={<GuideContentInsert allData={allData}/>}/>
            <Route path='update/:bno' element={<GuideContentUpdate allData={allData}/>}/>
          </Route>
          <Route path='/copyRight' element={<CopyRight/>}/>
          <Route path='*' element={
            <div className='errorPage'>
              <h1>  존재하지 않는 페이지입니다. </h1>
              <Link to='/'> 사이트로 돌아가기 </Link>
            </div>
          }/>
        </Routes>
        
        <Footer/>

      </main>

     
    

    </div>
  );

}

export default App;
