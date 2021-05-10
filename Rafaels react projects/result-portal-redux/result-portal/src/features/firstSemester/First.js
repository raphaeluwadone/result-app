import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { firstCourseList } from './firstSlice'
import { courses } from '../../Courses'

function First({ inpVal, setFirstCourses, firstCourses}) {
    const dispatch = useDispatch()
    const courseValue = (e) => {
        setFirstCourses([...firstCourses, e.target.value])
        console.log(firstCourses);
    }
    return (
        <Container>
            <div className="courses">
                <div>
                    <h4>Course A</h4>
                    <select name="first" onChange={courseValue}>
                        <option value="">Code</option>
                        {courses.map(code => (
                            <option value={code}>{code}</option>
                        ))}
                    </select>

                </div>
                <div>
                    <h4>Course B</h4>
                    <select name="first" onChange={courseValue}>
                        <option value="">Code</option>
                        {courses.map(code => (
                            <option value={code}>{code}</option>
                        ))}
                    </select>

                </div>
                <div>
                    <h4>Course C</h4>
                    <select name="first" onChange={courseValue}>
                        <option value="">Code</option>
                        {courses.map(code => (
                            <option value={code}>{code}</option>
                        ))}
                    </select>

                </div>
                <div>
                    <h4>Course D</h4>
                    <select name="first" onChange={courseValue}>
                        <option value="">Code</option>
                        {courses.map(code => (
                            <option value={code}>{code}</option>
                        ))}
                    </select>

                </div>
                <div>
                    <h4>Course E</h4>
                    <select name="first" onChange={courseValue}>
                        <option value="">Code</option>
                        {courses.map(code => (
                            <option value={code}>{code}</option>
                        ))}
                    </select>

                </div>
                <div>
                    <h4>Course F</h4>
                    <select name="first" onChange={courseValue}>
                        <option value="">Code</option>
                        {courses.map(code => (
                            <option value={code}>{code}</option>
                        ))}
                    </select>

                </div>   
            </div>
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

    @media screen and (max-width: 768px) {
        height: 30vh;
    }

    @media screen and (max-width: 468px) {
        height: 20vh;
    }

    @media screen and (max-width: 375px) {
        height: 180px;
        margin: 50px 0;
        font-size: 18px;
    }

    .courses {
        width: 80%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        select {
            height: 40px;
            margin-top: 10px;
            width: 150px;
            border-radius: 8px;
            border: 1px solid grey;
            padding-left: 10px;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;

            :focus {
                outline: none;
                transform: scale(1.01);
                border: 2px solid #EBBA54;
                box-shadow: 0px 3px 15px rgba(255,255,255,0.2);
            }

            @media screen and (max-width: 768px) {
                width: 90px;
                height: 30px;
                font-size: 12px;
            }

            @media screen and (max-width: 375px) {
                margin-top: 5px;
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