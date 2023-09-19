import { useRef, useEffect } from "react";
import { PopupWithForm } from "./PopupWithForm";

export function EditAvatarPopup(props) {

    const ref = useRef()

    useEffect(() => {
        ref.current.value = ''
    }, [props.isOpen])

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({ avatar: ref.current.value })
    }

    return(
    <PopupWithForm
        isOpen = { props.isOpen }
        onClose = { props.onClose }
        isLoading = { props.isLoading }
        onSubmit = { handleSubmit }
        title = 'Обновить аватар'
        name = 'picture'
        text = 'Сохранить'
        loadingText = 'Сохранение...'
    >
        <input name="avatar" className="popup__edit" type="url" placeholder="Введите ссылку" ref={ref} required/>
            <span id="avatar-error" className="popup__error popup__error_active"></span>
    </PopupWithForm>
    )
}