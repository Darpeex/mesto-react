// Компонент Card
import React from "react"
import { CurrentUserContext } from '../context/CurrentUserContext';

export function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);  
  const isOwn = card.owner._id === currentUser._id; // Определяем, являемся ли мы владельцем текущей карточки
  const isLiked = card.likes.some(i => i._id === currentUser._id); // Определяем, поставлен ли лайк текущим пользователем

  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
// Секция, блок elements
    <article className="elements-block" key={card._id}>
      <img src={card.link} alt={card.name} onClick={() => handleClick(card)} className="elements-block__image"/>
      {isOwn && <button className="elements-block__delete-button" onClick={handleDeleteClick}></button>}
      <div className="elements-block__text">
        <h2 className="elements-block__name">{card.name}</h2>
        <div className="elements-block__like-container">
        <button className={`elements-block__like-button ${isLiked && 'elements-block__like-button_active'}`} type="button" aria-label="Лайк" onClick={handleLikeClick}></button>
          <span className="elements-block__like-count">{card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}