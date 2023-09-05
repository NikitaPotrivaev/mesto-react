import { PopupWithForm } from "./PopupWithForm.jsx";

export function PopupAddCard(props) {
    return(
    <PopupWithForm
        isOpen = { props.isOpen }
        onClose = { props.onClose }
        title = 'Новое место'
        name = 'mesto'
        text = 'Создать'
    >
        <input name="cards" className="popup__edit" type="text" placeholder="Название" minLength="2" maxLength="30" required/>
            <span id="cards-error" className="popup__error popup__error_active"></span>
        <input name="link" className="popup__edit" type="url" placeholder="Ссылка на картинку" required/>
            <span id="link-error" className="popup__error popup__error_active"></span>
    </PopupWithForm>
    )
}