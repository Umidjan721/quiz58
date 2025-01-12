import React from "react";
import { ProgressBar } from "../components/ProgressBar";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">


          <ProgressBar currentStep={0}/>
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <label className="input-wrapper">
              <input
              required 
              type="text"
              name="answer"
              placeholder="Ваш ответ" 
              />
              <span id="error-message">
                Введите номер в правильн формате например
              </span>
            </label>
            <button type="button" disabled id="next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
