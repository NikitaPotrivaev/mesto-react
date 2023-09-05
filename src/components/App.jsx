import { Header } from "./Header.jsx";
import { Main } from "./Main.jsx";
import { Footer } from "./Footer.jsx";
import { useState } from "react";
import { PopupEditAvatar } from "./PopupEditAvatar.jsx";
import { PopupEditProfile } from "./PopupEditProfile.jsx";
import { PopupAddCard } from "./PopupAddCard.jsx";
import { ImagePopup } from "./ImagePopup.jsx";

function App() {
  const [isEditAvatarPopup, setEditAvatarPopup] = useState(false);
  const [isEditProfilePopup, setEditProfilePopup] = useState(false);
  const [isAddPlacePopup, setAddPlacePopup] = useState(false);
  const [isImagePopup, setImagePopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState({})

function handleEditAvatarClick() {
  setEditAvatarPopup(true)
}

function handleEditProfileClick() {
  setEditProfilePopup(true)
}

function handleAddPlaceClick() {
  setAddPlacePopup(true)
}

function handleCardClick(card) {
  setImagePopup(true)
  setSelectedCard({ name: card.name, link: card.link })
}

function closeAllPopups() {
  setEditAvatarPopup(false)
  setEditProfilePopup(false)
  setAddPlacePopup(false)
  setImagePopup(false)
}

  return (
    <>
      <div className="content">
        <div className="page">
          <Header/>
          <Main
            onEditAvatar = { handleEditAvatarClick }
            onEditProfile = { handleEditProfileClick }
            onAddPlace = { handleAddPlaceClick }
            onCardClick = { handleCardClick }
          />
          <Footer/>
          <PopupEditAvatar
            isOpen = { isEditAvatarPopup }
            onClose = { closeAllPopups }
          />
          <PopupEditProfile
            isOpen = { isEditProfilePopup }
            onClose = { closeAllPopups }
          />
          <PopupAddCard
            isOpen = { isAddPlacePopup }
            onClose = { closeAllPopups }
          />
          <ImagePopup
            isOpen = { isImagePopup }
            onClose = { closeAllPopups }
            card = { selectedCard }
          />
        </div>
      </div>
    </>
  )
}

export default App