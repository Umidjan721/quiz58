import React, { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import { AppLable } from "../components/AppLable";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/themeContext";

const Welcome = () => {

  const {theme, toggleTheme}= useContext(ThemeContext);
  console.log("theme", theme);
  //регулярные выражения
  const RegexPhone = 
  /^\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  const RegexName = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

  //записывает значение наших инпутов
  const[name, setName]=useState("");
  const[phone, setPhone]= useState("");
  //передает состояние в наш пропс hasError
  const[nameError, setNameError]=useState(false);
  const[phoneError, setPhoneError]=useState(false);

  const[buttonError, setButtonError]= useState(true);
  const navigate = useNavigate();
  
  const handleClick = ()=>{
   if(!RegexName.test(name) ){
    setNameError(true);
  }else if(!RegexPhone.test(phone)){
    setPhoneError(true);
  } else {
    setNameError(false);
    setPhoneError(false);  
    navigate("/step-one")
    localStorage.setItem("userInfo", JSON.stringify({name,phone}) )
  }
};
   
useEffect(()=>{
  if(!name || !phone){
    setButtonError(true);
  } else{
    setButtonError(false);
  }
}, [name,phone]);
  return (
    <div className={`container ${theme===themes.dark && "_dark"}`}>
      <div className="wrapper">
        <div className="welcome">
          <AppButton buttonType="button"
          buttonClick={toggleTheme}
          buttonText={theme===themes.dark ? "темная тема": "светлая тема"}
          />
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
