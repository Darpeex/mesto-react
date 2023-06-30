// Компонент Card
import React from "react"

export function Card({ cards, onCardClick }) {
  function handleClick(card) {
    onCardClick(card);
  }

  return (
// Секция, блок elements
    <section id="elements" className="elements page__elements-position section">
      {cards.map(card => // Пробегаем по переданному массиву и возвращаем целые карточки при помощи разметки
        <article className="elements-block" key={card.id}>
          <img src={card.link} alt={card.name} onClick={() => handleClick(card)} className="elements-block__image"/>
          <button className="elements-block__delete-button"></button>
          <div className="elements-block__text">
            <h2 className="elements-block__name">{card.name}</h2>
            <div className="elements-block__like-container">
              <button className="elements-block__like-button" type="button" aria-label="Лайк"></button>
              <span className="elements-block__like-count">{card.likes.length}</span>
            </div>
          </div>
        </article>
      )}
    </section>
  )
}