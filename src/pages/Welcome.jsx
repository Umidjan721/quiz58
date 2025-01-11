import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { AppLable } from "../components/AppLable";
import { AppButton } from "../components/AppButton";

const Welcome = () => {
  //регулярные выражения
  const RegexPhone = /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
  const RegexName = /^[a-zA-Zа-яА-ЯёЁ\s]+$/

  //записывает значение наших инпутов
  const[name, setName]=useState("");
  const[phone, setPhone]= useState("");
  //передает состояние в наш пропс hasError
  const[nameError, setNameError]=useState(false);
  const[phoneError, setPhoneError]=useState(false);
  const[buttonError, setButtonError]= useState(true);

  const handleClick = ()=>{
   if(!name ){
    setNameError(true);
  }else if(!phone){
    setPhoneError(true);
  } else {
    setNameError(false);
    setPhoneError(false);  
  }
};
   
useEffect(()=>{
  if(!name || !phone){
    setButtonError(true)
  } else{
    setButtonError(false)
  }
}, [name,phone]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header headerText="Добро пожаловать в квиз от лучшего учебного центра" textType="h3"/>
          <form className="welcome__form">
            <AppLable labelText="Ваше имя" labelName="username" labelPlaceholder="Введите ваше имя " labelType="text" labelError="Введите имя в правильном формате например" inputValue={name} inputChange={setName} hasError={nameError}/>
            <AppLable labelText="Ваш номер" labelName="phone" labelPlaceholder="+998 9- --- -- --" labelType="tel" labelError="Введите номер в правильном формате" inputValue={phone} inputChange={setPhone} hasError={phoneError}/>
            <AppButton
             buttonClick={handleClick}
             buttonText="Далее" 
             buttonType="button" 
             isDisabled={buttonError}/>        
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
