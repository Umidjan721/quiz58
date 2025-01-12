import React from "react";

export const AnswerItem = ({answerText, answerVariants}) =>{

    return(
        <li className="variant-wrapper">
                <input required type="radio" name="cource" id={answerVariants}/>
                <label htmlFor={answerVariants}>{answerText}</label>
              </li>
    );
};