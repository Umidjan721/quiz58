import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import Header from "../components/Header";
import { AnswerItem } from "../components/AnswerItem.tsx";
import { Link } from "react-router-dom";

const StepTwo = () => {
  const variants =[
    {
      id:"variant-1",
      labelText:"Fronted"
    },
    {
      id:"variant-2",
      labelText:"Python"
    },
    {
      id:"variant-3",
      labelText:"UX/UI"
    },
    {
      id:"variant-4",
      labelText:"FullStack"
    },
  ];
const [checkedAnswer, setCheckedAnswer]= useState("")
useEffect(()=>{
  const userInfo = { ...JSON.parse(localStorage.getItem("userInfo")), checkedAnswer};
  localStorage.setItem("userInfo", JSON.stringify(userInfo))
}, [checkedAnswer]);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
        <ProgressBar currentStep={1}/> 
          <div className="question">
            <Header headerText="Выберите курс." textType="h2" />
            <ul className="variants">
              {variants.map((elem)=>{
                return(<AnswerItem 
                key={elem.id} 
                answerText={elem.labelText} 
                answerVariants={elem.id}
                onChange={()=>{setCheckedAnswer(elem.labelText)}}
                checked={checkedAnswer === elem.labelText}
                />
                );
              })}
            </ul>
            <Link to="/step-three">
             <button type="button"  id="next-btn"    >
               Далее
             </button>
            </Link>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
