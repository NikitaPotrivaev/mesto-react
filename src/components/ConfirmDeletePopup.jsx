import { PopupWithForm } from "./PopupWithForm";

export function ConfirmDeletePopup(props) {
    function handleSubmit(e) {
        e.preventDefault()
        props.onCardDelete(props.card)
    }

    return(
        <PopupWithForm
            isOpen = { props.isOpen }
            onClose = { props.onClose }
            isLoading = { props.isLoading }
            onSubmit = { handleSubmit }
            title = 'Вы уверены ?'
            name = 'delete'
            text = 'Да'
            loadingText = 'Удаление...'
        />
    )
}