import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import Header from "../components/Header";
import { AnswerItems } from "../components/AnswerItems";
import { AddButton } from "../components/AddButton";
import { useNavigate } from "react-router-dom";

const StepFour = () => {
  const navigate = useNavigate()
  const [checkVariants, setCheckVariants] = useState(null)

  const variants = [1, 2, 3, 4, 5]
  const cource = JSON.parse(localStorage.getItem("userInfo"))

    useEffect(()=>{
      const userInfo = {
        ...JSON.parse(localStorage.getItem("userInfo")),
        checkVariants,
      };
      localStorage.setItem("userInfo",JSON.stringify(userInfo));
  },[checkVariants])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <Header headerText={`Как хорошо вы знаете ${cource.checkedAnswer}`} textType="h2" />
            <ul className="level-variants">
              {variants.map((elem, index) =>
                  <AnswerItems
                    answerText={elem}
                    answerVariants={index}
                    key={index}
                    onChange={()=>setCheckVariants(elem)}
                  />)}
            </ul>
            <AddButton
              isDisabled={!checkVariants}
              buttonClick={()=>navigate("/thanks")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
