export function Card(props) {
    function handleClick() {
        props.onCardClick(props.card)
    }
    return(
        <li className="cards__info">
            <img src={ props.card.link } alt={ props.card.name } className="cards__image" onClick={ handleClick }/>
            <div className="cards__item">
                <h2 className="cards__description">{ props.card.name }</h2>
                <button type="button" aria-label="delete" className="cards__delete"></button>
                <div className="cards__like-zone">
                    <button type="button" aria-label="like" className="cards__like"></button>
                    <span className="cards__like-counter">{ props.card.likes.length }</span>
                </div>
            </div>
        </li>
    )
}