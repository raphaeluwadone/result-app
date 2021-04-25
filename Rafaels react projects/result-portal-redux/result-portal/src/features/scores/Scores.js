import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { inputedData } from "./scoresSlice";
// import img from "../../assets/Frame1.png";
import "./Scores.css";
import Fetch from "../../Fetch";
import { ClapSpinner } from "react-spinners-kit";
import { secondCourseList } from "../secondSemester/secondSlice";
import { firstCourseList } from "../firstSemester/firstSlice";
import { AiOutlineArrowLeft } from 'react-icons/ai';


function Scores() {
  const firstList = useSelector(
    (state) => state.firstSemester.firstSemesterCourses
  );
  const secondList = useSelector(
    (state) => state.secondSemester.secondSemesterCourses
  );
  const info = useSelector((state) => state.finalData.information);
  const dispatch = useDispatch();
  const selector = useRef([]);
  const secSelector = useRef([]);
  // const identity = useSelector(state => state.info.identity)

  let firstCourses = firstList
    ? firstList.filter((first) => first.length > 0)
    : [];
  let secondCourses = secondList
    ? secondList.filter((sec) => sec.length > 0)
    : [];

  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [warningAlert, setWarningAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [firstObj, setFirstObj] = useState({});
  const [secObj, setSecObj] = useState({});
  const [loading, setLoading] = useState(false)
  const [pdfLink, setPdfLink] = useState("");
  const [postProcess, setPostProcess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const data = useSelector(state => state.score.finalInfo)

  const history = useHistory()
  

  const refReveal = (el) => {
    if (el && !selector.current.includes(el)) {
      selector.current.push(el);
    }
  };

  const secRefReveal = (el) => {
    if (el && !secSelector.current.includes(el)) {
      secSelector.current.push(el);
    }
  };

  const handleSecDropdown = (e) => {
    let { name, value } = e.target;
    setSecObj({ ...secObj, [name]: value });
    console.log(secObj);
  };

  const handleFirstDropdown = (e) => {
    let { name, value } = e.target;
    setFirstObj({ ...firstObj, [name]: value });
    console.log(firstObj);
  };

  const addStudent = () => {
    if (name && num) {
      const firstValues = selector.current.map((val) => {
        return val.value;
      });
      const secValues = secSelector.current.map((val) => {
        return val.value;
      });
      console.log(firstObj);
      console.log(secObj);
      // handleFirstDropdown()
      // handleSecDropdown()
      dispatch(
        inputedData({
          id: { name, reg: num },
          courseFirst: firstObj ,
          courseSec: secObj
        })
      );
      setName("");
      setNum("");
      selector.current.forEach((val) => {
        val.value = "";
      });
      secSelector.current.forEach((val) => {
        val.value = "";
      });
      setSuccessAlert(true);
      setSecObj({});
      setFirstObj({});
    } else setWarningAlert(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setWarningAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [warningAlert]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [successAlert]);

  const process = async () => { 
    setLoading(true)
    const finalBody = {
      info,
      data
    }
    console.log(JSON.stringify(finalBody));
    
      try {
        const finale = await Fetch("https://intellibytes.herokuapp.com/result", "post", finalBody, false, true)
        setPdfLink(finale.response)
        // console.log(finale.response);
        setPostProcess(true)
        setLoading(false)
      } catch (error) {
        setPostProcess(true)
        // setErrorMessage(error.message)
        console.log(error.message);
        setLoading(false)
      }
    };

    const reRoute = () => {
      setFirstObj({})
      setSecObj({})
      dispatch(firstCourseList([]))
      dispatch(secondCourseList([]))
      window.open(pdfLink, '_blank')
      window.location = "/"
    }
    const errorReRoute = () => {
      setFirstObj({})
      setSecObj({})
      dispatch(firstCourseList([]))
      dispatch(secondCourseList([]))
      window.location = "/"
    }
  
    useEffect(() => {
      const ProcessTimer = setTimeout(() => {
        setPostProcess(false);
        setErrorMessage('')
        // history.push("/")
      }, 4000);
      return () => {
        clearTimeout(ProcessTimer);
      };
      
    }, [errorMessage])

  return (
    <Container className="scores">
      {warningAlert && (
        <AlertWarningContainer>
          <p>Name & Reg Number Must Be Filled</p>
        </AlertWarningContainer>
      )}
      {successAlert && (
        <AlertSuccessContainer>
          <p>Courses Added Successfully</p>
        </AlertSuccessContainer>
      )}
      <InputContainer>
        <form>
          <RegContainer>
            <label htmlFor="reg">Reg No</label>
            <input
              type="text"
              name="reg"
              className="reg"
              placeholder="Reg Number..."
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </RegContainer>
          <NameContainer>
            <label htmlFor="name">Fullname</label>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Fullname..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </NameContainer>
        </form>
      </InputContainer>
      <InfoContainer>
        <p>{info.programme}</p>
        <p>{info.year}</p>
        <p>{info.season}</p>
      </InfoContainer>
      <FirstSemesterCourses>
        <form onClick={handleFirstDropdown}>
          {firstCourses.map((course) => {
            return (
              <SingleCourse>
                <div>
                  <label>{course}</label>
                  <select
                    className="prev_scores"
                    name={course}
                    ref={refReveal}
                    
                  >
                    <option value="">Select Score</option>
                    <option value="">-</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                    <option value="60">60</option>
                    <option value="61">61</option>
                    <option value="62">62</option>
                    <option value="63">63</option>
                    <option value="64">64</option>
                    <option value="65">65</option>
                    <option value="66">66</option>
                    <option value="67">67</option>
                    <option value="68">68</option>
                    <option value="69">69</option>
                    <option value="70">70</option>
                    <option value="71">71</option>
                    <option value="72">72</option>
                    <option value="73">73</option>
                    <option value="74">74</option>
                    <option value="75">75</option>
                    <option value="76">76</option>
                    <option value="77">77</option>
                    <option value="78">78</option>
                    <option value="79">79</option>
                    <option value="80">80</option>
                    <option value="81">81</option>
                    <option value="82">82</option>
                    <option value="83">83</option>
                    <option value="84">84</option>
                    <option value="85">85</option>
                    <option value="86">86</option>
                    <option value="87">87</option>
                    <option value="88">88</option>
                    <option value="89">89</option>
                    <option value="90">90</option>
                    <option value="91">91</option>
                    <option value="92">92</option>
                    <option value="93">93</option>
                    <option value="94">94</option>
                    <option value="95">95</option>
                    <option value="96">96</option>
                    <option value="97">97</option>
                    <option value="98">98</option>
                    <option value="99">99</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </SingleCourse>
            );
          })}
        </form>
      </FirstSemesterCourses>
      <SecondSemesterCourses>
        <form onClick={handleSecDropdown}>
          {secondCourses.map((course) => {
            return (
              <SingleCourse>
                <div>
                  <label>{course}</label>
                  <select
                    className="prev_scores"
                    ref={secRefReveal}
                    name={course}
                  >
                    <option value="">Select Score</option>
                    <option value="">-</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                    <option value="60">60</option>
                    <option value="61">61</option>
                    <option value="62">62</option>
                    <option value="63">63</option>
                    <option value="64">64</option>
                    <option value="65">65</option>
                    <option value="66">66</option>
                    <option value="67">67</option>
                    <option value="68">68</option>
                    <option value="69">69</option>
                    <option value="70">70</option>
                    <option value="71">71</option>
                    <option value="72">72</option>
                    <option value="73">73</option>
                    <option value="74">74</option>
                    <option value="75">75</option>
                    <option value="76">76</option>
                    <option value="77">77</option>
                    <option value="78">78</option>
                    <option value="79">79</option>
                    <option value="80">80</option>
                    <option value="81">81</option>
                    <option value="82">82</option>
                    <option value="83">83</option>
                    <option value="84">84</option>
                    <option value="85">85</option>
                    <option value="86">86</option>
                    <option value="87">87</option>
                    <option value="88">88</option>
                    <option value="89">89</option>
                    <option value="90">90</option>
                    <option value="91">91</option>
                    <option value="92">92</option>
                    <option value="93">93</option>
                    <option value="94">94</option>
                    <option value="95">95</option>
                    <option value="96">96</option>
                    <option value="97">97</option>
                    <option value="98">98</option>
                    <option value="99">99</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </SingleCourse>
            );
          })}
        </form>
      </SecondSemesterCourses>
      {
        !postProcess ?
        <ButtonContainer>
          <AddButton onClick={addStudent} >Add Student</AddButton>
          <ProcessButton onClick={process}>{loading ?  <ClapSpinner size={20} color="#fff" loading={loading} />: "Process"}</ProcessButton>
        </ButtonContainer> :
        <ResultPane>
          {pdfLink ? <span href='' onClick={reRoute}>PDF IS READY!</span> : <span style={{background: '#ed4f32'}} onClick={()=> {
            errorReRoute()
          }}> <AiOutlineArrowLeft style={{marginRight: '5px'}}/>Error, click to go back</span>}
        </ResultPane>
      }
    </Container>
  );
}

export default Scores;

const Container = styled.div`
  background-image: url('https://res.cloudinary.com/rafael-uwadone/image/upload/v1619192172/intellisystem/Frame1_gu6jao.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
const InputContainer = styled.div`
  width: 60%;
  margin: 50px auto;
  height: 15%;
  display: flex;
  align-items: center;
  font-size: 30px;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const RegContainer = styled.div`
  width: 30%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .reg {
    box-sizing: border-box;
    height: 60%;
    padding: 0 20px;
    width: 95%;
    border: 1px solid grey;
    border-radius: 10px;
    font-size: 20px;
    background: #f1f3f4;

    ::placeholder {
      font-size: 18px;
      font-weight: bolder;
      font-style: italic;
      color: rgba(155, 155, 155, 0.8);
    }

    :focus {
      outline: none;
      border: 2px solid #73eb5c;
      border: 2px solid #ebba54;
    }
  }

  label {
    color: #ffc800;
    font-size: 22px;
    margin-top: -5px;
    font-weight: bolder;
    text-shadow: 2px 2px 3px black;
  }
`;

const NameContainer = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .name {
    box-sizing: border-box;
    height: 60%;
    padding: 0 20px;
    width: 95%;
    border: 1px solid grey;
    border-radius: 10px;
    font-size: 20px;
    background: #f1f3f4;

    ::placeholder {
      font-size: 18px;
      font-weight: bolder;
      font-style: italic;
      color: rgba(155, 155, 155, 0.8);
    }

    :focus {
      outline: none;
      border: 2px solid #ebba54;
    }
  }

  label {
    color: #ffc800;
    font-size: 22px;
    margin-top: -5px;
    text-shadow: 2px 2px 3px black;
    font-weight: bolder;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  height: 30px;
  width: 30%;
  margin: 0 auto;
  background: white;
  justify-content: space-evenly;
  align-items: center;
  font-style: italic;
  margin-bottom: 30px;
  font-size: 20px;
  color: #28135c;

  @media screen and (max-width: 768px) {
    font-size: 16px
  }

  @media screen and (max-width: 468px) {
    font-size: 10px
  }
`;

const FirstSemesterCourses = styled.div`
  form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  
    label {
      color: #ffc800;
      font-size: 22px;
      margin-top: -5px;
      font-weight: bolder;
      text-shadow: 2px 2px 1px black;
    }
  }
`;

const SecondSemesterCourses = styled.div`
  form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
  
    label {
      color: #ffc800;
      font-size: 22px;
      margin-top: -5px;
      font-weight: bolder;
      text-shadow: 2px 2px 1px black;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }

      @media screen and (max-width: 468px) {
        font-size: 10px;
        font-weight: lighter;
      }
    }
  }
`;

const SingleCourse = styled.div`
  min-width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    height: 55px;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;

    select {
      padding: 5px 10px;
      border-radius: 6px;
      background: white;
      cursor: pointer;

      :focus {
        outline: 0;
      }
    }
  }
`;
const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
const AddButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ebbb55;
  cursor: pointer;
  margin-right: 10px;
  font-weight: bold;
  background: #ffc800;

  :active {
    outline: none;
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }
`;

const AlertWarningContainer = styled.div`
  width: 100%;
  height: 40px;
  background: #ed4f32;
  color: white;
  font-size: 19px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
`;

const AlertSuccessContainer = styled.div`
  width: 100%;
  height: 40px;
  background: #15cd72;
  color: white;
  font-size: 19px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
`;

const ProcessButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #28145c;
  cursor: pointer;
  margin-left: 10px;
  background: #281360;
  color: white;
  font-weight: bold;

  :active {
    outline: none;
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }
`;

const ResultPane = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;

  span {
    text-decoration: none;
    font-size: 18px;
    padding: 10px 15px;
    background: #15cd72;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    font-weight: bolder;
    border: 1px solid white;
    
    &:active {
      transform: scale(.88)
    }
  }

  p {
    font-size: 18px;
    padding: 10px 15px;
    background: #ed4f32;;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    font-weight: bolder;
    border: 1px solid white;
  }
`