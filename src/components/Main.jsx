// Основное содержимое страницы
import { useState, useEffect } from 'react';
import logo from '../images/avatarBlack.jpg';
import { api } from '../utils/Api';

export function Main({ onEditAvatar, onEditProfile, onAddPlace }) { // Передаются функции открытия попапов из App.js
  const [userAvatar, setUserAvatar] = useState(logo);
  const [userName, setUserName] = useState('Человек');
  const [userDescription, setUserDescription] = useState('Исследователь мира');
  const [cards, setCards] = useState([]);

// Делаем запрос с сервера и устанавливаем данные в профиль
  useEffect(() => {
    api.getUserInfo().then(data => {
      console.log(data)
      setUserAvatar(data.avatar)
      setUserName(data.name)
      setUserDescription(data.about)
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    return () => {
      console.log()
    };
  }, []); // Обновление по useContext

// Запрос на сервер для получения данных карточки
  useEffect(() => {
    api.getInitialCards().then(data => {
      const cardsFromApi = data.map(item => ({
        id: item._id,
        name: item.name,
        link: item.link,
        owner: item.owner,
        linkes: item.likes
      }));
      setCards(cardsFromApi)
    })
  }, []);

  return (
    <main className="content">

{/* Секция, блок profile */}
      <section className="profile page__profile-position section">
        <div className="profile__info">
          <div className="profile__avatar">
            <img className="profile__avatar-image" src={userAvatar} alt='Аватарка'/>
            <button className="profile__avatar-button" type="button" onClick={onEditAvatar} aria-label="Обновить аватарку"></button> {/* onClick - по клику, вызывается функция */}
          </div>
          <div className="profile__content">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__activity">{userDescription}</p>
            <button className="profile__button profile__button_action_edit" type="button" onClick={onEditProfile} aria-label="Редактировать"></button> {/* onClick - по клику, вызывается функция */}
          </div>
        </div>
        <button className="profile__button profile__button_action_add" type="button" onClick={onAddPlace} aria-label="Добавить"></button> {/* onClick - по клику, вызывается функция */}
      </section>

{/* Секция, блок elements */}
      <section id="elements" className="elements page__elements-position section">
        {cards.map(card => (
          <article className="elements-block" key={card.id}>
            <img src={card.link} alt={card.name} className="elements-block__image"/>
            <button className="elements-block__delete-button"></button>
            <div className="elements-block__text">
              <h2 className="elements-block__name">{card.name}</h2>
              <div className="elements-block__like-container">
                <button className="elements-block__like-button" type="button" aria-label="Лайк"></button>
                <span className="elements-block__like-count">{card.likes}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}