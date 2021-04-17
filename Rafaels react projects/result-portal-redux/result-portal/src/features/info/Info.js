import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { selectedSeason, selectedProgramme, selectedYear, semesterCount} from './infoSlice'

function Info({showDouble}) {
    
    const info = useSelector(state => state.finalData.information);
    const dispatch = useDispatch()
    
    const change = (e) => {
        dispatch(semesterCount(e.target.value))
        showDouble()
    }
    

   return (
        <Container>
            <SelectorContainer>
                <ProgrammeContainer >
                    <h4>Programme</h4>
                    <select name="" id="programme" value={info.programme} onChange={(e) => dispatch(selectedProgramme(e.target.value))}>
                        <option value="Msc">Msc</option>
                        <option value="MPhil">MPhil</option>
                        <option value="PhD">PhD</option>
                    </select>
                </ProgrammeContainer>
                <SemesterContainer >
                    <h4>Semester</h4>
                    <select name="semesters" id="semester" onChange={change}>
                        <option value={info.semester}>
                            Previous & Current 
                        </option>
                        <option value="Current">
                            Current Semester
                        </option>
                    </select>
                </SemesterContainer>
                <SessionContainer id="">
                    <h4>Session</h4>
                    <select name="session" id="session" value={info.year} onChange={(e) => dispatch(selectedYear(e.target.value))}>
                        <option value="2021/2022">2021/2022</option>
                        <option value="2022/2023">2022/2023</option>
                        <option value="2023/2024">2023/2024</option>
                        <option value="2024/2025">2024/2025</option>
                        <option value="2025/2026">2025/2026</option>
                        <option value="2026/2027">2026/2027</option>
                        <option value="2027/2028">2027/2028</option>
                        <option value="2028/2029">2028/2029</option>
                        <option value="2029/2030">2029/2030</option>
                    </select>
                </SessionContainer>
                <SeasonContainer>
                    <h4>Season</h4>
                    <select name="season" id="season" value={info.season} onChange={(e) => dispatch(selectedSeason(e.target.value))} >
                        <option value="Harmattan">Harmattan</option>
                        <option value="Rain">Rain</option>
                    </select>
                </SeasonContainer>
            </SelectorContainer>
        </Container>
    )
}

export default Info

const Container = styled.div`
    height: 20vh;
    padding: 0 50px;

    h4 {
        color: #ffc800;
        font-size: 22px;
        margin-top: -5px;
        font-weight: bolder;
        text-shadow: 2px 2px 3px black;
    }
`
const SelectorContainer = styled.div`
    height: 10vh;
    width: 60%;
    max-width: 95%;
    margin: 60px auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const ProgrammeContainer = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // background: #ff3;
    


    select{
        border-radius: 4px;
        padding: 6px;
        background: white;
        cursor: pointer;
        font-size: 16px;

        :focus {
            outline: none;
        }
    }
`

const SemesterContainer = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // background: #ff3;



    select{
        border-radius: 4px;
        padding: 6px;
        background: white;
        cursor: pointer;
        font-size: 16px;

        :focus {
            outline: none;
        }
    }

`

const SessionContainer = styled.div`

    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // background: #ff3;



    select{
        border-radius: 4px;
        padding: 6px;
        background: white;
        cursor: pointer;
        font-size: 16px;

        :focus {
            outline: none;
        }
    }

`

const SeasonContainer = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // background: #ff3;



    select{
        border-radius: 4px;
        padding: 6px;
        background: white;
        cursor: pointer;
        font-size: 16px;

        :focus {
            outline: none;
        }
    }
`