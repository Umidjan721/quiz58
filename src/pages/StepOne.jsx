import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import Header from "../components/Header";
import { AppLable } from "../components/AppLable";
import { AppButton } from "../components/AppButton";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar/>
          <div className="question">
            <Header headerText="1. Занимательный вопрос" textType="h2"/>
            <AppLable labelText="Required" labelType="text" labelName="answer" labelPlaceholder="Ваш ответ" labelError="Введите номер в правильном формате например"/>
            <AppButton buttonText="Далее" buttonType="button" isDisabled={false}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
