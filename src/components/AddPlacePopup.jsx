import { PopupWithForm } from "./PopupWithForm";
import { useEffect, useState } from "react";

export function AddPlacePopup(props) {

   const [name, setName] = useState('')
   const [link, setLink] = useState('')

   useEffect(() => {
    setName('')
    setLink('')
   }, [props.isOpen])

   function handleSubmit(e) {
    e.preventDefault()
    props.onAddPlace(name, link)
   }

    return(
    <PopupWithForm
        isOpen = { props.isOpen }
        onClose = { props.onClose }
        isLoading = { props.isLoading }
        onSubmit = { handleSubmit }
        title = 'Новое место'
        name = 'mesto'
        text = 'Создать'
        loadingText = 'Сохранение...'
    >
        <input name="cards" className="popup__edit popup__edit_margin" value={ name || '' } onChange={ e => setName(e.target.value) } type="text" placeholder="Название" minLength="2" maxLength="30" required/>
            <span id="cards-error" className="popup__error popup__error_active"></span>
        <input name="link" className="popup__edit" value={ link || '' } onChange={ e => setLink(e.target.value) } type="url" placeholder="Ссылка на картинку" required/>
            <span id="link-error" className="popup__error popup__error_active"></span>
    </PopupWithForm>
    )
}