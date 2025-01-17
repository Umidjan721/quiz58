import React from "react";

export const AddButton = ({buttonType, buttonText="Далее", isDisabled, buttonClick}) =>{
    return(
        <button 
        disabled={isDisabled} 
        type={buttonType} 
        onClick={buttonClick}
        id="next-btn">
        {buttonText}
      </button>
    );
};