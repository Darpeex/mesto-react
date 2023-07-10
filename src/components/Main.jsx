// Основное содержимое страницы
import { useContext } from 'react';
import { Card } from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { CardsContext } from '../context/CardsContext';

export function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) { // Передаются функции открытия попапов из App.js
  const currentUser = useContext(CurrentUserContext);
  const cardData = useContext(CardsContext);

  return (
    <main className="content">

{/* Секция, блок profile */}
      <section className="profile page__profile-position section">
        <div className="profile__info">
          <div className="profile__avatar">
            <img className="profile__avatar-image" src={currentUser.avatar} alt="Аватарка"/>
            <button className="profile__avatar-button" type="button" onClick={onEditAvatar} aria-label="Обновить аватарку"></button> {/* onClick - по клику, вызывается функция */}
          </div>
          <div className="profile__content">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__activity">{currentUser.about}</p>
            <button className="profile__button profile__button_action_edit" type="button" onClick={onEditProfile} aria-label="Редактировать"></button> {/* onClick - по клику, вызывается функция */}
          </div>
        </div>
        <button className="profile__button profile__button_action_add" type="button" onClick={onAddPlace} aria-label="Добавить"></button> {/* onClick - по клику, вызывается функция */}
      </section>
      {/* Отрисовываем каждую карточку при помощи компонента Card и возвращаем в разметку внутрь section */}
      <section id="elements" className="elements page__elements-position section">
        {cardData.map(card => // Пробегаем по переданному массиву и возвращаем целые карточки при помощи разметки
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        )}
      </section>
    </main>
  )
}