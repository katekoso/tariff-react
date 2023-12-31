function Card(props) {
    const {price, speed, theme, isSelected, onClick} = props;
    
    return (
        <div className={isSelected ? 'card selected' : 'card'} onClick={onClick}>
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