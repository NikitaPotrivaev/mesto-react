import { PopupWithForm } from "./PopupWithForm.jsx";

export function PopupEditAvatar(props) {
    return(
    <PopupWithForm
        isOpen = { props.isOpen }
        onClose = { props.onClose }
        title = 'Обновить аватар'
        name = 'picture'
        text = 'Сохранить'
    >
        <input name="avatar" className="popup__edit" type="url" placeholder="Введите ссылку" required/>
            <span id="avatar-error" className="popup__error popup__error_active"></span>
    </PopupWithForm>
    )
}