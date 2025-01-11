import React from "react";

const Header = ({headerText, textType}) => {
    function headerType() {
        switch (textType) {
            case "h1":
               return <h1>{headerText}</h1>;               
            case "h2":
                return <h2>{headerText}</h2>;                         
            case "h3":
               return <h3>{headerText}</h3>;
            default:
              return <h1>{headerText}</h1>;
        }
    };
    return headerType();
};

export default Header;