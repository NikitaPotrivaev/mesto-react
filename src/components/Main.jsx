import { useEffect, useState } from "react"
import { api } from "../utils/Api.jsx";
import { Card } from "./Card.jsx";

export function Main(props) {
  const [userAvatar, setUserAvatar] = useState('')
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([ api.getProfileData(), api.getInitialCards() ])
    .then(([ profileData, cardData ]) => {
      setUserName(profileData.name);
      setUserDescription(profileData.about);
      setUserAvatar(profileData.avatar);
      setCards(cardData);
    })
    .catch(err => console.log(`Сервер не нашёл данные, ${err}`))
  }, [])

    return(
      <main>
        <section className="profile">
          <div className="profile__avatar-zone">
            <button className="profile__avatar-edit" type="button" aria-label="edit" onClick={ props.onEditAvatar }></button>
            <img src={ userAvatar } alt="Аватар профиля" className="profile__avatar"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__info-name">{ userName }</h1>
            <button className="profile__info-edit" type="button" aria-label="edit" onClick={ props.onEditProfile }></button>
            <p className="profile__info-hobby">{ userDescription }</p>
          </div>
          <button className="profile__add-mesto" type="button" aria-label="add" onClick={ props.onAddPlace }></button>
        </section>
        <section className="cards">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card key = { card._id } card = { card } onCardClick = { props.onCardClick }/>
            ))}
          </ul>
        </section>
      </main>
    )
}