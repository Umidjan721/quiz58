import React, { useState, useEffect } from "react";
import { ProgressBar } from "../components/ProgressBar";
import Header from "../components/Header";
import { AnswerItem } from "../components/AnswerItem";
import { AddButton } from "../components/AddButton";
import { useNavigate } from "react-router-dom";

const StepFour = () => {
  const navigate = useNavigate();
  const [checkVariants, setCheckVariants] = useState(null);
  const variants = [1, 2, 3, 4, 5];
  const course = JSON.parse(localStorage.getItem("userInfo"));

  // Обновление данных в localStorage при изменении checkVariants
  useEffect(() => {
    const userInfo = {
      ...JSON.parse(localStorage.getItem("userInfo")),
      checkVariants,
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [checkVariants]);

  // Обработчик выбора варианта
  const handleSelectVariant = (variant) => {
    setCheckVariants(variant);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={3} />
          <div className="question">
            <Header headerText={`Как хорошо вы знаете ${course.checkedAnswer}`} textType="h2" />
            <ul className="level-variants">
              {variants.map((elem, index) => (
                <AnswerItem
                  key={index}
                  answerText={elem}
                  answerVariants={index}
                  onChange={() => handleSelectVariant(elem)} // обновляем состояние
                />
              ))}
            </ul>
            <AddButton
              isDisabled={!checkVariants} // блокировка кнопки, если вариант не выбран
              buttonType="button"
              buttonClick={() => navigate("/thanks")} // переход на страницу благодарности
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
