import { PopupWithForm } from "./PopupWithForm.jsx";

export function PopupEditProfile(props) {
    return(
        <PopupWithForm
            isOpen = { props.isOpen }
            onClose = { props.onClose }
            title = 'Редактировать профиль'
            name = 'profile'
            text = 'Сохранить'
        >
        <input name="name" className="popup__edit popup__edit_input_name" type="text" placeholder="Ваше имя" minLength="2" maxLength="40" required/>
            <span id="name-error" className="popup__error popup__error_active"></span>
        <input name="description" className="popup__edit popup__edit_input_description" type="text" placeholder="Род деятельности" minLength="2" maxLength="200" required/>
            <span id="description-error" className="popup__error popup__error_active"></span>
        </PopupWithForm>
    )
}