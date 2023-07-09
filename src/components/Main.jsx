// Основное содержимое страницы
import { useState, useEffect, useContext } from 'react';
import { api } from '../utils/Api';
import { Card } from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';

export function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) { // Передаются функции открытия попапов из App.js
  const userInfo = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

// Запрос на сервер для получения данных карточки
  useEffect(() => {
    api.getInitialCards().then(data => {
      const cardsFromApi = data.map(item => ({
        id: item._id,
        name: item.name,
        link: item.link,
        owner: item.owner,
        likes: item.likes
      }));
      setCards(cardsFromApi)
    })
    .catch(err => console.log(`Ошибка: ${err}`))
  }, []);

  return (
    <main className="content">

{/* Секция, блок profile */}
      <section className="profile page__profile-position section">
        <div className="profile__info">
          <div className="profile__avatar">
            <img className="profile__avatar-image" src={userInfo.avatar} alt="Аватарка"/>
            <button className="profile__avatar-button" type="button" onClick={onEditAvatar} aria-label="Обновить аватарку"></button> {/* onClick - по клику, вызывается функция */}
          </div>
          <div className="profile__content">
            <h1 className="profile__name">{userInfo.name}</h1>
            <p className="profile__activity">{userInfo.about}</p>
            <button className="profile__button profile__button_action_edit" type="button" onClick={onEditProfile} aria-label="Редактировать"></button> {/* onClick - по клику, вызывается функция */}
          </div>
        </div>
        <button className="profile__button profile__button_action_add" type="button" onClick={onAddPlace} aria-label="Добавить"></button> {/* onClick - по клику, вызывается функция */}
      </section>
      {/* Отрисовываем каждую карточку при помощи компонента Card и возвращаем в разметку внутрь section */}
      <section id="elements" className="elements page__elements-position section">
        {cards.map(card => // Пробегаем по переданному массиву и возвращаем целые карточки при помощи разметки
          <Card key={card.id} card={card} onCardClick={onCardClick} />
        )}
      </section>
    </main>
  )
}