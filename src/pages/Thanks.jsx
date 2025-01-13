import React, { useEffect, useState } from "react";

const Thanks = () => {
  // Состояние для хранения данных пользователя
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Загружаем данные из localStorage
    const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(storedUserInfo); // Сохраняем их в состояние
  }, []);

  // Если данные не загружены, показываем сообщение о загрузке
  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса, {userInfo.checkedAnswer}!</h1> {/* Используем данные из localStorage */}
          <p>
            Ваши данные:
          </p>
          <ul>
            <li><strong>Выбранный курс:</strong> {userInfo.checkedAnswer}</li>
            <li><strong>Ваш вариант:</strong> {userInfo.checkVariants}</li>
          </ul>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button type="button" id="get-link">
            Получить ссылку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
