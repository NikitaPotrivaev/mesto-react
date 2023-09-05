export function PopupWithForm(props) {
    return(
     <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button className="popup__close" type="button" onClick={ props.onClose } aria-label="Закрыть"></button>
          <h2 className="popup__title popup__title_margin">{ props.title }</h2>
          <form className="popup__form" name={ props.name } noValidate>
            { props.children }
            <button type="submit" className="popup__submit" aria-label="save">{ props.text }</button>
          </form>
        </div>
     </div>
    )
}