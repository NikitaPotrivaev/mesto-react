import { useContext, useEffect, useState } from "react";
import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from "../context/CurrentUserContext";

export function EditProfilePopup(props) {
    const currentUser = useContext(CurrentUserContext)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        setName(currentUser.name)
        setDescription(currentUser.about)
    }, [currentUser])

    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateUser({ 
            name, 
            about: description 
        })
    }
    
    return(
        <PopupWithForm
            isOpen = { props.isOpen }
            onClose = { props.onClose }
            isLoading = { props.isLoading }
            onSubmit = { handleSubmit }
            title = 'Редактировать профиль'
            name = 'profile'
            text = 'Сохранить'
            loadingText = 'Сохранение...'
        >
        <input name="name" className="popup__edit popup__edit_margin" type="text" placeholder="Ваше имя" value={ name || '' } onChange={ e => setName(e.target.value) } minLength="2" maxLength="40" required/>
            <span id="name-error" className="popup__error popup__error_active"></span>
        <input name="description" className="popup__edit" type="text" placeholder="Род деятельности" value={ description || '' } onChange={ e => setDescription(e.target.value) } minLength="2" maxLength="200" required/>
            <span id="description-error" className="popup__error popup__error_active"></span>
        </PopupWithForm>
    )
}