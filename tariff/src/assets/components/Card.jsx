import React, { useState } from "react";

function Card(props) {
    const {price, speed, theme} = props;
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    }
    
    return (
        <div className={selected ? 'card selected' : 'card'} onClick={handleClick}>
            <div className={"card__header " + theme.headerBg}>
                <p className="header__text">Безлимитный {price}</p>
             </div>   
            <div className={"card__main " + theme.mainBg}>
                <div className="main__text">
                    <span>руб </span>
                    <span>{price} </span>
                    <span>/мес</span>
                </div>
            </div>
            <p className="card__speed">до {speed} Мбит/сек</p>
            <p className="card__footer">Объем включенного трафика не ограничен</p>
        </div>
    );
}

export default Card;