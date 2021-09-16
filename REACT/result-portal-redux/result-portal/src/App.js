import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import First from './features/firstSemester/First';
import Second from './features/secondSemester/Second';
import Info from './features/info/Info'
import Scores from './features/scores/Scores'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { firstCourseList } from './features/firstSemester/firstSlice'
import { secondCourseList } from './features/secondSemester/secondSlice'



import './App.css';

function App() {
  

  const inputValue = useRef([])
  const secInputValue = useRef([])
  const [double, setDouble] = useState(true) 
  const [firstCourses, setFirstCourses] = useState({})
  const [secondCourses, setSecondCourses] = useState({})
  const dispatch = useDispatch()
  
  const inpVal = (el) => {
    if (el && !inputValue.current.includes(el)) {
      inputValue.current.push(el)
  }
  
  }

  const secInp = (el) => {
    if (el && !secInputValue.current.includes(el)) {
      secInputValue.current.push(el)
    }
  
  }

  const process = () => {
    const newSecList = []
    const newFirstList = []

    if(secondCourses){
      for(const key in secondCourses){
        newSecList.push(secondCourses[key])
      }
    }

    if(firstCourses){
      for(const key in firstCourses){
        newFirstList.push(firstCourses[key])
      }
    }

    dispatch(firstCourseList(newFirstList))
    dispatch(secondCourseList(newSecList))
    // console.log(courseList);
  }

  const showDouble = () => {
    setDouble(!double)
  }
  
  return (
    <Router>
      <Switch>
        <Container className='home'>
          <Route path='/' exact>
            <Info showDouble={showDouble}/>
            <First inpVal={inpVal} firstCourses={firstCourses} setFirstCourses={setFirstCourses}/>
            { double && <Second secInp={secInp} secCourses={secondCourses} setSecCourses={setSecondCourses}/> }
            <ButtonContainer>
            <Btn onClick={process}>
              <Link to={'/scores'} style={{textDecoration: 'none'}}>
                <p>Process</p>
              </Link>
            </Btn>
          </ButtonContainer>
          </Route>
          <Route path='/scores' exact component={Scores}/>
        </Container>
      </Switch>
    </Router>
  )

}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-image: url("https://res.cloudinary.com/rafael-uwadone/image/upload/v1621454999/intellisystem/Frame2_mxlnw1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  padding: 30px;
  // margin: 80px auto;
  // padding: 50px;
  box-sizing: border-box;
`

const Btn = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 6px;
  cursor: pointer;
  border: 1px solid #2589bd;
  background: #2589bd;
  // margin-top: -80px;
  // background: #28145C;

  :focus{
    outline: 0;
  }

  :active {
    transform: scale(.98)
  }

  p {
    color: white;
    font-weight: bolder;
    padding: 12px;
  }
`

const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`