import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { firstCourseList } from './firstSlice'

function First({ inpVal}) {
    const dispatch = useDispatch()
    
    return (
        <Container>
            <form className="courses">
                <div>
                    <h4>Course A</h4>
                    <input type="text" className="course_card" name="first__courseA" ref={inpVal}/>
                </div>
                <div>
                    <h4>Course B</h4>
                    <input type="text" className="course_card" name="first__courseB" ref={inpVal}/>
                </div>
                <div>
                    <h4>Course C</h4>
                    <input type="text" className="course_card" name="first__courseC" ref={inpVal}/>
                </div>
                <div>
                    <h4>Course D</h4>
                    <input type="text" className="course_card" name="first__courseD" ref={inpVal}/>
                </div>
                <div>
                    <h4>Course E</h4>
                    <input type="text" className="course_card" name="first__courseE" ref={inpVal}/>
                </div>
                <div>
                    <h4>Course F</h4>
                    <input type="text" className="course_card" name="first__courseF" ref={inpVal}/>
                </div>   
            </form>
        </Container>
    )
}

export default First

const Container = styled.div`
    height: 15vh;
    font-size: 20px;
    color: #ffc800;
    font-weight: bolder;
    text-shadow: 2px 2px 1px black;

    form {
        width: 80%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        input {
            height: 40px;
            margin-top: 10px;
            width: 150px;
            border-radius: 8px;
            border: 1px solid grey;
            padding-left: 10px;
            font-size: 20px;

            :focus {
                outline: none;
                transform: scale(1.01);
                border: 2px solid #EBBA54;
                box-shadow: 0px 3px 15px rgba(255,255,255,0.2);
            }
        }
    }

`
const Title = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Signika', sans-serif;
    letter-spacing: 2px;
`