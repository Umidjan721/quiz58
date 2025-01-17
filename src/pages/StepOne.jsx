import React, { useState, useEffect } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const StepOne = () => {
  const [answer, setAnswer] = useState(""); 
  const [buttonDisabled, setButtonDisabled] = useState(true); 

  useEffect(() => {
    if (answer) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
      userInfo.answer = answer;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      setButtonDisabled(false); 
    } else {
      setButtonDisabled(true); 
    }
  }, [answer]);

  const handleInputChange = (event) => {
    setAnswer(event.target.value); 
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar currentStep={0} />
          <div className="question">
            <Header textType="h2" headerText="Откуда вы про нас услышали?"/>
            <label className="input-wrapper">
              <input
                required
                type="text"
                name="answer"
                placeholder="Ваш ответ"
                value={answer} 
                onChange={handleInputChange} 
              />
              <span id="error-message">
                Введите номер в правильном формате, например
              </span>
            </label>
            <Link to="/step-two">
              <button
                type="button"
                id="next-btn"
                disabled={buttonDisabled} 
              >
                Далее
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
