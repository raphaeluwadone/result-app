import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { secondCourseList } from './secondSlice';

function Second({secInp}) {
    const dispatch = useDispatch()
    return (
        <Container>
            <form className="courses">
                <div>
                    <h4>Course A</h4>
                    <input type="text" className="course_card" name="sec__courseA" ref={secInp}/>
                </div>
                <div>
                    <h4>Course B</h4>
                    <input type="text" className="course_card" name="sec__courseB" ref={secInp}/>
                </div>
                <div>
                    <h4>Course C</h4>
                    <input type="text" className="course_card" name="sec__courseC" ref={secInp}/>
                </div>
                <div>
                    <h4>Course D</h4>
                    <input type="text" className="course_card" name="sec__courseD" ref={secInp}/>
                </div>
                <div>
                    <h4>Course E</h4>
                    <input type="text" className="course_card" name="sec__courseE" ref={secInp}/>
                </div>
                <div>
                    <h4>Course F</h4>
                    <input type="text" className="course_card" name="sec__courseF" ref={secInp}/>
                </div>   
            </form>
        </Container>
    )
}

export default Second

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
        flex-wrap: wrap;

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
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Signika', sans-serif;
    letter-spacing: 2px;
`