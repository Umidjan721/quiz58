import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const StepThree = () => {
  const variants = [
    {
      id: "variant-1",
      labelText: "Ваш ответ 1",
      imgSrc: "./img/laugh.png",
      altText: "laugh",
    },
    {
      id: "variant-2",
      labelText: "Ваш ответ 2",
      imgSrc: "./img/hearts.png",
      altText: "hearts",
    },
    {
      id: "variant-3",
      labelText: "Ваш ответ 3",
      imgSrc: "./img/smirk.png",
      altText: "smirk",
    },
    {
      id: "variant-4",
      labelText: "Ваш ответ 4",
      imgSrc: "./img/fright.png",
      altText: "fright",
    },
  ];


  const [selectedVariant, setSelectedVariant] = useState(null);
  const handleSelect = (id) => {
    setSelectedVariant(id);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar currentStep={2} />

          <div className="question">
            <Header headerText="3. Занимательный вопрос" textType="h2" />

            <ul className="emoji-variants">
              {variants.map((elem) => (
                <li className="variant-wrapper" key={elem.id}>
                  <input
                    type="radio"
                    name="variant"
                    id={elem.id}
                    checked={selectedVariant === elem.id}
                    onChange={() => handleSelect(elem.id)}
                  />
                  <label htmlFor={elem.id}>
                    <img src={elem.imgSrc} alt={elem.altText} />
                    <p>{elem.labelText}</p>
                  </label>
                </li>
              ))}
            </ul>

            <Link to="/step-four">
              <button
                type="button"
                id="next-btn"
                disabled={!selectedVariant} 
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

export default StepThree;
