import React from "react";
import Header from "../components/Header";
import { AppLable } from "../components/AppLable";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerText="Добро пожаловать в квиз от лучшего учебного центра" textType="h3"/>
          <form className="welcome__form">
            <AppLable labelText="Ваше имя" labelName="username" labelPlaceholder="Введите ваше имя " labelType="text" labelError="Введите имя в правильном формате например"/>
            <AppLable labelText="Ваш номер" labelName="phone" labelPlaceholder="+998 9- --- -- --" labelType="tel" labelError="Введите номер в правильном формате"/>
            <AppButton buttonText="Далее" buttonType="button" isDisabled={false}/>        
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
